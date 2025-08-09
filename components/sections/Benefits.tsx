import { Award, Clock, Shield, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Compromisso e Resultados
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="text-xl text-slate-600">
              Experimente a diferença que a representação jurídica dedicada faz{" "}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Reveal>
            <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              +10 anos de experiência
            </h3>
            <p className="text-slate-600">
              Décadas de experiência jurídica combinada em diversas áreas de
              atuação
            </p>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Atendimento Personalizado
            </h3>
            <p className="text-slate-600">
              Atenção individualizada e estratégias jurídicas personalizadas
              para cada cliente
            </p>
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Resultados comprovados
            </h3>
            <p className="text-slate-600">
              Histórico de resultados bem-sucedidos e clientes satisfeitos{" "}
            </p>
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="text-center">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Disponibilidade</h3>
            <p className="text-slate-600">
              Consultas de emergência e comunicação ágil quando você precisar de
              nós
            </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
