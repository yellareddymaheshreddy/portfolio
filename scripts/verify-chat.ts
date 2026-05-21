import Groq from 'groq-sdk';
import { SYSTEM_PROMPT } from '../src/lib/ai-config';
import { parseLLMResponse } from '../src/lib/llmResponseParser';
import path from 'path';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '' });

async function verify() {
  console.log('Testing Groq Integration with System Prompt...');
  
  const messages = [
    { role: 'user', content: 'Who are you and what are your projects?' }
  ];

  const conversationHistory = '';
  const prompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${conversationHistory}\n\nUser: ${messages[0].content}`;

  try {
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
    console.log('Raw Content:', content);

    const parsedResponse = parseLLMResponse(content);
    console.log('Parsed Response:', JSON.stringify(parsedResponse, null, 2));

    if (parsedResponse.message && parsedResponse.intent) {
      console.log('✅ Verification Successful: Response contains message and intent.');
    } else {
      console.error('❌ Verification Failed: Missing message or intent in response.');
    }
  } catch (error) {
    console.error('❌ Verification Error:', error);
  }
}

verify();
