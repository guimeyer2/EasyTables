import { Link } from "react-router-dom";

export function Header() {
  const navLinks = [
    { text: "Início", path: "/" },
    { text: "Planos", path: "/planos" },
    { text: "Sobre", path: "#" },
    { text: "Contato", path: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="pt-10 pb-6">
        <div className="w-full mx-auto px-12">
          <nav className="relative flex items-center">
            <div className="z-10">
              <Link to="/" className="flex items-center gap-x-3">
                <img
                  src="/novalogo.png"
                  alt="Logo da EasyTables"
                  className="h-12"
                />
              </Link>
            </div>

            <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-x-12">
              {navLinks.map((linkInfo) => (
                <li key={linkInfo.text}>
                  <Link
                    to={linkInfo.path}
                    className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
                  >
                    {linkInfo.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="h-[5px] w-full mt-6 bg-[linear-gradient(to_right,transparent,#2f3cee_10%,#2f3cee_90%,transparent)]" />
      </div>
    </header>
  );
}
