import { CardPlanos } from "../components/CardPlanos";

export function Planos() {
  const freePlanFeatures = [
    "Até 3 tabelas ativas",
    "Funcionalidades essenciais",
    "Limite de 100 linhas por tabela",
    "Suporte via comunidade",
  ];

  const proPlanFeatures = [
    "Tabelas ilimitadas",
    "Acesso total às funcionalidades",
    "Linhas ilimitadas por tabela",
    "Assistente IA 'EasyBrain'",
    "Colaboração em tempo real",
    "Suporte prioritário",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black px-8 pt-48 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full opacity-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0 236.002C205.451 183.334 396.679 146.667 561.333 135C726 123.333 815.167 192.667 902.5 242C990.167 291.333 1098 217.333 1242.5 197C1387 176.667 1440 221.333 1440 221.333V560H0V236.002Z"
              fill="#2f3cee"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-white">
          Escolha o plano perfeito para você
        </h1>
        <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Comece de graça e evolua conforme suas necessidades. Sem compromisso.
        </p>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8">
        <CardPlanos
          planName="Plano Free"
          price="R$0"
          priceDetails=""
          features={freePlanFeatures}
          buttonText="Comece de graça"
          isFeatured={false}
        />
        <CardPlanos
          planName="Plano Pro"
          price="R$10"
          priceDetails="/mês"
          features={proPlanFeatures}
          buttonText="Experimente o Pro"
          isFeatured={false}
        />
      </div>
    </div>
  );
}
