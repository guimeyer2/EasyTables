export function CardFuncionalidades({ children }) {
  return (
    <li className="flex items-start gap-x-3">
      <svg
        className="h-6 w-6 flex-shrink-0 text-[#2f3cee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.06-1.06L10.5 14.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l3.75-3.75Z"
          clipRule="evenodd"
        />
      </svg>

      <span>{children}</span>
    </li>
  );
}
