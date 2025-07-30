import { Clock, Mail, Phone, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-xl text-slate-300">
            Pronto para discutir suas necessidades jurídicas? Estamos aqui para
            ajudar.{" "}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-600 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Ligue para nós</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-amber-400 mb-2">
                (51) 98028-0932
              </p>
              <p className="text-slate-300">Disponível 24/7 para emergências</p>
              <Button className="mt-4 bg-amber-600 hover:bg-amber-700 w-full">
                Ligue agora
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-600 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Nosso Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-amber-400 mb-2">info@sterlinglaw.com</p>
              <p className="text-slate-300">Nós respondemos em 24 horas</p>
              <Button className="mt-4 bg-amber-600 hover:bg-amber-700 w-full">
                Envie um Email
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-600 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Agendar Consulta </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-amber-400 mb-2">Seg - Sex / 09:00 ás 18:30</p>
              <p className="text-slate-300 mb-4">
                Consulta inicial gratuita disponível
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 w-full">
                Agendar consulta
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">
              Consulta gratuita - sem compromisso{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
