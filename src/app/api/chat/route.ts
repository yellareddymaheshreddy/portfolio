import Groq from 'groq-sdk';
import { SYSTEM_PROMPT } from '@/lib/ai-config';
import { NextResponse } from 'next/server';
import { parseLLMResponse } from '@/lib/llmResponseParser';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '' });

export async function POST(req: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('Groq API key not configured');
    }

    const { messages } = await req.json();

    const conversationHistory = messages.slice(0, -1)
      .map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`)
      .join('\n');

    const prompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${conversationHistory}\n\nUser: ${messages[messages.length - 1].content}`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'openai/gpt-oss-20b',
      response_format: { type: 'json_object' },
    });

    const content = chatCompletion.choices[0]?.message?.content || '{}';
    const parsedResponse = parseLLMResponse(content);

    return NextResponse.json({
      role: 'assistant (you)',
      content: parsedResponse.message,
      data: parsedResponse
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
