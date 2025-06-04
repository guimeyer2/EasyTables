export function Header() {
  const navLinks = ["Início", "Planos", "Sobre", "Contato"];

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="w-full max-w-7xl mx-auto px-6 py-10">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-white font-bold text-2xl">
            EasyTables
          </a>

          <ul className="flex items-center gap-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
