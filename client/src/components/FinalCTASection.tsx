import { Button } from "@/components/ui/button";
import { ChevronRight, Clock } from "lucide-react";

export default function FinalCTASection() {
  const handleCTAClick = () => {
    console.log('Final CTA clicked - scroll to form');
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta-form" className="py-16 md:py-24 bg-gradient-to-br from-[#E89641] via-[#EDA846] to-[#F5C344] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
            <Clock className="w-5 h-5" />
            <span>Últimas vagas para aprovação garantida hoje</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Solicite Agora Seu Cartão Assaí
          </h2>

          <p className="text-xl text-white/95">
            Não perca essa oportunidade de ter crédito aprovado, mesmo com restrições!
          </p>

          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 font-bold text-xl px-10 py-7 rounded-lg shadow-2xl hover-elevate active-elevate-2"
            style={{ color: '#1E4D8B' }}
            onClick={handleCTAClick}
            data-testid="button-cta-final"
          >
            QUERO MEU CARTÃO APROVADO AGORA
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>

          <p className="text-sm text-white/80">
            ✓ Sem consulta ao SPC/Serasa • ✓ Aprovação em minutos • ✓ Até R$ 5.000 de limite
          </p>
        </div>
      </div>
    </section>
  );
}
