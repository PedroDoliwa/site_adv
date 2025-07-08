import { Award, Clock, Shield, Users } from "lucide-react";

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose Sterling & Associates
          </h2>
          <p className="text-xl text-slate-600">
            Experience the difference that dedicated legal representation makes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">25+ Years Experience</h3>
            <p className="text-slate-600">
              Decades of combined legal experience across multiple practice
              areas
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p className="text-slate-600">
              Individual attention and customized legal strategies for each
              client
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p className="text-slate-600">
              Track record of successful outcomes and satisfied clients
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-slate-600">
              Emergency consultations and responsive communication when you need
              us
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-slate-600">Cases Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                $50M+
              </div>
              <div className="text-slate-600">Recovered for Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
