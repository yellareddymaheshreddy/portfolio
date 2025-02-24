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

    // Start a chat
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT }],
        }
      ],
    });

    try {
      // Send the message and get the response
      const result = await chat.sendMessage(messages[messages.length - 1].content);
      const response = await result.response;
      
      return NextResponse.json({ 
        role: 'assistant',
        content: response.text() 
      });
    } catch (modelError) {
      console.error('Gemini API Error:', modelError);
      throw new Error('Failed to get response from Gemini');
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 