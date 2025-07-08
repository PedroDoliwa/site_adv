import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Experienced Legal Representation You Can Trust
            </h2>
            <p className="text-xl mb-8 text-slate-200">
              With over 25 years of combined experience, Sterling & Associates
              provides comprehensive legal services to individuals and
              businesses throughout the greater metropolitan area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Law firm office"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
