import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-tr from-black to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Sobre a Advogada</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Foto */}
          <Reveal>
            <div className="flex justify-center ">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden ring-2 ring-primary">
                <Image
                  src="/images/foto_rossana.jpeg"
                  alt="Foto da advogada"
                  fill
                  sizes="(max-width: 768px) 224px, 256px"
                  className="object-cover object-center scale-100"
                />
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delayMs={100}>
            <div className="text-slate-200 text-lg md:text-xl leading-8 max-w-prose space-y-6">
                <div className="mb-4">
                  <p>
                    Com atuação dedicada e foco em resultados, Rossana Hertzog oferece
                    atendimento humanizado e estratégico, unindo técnica jurídica com
                    atenção às particularidades de cada caso.
                    <br />
                    <br />
                    Acredita na comunicação clara e na transparência em todas as etapas,
                    construindo soluções sob medida para pessoas e empresas.
                
                  </p>
                </div>
    
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
