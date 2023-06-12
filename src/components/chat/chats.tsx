import Chat from './chat';

interface ChatProps {
  isLoading?: boolean;
  message: string;
  url: string;
}

export default function Chats({
  chats,
  durations,
}: {
  chats: ChatProps[];
  durations: number[];
}) {
  console;
  return (
    <div className="mo:mx-60 space-y-2 flex flex-col items-start  mo:space-y-8">
      {chats.map((chat, index) => (
        <Chat
          duration={durations[index]}
          key={index}
          url={chat.url}
          isLoading={chat.isLoading}
          message={chat.message}
        />
      ))}
    </div>
  );
}
