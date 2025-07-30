import Link from "next/link";
import { Badge } from "../ui/badge";
import { Scale } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800  bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
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
            <p className="text-slate-400 mb-4">
              Fornecendo representação jurídica excepcional com integridade e
              dedicação.
            </p>
            <div className="flex space-x-2">
              <Badge variant="secondary">Advocacia</Badge>
              <Badge variant="secondary">Consultoria Jurídica</Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Áreas de Prática</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Lesões Pessoais</li>
              <li>Direito Empresarial</li>
              <li>Imobiliária</li>
              <li>Direito da Família</li>
              <li>Defesa Criminal</li>
              <li>Planejamento Imobiliário</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#about" className="hover:text-amber-400">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400">
                  Portal do Cliente{" "}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-400">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informação de Contato</h4>
            <div className="space-y-2 text-slate-400">
              <p>R. Francisco Teixeira, n°15 - Sala 04</p>
              <p>Centro, Torres - RS</p>
              <p>(51) 98028-0932</p>
              <p>info@sterlinglaw.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Rossana Hertzog. Todos direitos
            reservados. | Desenvolvido por {""}
            <a
              href="https://www.linkedin.com/in/pedrodoliwa/"
              className="underline hover:text-ouro-claro"
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
