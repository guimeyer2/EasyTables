import { CardPassos } from "./components/CardPassos";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="relative isolate flex items-center justify-center min-h-screen">
        <div className="-translate">
          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold text-white tracking-tight">
              Crie tabelas em segundos,
            </h1>
            <p className="mt-4 text-5xl font-medium text-gray-300">
              sem esforço
            </p>
            <p className="mt-8 max-w-2xl text-center text-lg text-gray-300">
              De relatórios profissionais a listas de viagem, o Easy Tables
              facilita a criação de tabelas de forma rápida e eficiente. Não
              importa o contexto: com poucos cliques, você estrutura, organiza e
              compartilha suas informações de maneira simples, prática e
              elegante.
            </p>
            <a
              href="#planos"
              className="mt-10 inline-block rounded-lg bg-[#2f3cee] px-8 py-3 text-lg font-semibold text-white shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-[#2f3cee] focus:ring-offset-2 focus:ring-offset-black"
            >
              Descubra nossos planos
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Saiba mais
            </p>
            <svg
              className="h-6 w-6 text-gray-400 animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </main>{" "}
      <section id="passo-a-passo" className="bg-black py-20 px-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">
              Simples como contar até 3
            </h2>
            <p className="text-xl text-gray-400 mt-4">
              Crie suas tabelas de forma intuitiva e rápida.
            </p>
          </div>

          {/* container passo a passo */}
          <div className="flex justify-center items-start gap-x-8">
            <CardPassos
              number="1"
              title="Crie seu Projeto"
              description="Dê um nome e determine suas colunas em segundos."
            />
            {/* seta */}
            <CardPassos
              number="2"
              title="Adicione e Edite"
              description="Preencha sua tabela com dados e escolha entre nossas funcionalidades."
            />
            {/* seta */}
            <CardPassos
              number="3"
              title="Exporte e Compartilhe"
              description="Exporte sua tabela em múltiplos formatos ou compartilhe com um link."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
