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
    <div className="chat-box mx-60 my-12 space-y-8">
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
