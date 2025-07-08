import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Location() {
  return (
    <section id="location" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl text-slate-600">
            Convenientemente localizado no coração do centro da cidade/
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span>Endereço do escritório</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">Sterling & Associates</p>
                  <p>1234 Legal Plaza, Suite 500</p>
                  <p>Downtown District</p>
                  <p>Metropolitan City, ST 12345</p>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Horário comercial</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Segunda - Sexta:</span>
                      <span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span>Apenas Emergência</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">
                    Estacionamento e acesso
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Estacionamento gratuito para clientes disponível</li>
                    <li>• Acessível a cadeiras de rodas</li>
                    <li>• Transporte público nas proximidades</li>
                    <li>
                      • Estacionamento para visitantes na garagem do prédio
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-slate-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Mapa interativo</p>
                <p className="text-sm">1234 Legal Plaza, Suite 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
