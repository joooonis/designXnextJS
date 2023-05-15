export default function Chat({ isRight = false }) {
  return (
    <div
      className={`w-full flex space-x-4 ${
        isRight ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isRight && <div className="rounded-full bg-gray-50 w-16 h-16"></div>}
      <div className="rounded-full text-slate-800 opacity-80 font-semibold w-fit flex justify-center items-center px-8 py-2 bg-gray-50 h-16">
        여긴 어디지?
      </div>
      {isRight && <div className="rounded-full bg-gray-50 w-16 h-16"></div>}{' '}
    </div>
  );
}
