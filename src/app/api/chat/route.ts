import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT } from '@/lib/ai-config';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    // Validate API key
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('Gemini API key not configured');
    }

    const { messages } = await req.json();
    
    // Get the model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Format the entire conversation history into a single context string
    const conversationHistory = messages.slice(0, -1)
      .map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`)
      .join('\n');

    // Combine system prompt, history, and new message
    const prompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${conversationHistory}\n\nUser: ${messages[messages.length - 1].content}`;

    // Send everything in a single request
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return NextResponse.json({ 
      role: 'assistant',
      content: response.text() 
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 