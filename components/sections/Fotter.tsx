import Link from "next/link";
import { Badge } from "../ui/badge";
import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-amber-400" />
              <span className="text-xl font-bold">Sterling & Associates</span>
            </div>
            <p className="text-slate-400 mb-4">
              Fornecendo representação jurídica excepcional com integridade e
              dedicação.
            </p>
            <div className="flex space-x-2">
              <Badge variant="secondary">AV Rated</Badge>
              <Badge variant="secondary">Super Lawyers</Badge>
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
              <p>1234 Legal Plaza, Suite 500</p>
              <p>Metropolitan City, ST 12345</p>
              <p>(555) 123-LEGAL</p>
              <p>info@sterlinglaw.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Sterling & Associates. Todos
            direitos reservados. | Attorney Advertising
          </p>
        </div>
      </div>
    </footer>
  );
}
