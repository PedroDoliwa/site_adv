import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Location() {
  return (
    <section id="location" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Location
          </h2>
          <p className="text-xl text-slate-600">
            Conveniently located in the heart of downtown
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span>Office Address</span>
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
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Emergency Only</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Parking & Access</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Free client parking available</li>
                    <li>• Wheelchair accessible</li>
                    <li>• Public transportation nearby</li>
                    <li>• Visitor parking in building garage</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-slate-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p>Interactive Map</p>
                <p className="text-sm">1234 Legal Plaza, Suite 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
