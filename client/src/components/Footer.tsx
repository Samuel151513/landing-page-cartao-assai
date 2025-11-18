import AssaiLogo from "./AssaiLogo";
import { Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <AssaiLogo />
            </div>
            <p className="text-sm text-white/70">
              Cartão de crédito com aprovação facilitada para todos os brasileiros.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#termos" className="text-white/70 hover:text-white transition-colors" data-testid="link-terms">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#privacidade" className="text-white/70 hover:text-white transition-colors" data-testid="link-privacy">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors" data-testid="link-faq">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-white transition-colors" data-testid="link-contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F5C344]" />
                <span className="text-white/70">0800 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#F5C344]" />
                <span className="text-white/70">contato@assai.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F5C344]" />
                <span className="text-white/70">Seg-Sex: 8h às 20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50 mb-4">
            * Sujeito a análise de crédito. A aprovação está condicionada às políticas da instituição financeira. 
            O limite de crédito pode variar conforme a análise individual.
          </p>
          <p className="text-sm text-white/70">
            © 2024 Assaí Atacadista. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
