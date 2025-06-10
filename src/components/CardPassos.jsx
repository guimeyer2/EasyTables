export function CardPassos({ number, title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 border-2 border-[#2f3cee] mb-6">
        <span className="text-4xl font-bold">{number}</span>
      </div>

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-400">{description}</p>

      <div className="mt-6 text-gray-500">{icon}</div>
    </div>
  );
}
