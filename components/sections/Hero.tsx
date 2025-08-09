"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-800 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            {/* Título ajustado para mobile */}
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Representação jurídica experiente em que você pode confiar
              </h2>
            </Reveal>

            {/* Texto ajustado */}
            <Reveal delayMs={100}>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200">
                Com mais de 10 anos de experiência combinada, oferecemos serviços
                jurídicos abrangentes a pessoas físicas e empresas em toda a
                região metropolitana.
              </p>
            </Reveal>

            {/* Botão já mobile-first */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Reveal delayMs={200}>
                <Button
                  size="lg"
                  onClick={() => {
                    const msg = "Olá! Gostaria de agendar uma consulta.";
                    const url = `https://wa.me/5551980280932?text=${encodeURIComponent(msg)}`;
                    window.open(url, "_blank");
                  }}
                  className="cursor-pointer"
                >
                  Agendar Consulta
                </Button>
              </Reveal>
            </div>
          </div>

          {/* Imagem responsiva */}
          <Reveal delayMs={150}>
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <Image
                src="/images/logo.png"
                alt="Law firm office"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
