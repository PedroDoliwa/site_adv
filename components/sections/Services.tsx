import { Briefcase, Car, FileText, Gavel, Home, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-slate-600">
            Serviços jurídicos completos e adaptados às suas necessidades{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Lesões Pessoais</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Acidentes automobilísticos, escorregões e quedas, negligência
                médica e casos de morte injusta. Lutamos pela indenização máxima
                pelos seus ferimentos.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Direito Empresarial</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Disputas contratuais, constituição de empresas, direito
                trabalhista e contencioso comercial. Protegendo seus interesses
                comerciais em todas as etapas.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Home className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Imobiliária</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Transações imobiliárias, disputas de títulos, questões entre
                locador e inquilino e litígios imobiliários. Garantindo
                negociações imobiliárias tranquilas.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Direito da Família</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Divórcio, guarda de filhos, adoção e relações domésticas.
                Representação compassiva em momentos difíceis.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Gavel className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Defesa Criminal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                DUI/DWI, acusações de tráfico de drogas, agressão, roubo e
                crimes de colarinho branco. Defesa agressiva para proteger seus
                direitos e liberdade.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <FileText className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Planejamento Imobiliário</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Testamentos, fundos fiduciários, inventário e administração
                patrimonial. Garantindo seu legado e protegendo o futuro de seus
                entes queridos.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
