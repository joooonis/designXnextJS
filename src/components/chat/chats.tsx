import Chat from './chat';

interface ChatProps {
  isLoading?: boolean;
  isRight?: boolean;
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
    <div className="chat-box mx-24 my-12 space-y-6">
      {chats.map((chat, index) => (
        <Chat
          duration={durations[index]}
          key={index}
          isLoading={chat.isLoading}
          isRight={chat.isRight}
          message={chat.message}
        />
      ))}
    </div>
  );
}
