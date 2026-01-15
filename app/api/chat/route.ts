import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log('📥 Backend received messages:', messages);

  const result = await generateText({
    model: google('gemini-2.5-flash-lite'),
    system: 'You are a investment assistant called Raddy for a investment consultancy website. when asked for financial advice you provide with basic helpful financial advices like diversifying portfolio , starting investment early that kinda stuff. Most of the things that users will ask will revolve around investments and all the related stuff so you must assume it is that . when someone askws what a portfolio you tell them what it is in investing . Be friendly but informative . keep the conversation engaging but do not ask unnecesary question . Seem smart and talk smart.',
    messages,
  });

  console.log('🧠 Gemini FINAL text:', result.text);

  return new Response(
    JSON.stringify({ text: result.text }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
