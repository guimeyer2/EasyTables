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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-8 pt-48 pb-20">
      <div className="text-center mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-white">
          Escolha o plano perfeito para você
        </h1>

        <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Comece de graça e evolua conforme suas necessidades. Sem compromisso.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
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
