export function CardPlanos({
  planName,
  price,
  priceDetails,
  features,
  buttonText,
  isFeatured,
}) {
  const cardClasses = `
    w-full max-w-sm rounded-xl p-8 space-y-6
    ${isFeatured ? "bg-gray-900 border-2 border-[#2f3cee]" : "bg-gray-900"}`;

  const buttonClasses = `
    w-full rounded-lg py-3 font-semibold transition-colors
    ${
      isFeatured
        ? "bg-[#2f3cee] text-white hover:brightness-110"
        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
    }`;

  return (
    <div className={cardClasses}>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">{planName}</h3>
        <p>
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-gray-400">{priceDetails}</span>
        </p>
      </div>
      <ul className="space-y-3 pt-6 border-t border-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-x-3">
            <svg
              className="h-6 w-6 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-.997-6l7.07-7.071l-1.414-1.414l-5.656 5.657l-2.829-2.829L7.07 12.07Z" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={buttonClasses}>{buttonText}</button>
    </div>
  );
}
