import Link from "next/link";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { services } from "@/lib/listaServises";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="min-w-0">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover"
              />{" "}
              <span className="text-xl font-bold">Rossana Hertzog</span>
            </div>
            <p className="text-slate-400 mb-4 break-words">
              Fornecendo representação jurídica excepcional com integridade e
              dedicação.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Advocacia</Badge>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Consultoria Jurídica</Badge>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-primary">Áreas de Prática</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-slate-400 break-words">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#about" className="hover:text-amber-400 break-words">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 break-words">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400 break-words">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 break-words">
                  Portal do Cliente{" "}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400 break-words">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-primary">Informação de Contato</h4>
            <div className="space-y-2 text-slate-400 break-words">
              <p className="break-words">R. Francisco Teixeira, n°15 - Sala 04</p>
              <p className="break-words">Centro, Torres - RS</p>
              <p className="break-words">(51) 98028-0932</p>
              <p className="break-words">rhadv.torres@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Rossana Hertzog. Todos direitos
            reservados. | Desenvolvido por {""}
            <a
              href="https://www.linkedin.com/in/pedrodoliwa/"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedro Doliwa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
