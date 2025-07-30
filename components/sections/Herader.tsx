import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

/*
OK Áreas de Atuação

Ajusar Sobre
Pq escolher 
Localização - por mapa
Contato - por link p telefone/whats/email
Footer - link rápidos (alterar nome)
Hero - por foto, btn p whats
Header - nomes menus, talvez tirar btn consula gratuita

Final estilizar
Animação cards
Animação numeros nos beneficios
*/

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-black text-white sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover"
            />
            <div>
              <h1 className="text-xl font-bold">Rossana Hertzog</h1>
              <p className="text-sm text-slate-300">
                Advocacia e Consultoria Jurídica
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#about"
              className="hover:text-[#f1af09] transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#services"
              className="hover:text-[#f1af09] transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#benefits"
              className="hover:text-[#f1af09]transition-colors"
            >
              Por que nos escolher{" "}
            </Link>
            <Link
              href="#location"
              className="hover:text-[#f1af09] transition-colors"
            >
              Localização
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#f1af09] transition-colors"
            >
              Contato
            </Link>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </header>
  );
}
