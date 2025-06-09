import { CardPassos } from "./components/CardPassos";
import { CardFuncionalidades } from "./components/CardFuncionalidades";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
      {/* funcionalidades */}
      <div className="bg-black text-center py-20">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Saiba mais ainda!
        </p>
        <svg
          className="mt-4 h-6 w-6 text-gray-400 animate-bounce mx-auto"
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
      <section id="funcionalidades" className="bg-black py-20 px-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Coluna 1: Textos */}
          <div className="text-left">
            <h2 className="text-5xl font-bold text-white">
              Nossas funcionalidades
            </h2>
            <p className="text-xl text-gray-400 mt-6 mb-8">
              O Easy Tables vai além do básico. Integramos ferramentas poderosas
              em uma interface simples, permitindo que você extraia o máximo dos
              seus dados sem precisar ser um especialista.
            </p>

            <ul className="space-y-4 text-lg">
              <CardFuncionalidades>
                <strong>Fórmulas Inteligentes:</strong> Calcule soma, média e
                mais com um clique.
              </CardFuncionalidades>
              <CardFuncionalidades>
                <strong>Visualização de Dados:</strong> Transforme dados em
                gráficos para facilitar a análise.
              </CardFuncionalidades>
              <CardFuncionalidades>
                <strong>Estilização Simplificada:</strong> Personalize cores e
                fontes com ferramentas visuais.
              </CardFuncionalidades>
              <CardFuncionalidades>
                <strong>Exportação Flexível:</strong> Exporte suas tabelas para
                PDF, CSV ou Excel facilmente.
              </CardFuncionalidades>
            </ul>
          </div>

          {/* Coluna 2: Placeholder da Imagem */}
          <div className="h-96 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-2xl">Imagem aqui</span>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </div>
  );
}

export default App;
