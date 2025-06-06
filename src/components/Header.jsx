export function Header() {
  const navLinks = ["Início", "Planos", "Sobre", "Contato"];

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="w-full mx-auto px-44 pt-10 pb-8">
        <nav className="relative flex items-center">
          <div className="z-10">
            <a href="#" className="text-white font-bold text-4xl">
              Easy Tables
            </a>
          </div>

          <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-x-12">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-[4px] w-full mt-6 bg-[linear-gradient(to_right,transparent,#2f3cee_10%,#2f3cee_90%,transparent)]" />
      </div>
    </header>
  );
}
