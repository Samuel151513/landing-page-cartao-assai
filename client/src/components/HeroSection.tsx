import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import AssaiLogo from "./AssaiLogo";
import heroImage from "@assets/generated_images/Happy_Brazilian_customers_with_credit_card_f1a70011.png";

export default function HeroSection() {
  const handleCTAClick = () => {
    console.log('CTA button clicked - scroll to form');
    document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-[#E89641] via-[#EDA846] to-[#F5C344] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative container mx-auto px-4 py-8">
        <div className="mb-12">
          <AssaiLogo />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#1E4D8B' }}>
              Cartão Assaí Aprovado para Negativados!
            </h1>
            
            <div className="space-y-3">
              <p className="text-lg md:text-xl font-semibold text-white">
                Sem consulta ao SPC ou Serasa e com aprovação imediata.
              </p>
              <p className="text-base md:text-lg text-white/95">
                Até <span className="font-bold text-2xl">R$ 5.000</span> de limite liberado para compras no mercado Assaí e em qualquer loja do Brasil.
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#E89641] to-[#F5C344] hover:from-[#D68537] hover:to-[#E5B33A] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover-elevate active-elevate-2 border-2 border-white/20"
              onClick={handleCTAClick}
              data-testid="button-cta-hero"
            >
              SOLICITAR MEU CARTÃO AGORA
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Clientes felizes com cartão Assaí aprovado"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
