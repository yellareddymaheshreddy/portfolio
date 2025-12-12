import {GoogleGenAI} from '@google/genai';
import { SYSTEM_PROMPT } from '@/lib/ai-config';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY || ''});

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('Gemini API key not configured');
    }

    const { messages } = await req.json();

    const conversationHistory = messages.slice(0, -1)
      .map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`)
      .join('\n');

    const prompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${conversationHistory}\n\nUser: ${messages[messages.length - 1].content}`;
    const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });
    return NextResponse.json({ 
      role: 'assistant (you)',
      content: response.text
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 
