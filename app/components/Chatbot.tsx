'use client';

import { useState ,useEffect ,useRef} from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hey 👋 What can I help you with?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        chatRef.current &&
        !chatRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

async function sendMessage(e: React.FormEvent) {
  e.preventDefault();
  if (!input.trim()) return;

  const userMessage: Message = { role: 'user', content: input };
  const updatedMessages: Message[] = [...messages, userMessage];

  console.log('📤 Sending messages:', updatedMessages);

  setMessages(updatedMessages);
  setInput('');
  setLoading(true);

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: updatedMessages }),
  });

  const data = await res.json();

  console.log('🧠 Gemini response:', data.text);

  setMessages([
    ...updatedMessages,
    { role: 'assistant', content: data.text },
  ]);

  setLoading(false);
}




  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div ref={chatRef} className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          <div className="p-3 border-b font-semibold">
            Chat Assistant
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i}>
                <b>{m.role === 'user' ? 'You' : 'Bot'}:</b> {m.content}
              </div>
            ))}
            {loading && <div>Bot is typing…</div>}
          </div>

          <form onSubmit={sendMessage} className="p-2 border-t flex">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded px-2 py-1 text-sm"
            />
            <button
              type="submit"
              className="ml-2 px-3 bg-black text-white rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
