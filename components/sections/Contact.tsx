"use client";

import { Clock, Mail, Phone, Shield } from "lucide-react";
import { ContactCard } from "../components generics/ContactCard";

const messageWhats = encodeURIComponent(
  "Olá, gostaria de saber mais sobre seus serviços."
);
const messageConsulta = encodeURIComponent(
  "Olá, gostaria de agendar uma consulta."
);
const phone = "5551980280932";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-xl text-slate-300">
            Pronto para discutir suas necessidades jurídicas? Estamos aqui para
            ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <ContactCard
            icon={Phone}
            title="Ligue para nós"
            mainText="(51) 98028-0932"
            subText="Disponível 24/7 para emergências"
            buttonText="Chamar no WhatsApp"
            buttonAction={() =>
              window.open(
                `https://wa.me/${phone}?text=${messageWhats}`,
                "_blank"
              )
            }
          />

          <ContactCard
            icon={Mail}
            title="Nosso Email"
            mainText="rossanahertzog@gmail.com"
            subText="Nós respondemos em 24 horas"
            buttonText="Envie um Email"
            buttonAction={() =>
              (window.location.href = "rossanahertzog@gmail.com")
            }
          />

          <ContactCard
            icon={Clock}
            title="Agendar Consulta"
            mainText="Seg - Sex / 09:00 ás 18:30"
            subText="Consulta inicial gratuita disponível"
            buttonText="Agendar consulta"
            buttonAction={() =>
              window.open(
                `https://wa.me/${phone}?text=${messageConsulta}`,
                "_blank"
              )
            }
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">
              Consulta gratuita - sem compromisso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
