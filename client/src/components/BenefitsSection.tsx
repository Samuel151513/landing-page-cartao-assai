import { CheckCircle2, Clock, CreditCard, MapPin, Star, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Sem consulta SPC/Serasa",
    description: "Aprovação garantida mesmo com restrições no nome"
  },
  {
    icon: Clock,
    title: "Aprovação em minutos",
    description: "Receba a resposta da sua solicitação instantaneamente"
  },
  {
    icon: CreditCard,
    title: "Limite de até R$ 5.000",
    description: "Crédito pré-aprovado para suas compras"
  },
  {
    icon: MapPin,
    title: "Aceito em todo Brasil",
    description: "Use em qualquer estabelecimento do país"
  },
  {
    icon: Star,
    title: "Zero anuidade primeiro ano",
    description: "Sem taxas de manutenção nos primeiros 12 meses"
  },
  {
    icon: TrendingUp,
    title: "Programa de cashback",
    description: "Ganhe de volta parte do valor das suas compras"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E4D8B' }}>
            Vantagens do Cartão Assaí
          </h2>
          <p className="text-lg text-muted-foreground">
            Todos os benefícios que você precisa em um só cartão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover-elevate"
                data-testid={`card-benefit-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#E89641] to-[#F5C344] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#1E4D8B' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
