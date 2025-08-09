import { ServiceCard } from "../components generics/ServiceCard";
import { services } from "@/lib/listaServises";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Áreas de Atuação
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="text-xl text-slate-600">
              Serviços jurídicos completos e adaptados às suas necessidades{" "}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delayMs={index * 75}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
