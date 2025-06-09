export function CardPassos({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 border-2 border-[#2f3cee] mb-6">
        <span className="text-4xl font-bold">{number}</span>
      </div>

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-400">{description}</p>

      {/* placeholder pra imagem */}
      <div className="mt-6 h-48 w-full bg-gray-900 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Imagem {number} aqui</span>
      </div>
    </div>
  );
}
