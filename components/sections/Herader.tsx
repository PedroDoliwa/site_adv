import Link from "next/link";
import Image from "next/image";

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
              className="hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#benefits"
              className="hover:text-primary transition-colors"
            >
              Resultados
            </Link>
            <Link
              href="#location"
              className="hover:text-primary transition-colors"
            >
              Localização
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
