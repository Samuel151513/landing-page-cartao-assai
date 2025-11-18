import { FileText, CheckCircle, CreditCard } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Preencha o formulário",
    description: "Informe seus dados básicos de forma rápida e segura"
  },
  {
    number: 2,
    icon: CheckCircle,
    title: "Receba aprovação",
    description: "Análise automática e resposta em poucos minutos"
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Use seu cartão",
    description: "Receba em casa e comece a usar imediatamente"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E4D8B' }}>
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Três passos simples para ter seu cartão aprovado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative"
                data-testid={`step-${index}`}
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#E89641] to-[#F5C344]" />
                )}
                
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#E89641] to-[#F5C344] flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-xl shadow-md" style={{ color: '#1E4D8B' }}>
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl" style={{ color: '#1E4D8B' }}>
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
