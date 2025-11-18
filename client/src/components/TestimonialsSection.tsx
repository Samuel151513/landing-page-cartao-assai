import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    initials: "MS",
    location: "São Paulo, SP",
    text: "Estava com o nome sujo há 2 anos e não conseguia crédito em lugar nenhum. Com o Assaí fui aprovada em minutos!",
    rating: 5
  },
  {
    name: "João Santos",
    initials: "JS",
    location: "Rio de Janeiro, RJ",
    text: "Incrível! Mesmo negativado consegui R$ 3.500 de limite. Já estou usando e fazendo minhas compras normalmente.",
    rating: 5
  },
  {
    name: "Ana Costa",
    initials: "AC",
    location: "Belo Horizonte, MG",
    text: "Não acreditei quando vi aprovado na hora! Melhor cartão para quem precisa de uma segunda chance.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E4D8B' }}>
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de brasileiros já foram aprovados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-[#E89641] to-[#F5C344] text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold" style={{ color: '#1E4D8B' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F5C344] text-[#F5C344]" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
