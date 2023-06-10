import Chat from './chat';

interface ChatProps {
  isLoading?: boolean;
  message: string;
}

export default function Chats({
  chats,
  durations,
}: {
  chats: ChatProps[];
  durations: number[];
}) {
  return (
    <div className="mo:mx-60 space-y-2 flex flex-col items-start  mo:space-y-8">
      {chats.map((chat, index) => (
        <Chat
          duration={durations[index]}
          key={index}
          isLoading={chat.isLoading}
          message={chat.message}
        />
      ))}
    </div>
  );
}
