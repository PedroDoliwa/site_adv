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
            Our Practice Areas
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive legal services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Personal Injury</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Auto accidents, slip and fall, medical malpractice, and wrongful
                death cases. We fight for maximum compensation for your
                injuries.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Briefcase className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Business Law</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Contract disputes, business formation, employment law, and
                commercial litigation. Protecting your business interests at
                every stage.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Home className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Real Estate</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Property transactions, title disputes, landlord-tenant issues,
                and real estate litigation. Ensuring smooth property dealings.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Family Law</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Divorce, child custody, adoption, and domestic relations.
                Compassionate representation during difficult times.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Gavel className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Criminal Defense</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                DUI/DWI, drug charges, assault, theft, and white-collar crimes.
                Aggressive defense to protect your rights and freedom.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <FileText className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Estate Planning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Wills, trusts, probate, and estate administration. Securing your
                legacy and protecting your loved ones' future.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
