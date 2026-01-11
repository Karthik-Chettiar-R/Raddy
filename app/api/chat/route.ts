import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log('📥 Backend received messages:', messages);

  const result = await generateText({
    model: google('gemini-2.5-flash-lite'),
    system: 'You are a helpful website assistant.',
    messages,
  });

  console.log('🧠 Gemini FINAL text:', result.text);

  return new Response(
    JSON.stringify({ text: result.text }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
