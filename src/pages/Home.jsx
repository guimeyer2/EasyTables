import { CardPassos } from "../components/CardPassos";
import { CardFuncionalidades } from "../components/CardFuncionalidades";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LordiconArrow } from "../components/LordiconArrow";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="relative isolate grid min-h-screen">
        <div className="col-start-1 row-start-1 w-full h-full pt-[110px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/homemTrabalhando.mp4" type="video/mp4" />
          </video>
        </div>

        {/* camada 2 */}
        <div className="col-start-1 row-start-1 w-full h-full pt-[132px] bg-black/80"></div>
        <div className="col-start-1 row-start-1 h-48 self-end bg-gradient-to-t from-black to-transparent"></div>

        {/* camada 3 */}
        <div className="col-start-1 row-start-1 relative z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight text-center">
              Crie tabelas em segundos,
            </h1>
            <p className="mt-4 text-4xl lg:text-5xl font-medium text-gray-300">
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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
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

          <div className="flex justify-center items-center gap-x-8">
            <CardPassos
              number="1"
              title="Crie seu Projeto"
              description="Dê um nome e comece a estruturar seus dados em segundos."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              }
            />

            <LordiconArrow />

            <CardPassos
              number="2"
              title="Adicione e Edite"
              description="Preencha suas tabelas com informações de forma fácil e flexível."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              }
            />

            <LordiconArrow />

            <CardPassos
              number="3"
              title="Exporte e Compartilhe"
              description="Exporte suas tabelas em múltiplos formatos ou compartilhe com um link."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>
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
                <strong>Templates prontos:</strong> Aproveite nossa galeria de
                tabelas pré-montadas, como Orçamento Pessoal, Controle de
                Hábitos e Planejamento de Viagem.
              </CardFuncionalidades>
              <CardFuncionalidades>
                <strong>Exportação Flexível:</strong> Exporte suas tabelas para
                PDF, CSV ou Excel facilmente.
              </CardFuncionalidades>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* mais */}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16 scale-110"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#2f3cee"
                  d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
                  stroke-width="0.6"
                  stroke="#2f3cee"
                />
              </svg>
            </div>
            {/* menos */}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="size-16"
              >
                <path
                  fill="none"
                  stroke="#2f3cee"
                  d="M4 8h8m2.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* gráfico pizza */}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#2f3cee"
                  d="M11 2v20c-5.1-.5-9-4.8-9-10s3.9-9.5 9-10m2 0v9h9c-.5-4.8-4.2-8.5-9-9m0 11v9c4.7-.5 8.5-4.2 9-9z"
                />
              </svg>
            </div>

            {/* oio*/}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-16"
              >
                <g fill="none" stroke="#2f3cee" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    d="M9 4.46A9.8 9.8 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.5 14.5 0 0 1 5 6.821"
                  />
                  <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                </g>
              </svg>
            </div>

            {/* ia */}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-16"
              >
                <g
                  fill="none"
                  stroke="#2f3cee"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  color="#2f3cee"
                >
                  <path d="M20.998 13q.002-.705.002-1.5c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21q.795 0 1.5-.002" />
                  <path d="m18.5 15l.258.697c.338.914.507 1.371.84 1.704c.334.334.791.503 1.705.841L22 18.5l-.697.258c-.914.338-1.371.507-1.704.84c-.334-.334-.503.791-.841 1.705L18.5 22l-.258-.697c-.338-.914-.507-1.371-.84-1.704c-.334-.334-.791-.503-1.705-.841L15 18.5l.697-.258c.914-.338 1.371-.507 1.704.84c.334-.334.503-.791.841-1.705zM2 9h19M6.5 5.5h.009m3.991 0h.009" />
                </g>
              </svg>
            </div>

            {/* dolár*/}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-16"
              >
                <g
                  fill="none"
                  stroke="#2f3cee"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="M12 6v12m3-8.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5" />
                  <path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
                </g>
              </svg>
            </div>

            {/* exportar*/}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-16"
              >
                <path
                  fill="#2f3cee"
                  d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1"
                />
              </svg>
            </div>

            {/* exportar tabelinha*/}
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-16"
              >
                <path
                  fill="#2f3cee"
                  d="M13 16h8v3q0 .825-.587 1.413T19 21h-6zm0-2V9h8v5zM3 7V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v2zm0 15v-2h2.55q-1.2-.575-1.937-1.7t-.738-2.55q0-1.975 1.388-3.363T7.625 11v2q-1.125 0-1.937.8t-.813 1.95q0 .975.6 1.725t1.525.95V16h2v6z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
