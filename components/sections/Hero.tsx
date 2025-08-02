import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-800 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div>
            {/* Título ajustado para mobile */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Representação jurídica experiente em que você pode confiar
            </h2>

            {/* Texto ajustado */}
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200">
              Com mais de 25 anos de experiência combinada, oferecemos serviços
              jurídicos abrangentes a pessoas físicas e empresas em toda a
              região metropolitana.
            </p>

            {/* Botão já mobile-first */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Agendar Consulta
              </Button>
            </div>
          </div>

          {/* Imagem responsiva */}
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Law firm office"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
