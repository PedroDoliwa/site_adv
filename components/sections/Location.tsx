import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Location() {
  return (
    <section id="location" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Localização
          </h2>
          <p className="text-base sm:text-xl text-slate-600">
            Visite nosso escritório para uma consulta pessoal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Card Endereço */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span>Endereço do escritório</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm sm:text-base">
              <div>
                <p>Rua Francisco Teixeira, n°15 - Sala 04</p>
                <p>Torres - RS, Centro</p>
                <p>CEP: 95560-000</p>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Horário comercial</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>09:00 - 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado e Domingo:</span>
                    <span>Apenas Emergência</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mapa responsivo */}
          <div className="h-64 sm:h-auto lg:h-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13912.188125914701!2d-49.7329611!3d-29.3396174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952269a3040709e9%3A0x84ef071bf7042796!2sRossana%20Hertzog%20Advocacia%20e%20Consultoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sbr!4v1754012774978!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
