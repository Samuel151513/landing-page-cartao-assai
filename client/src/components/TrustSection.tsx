import { Shield, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TrustSection() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-8 text-center hover-elevate" data-testid="card-trust-security">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E89641] to-[#F5C344] flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E4D8B' }}>
              Site 100% Seguro
            </h3>
            <p className="text-muted-foreground">
              Seus dados protegidos com criptografia SSL
            </p>
          </Card>

          <Card className="p-8 text-center hover-elevate" data-testid="card-trust-data">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E89641] to-[#F5C344] flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E4D8B' }}>
              Proteção de Dados
            </h3>
            <p className="text-muted-foreground">
              Conformidade total com a LGPD
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
