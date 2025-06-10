export function Footer() {
  const productLinks = ["Início", "Funcionalidades", "Planos"];
  const legalLinks = ["Termos de Serviço", "Política de Privacidade"];

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-gray-800">
      <div className="container mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <a href="#" className="text-white font-bold text-2xl">
              Easy Tables
            </a>
            <p className="text-gray-400 max-w-xs">
              Crie, organize e compartilhe tabelas de forma simples, prática e
              elegante.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Produto</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Easy Tables. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            {/* colocar outros ícones */}
          </div>
        </div>
      </div>
    </footer>
  );
}
