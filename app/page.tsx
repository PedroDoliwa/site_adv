import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  Shield,
  Scale,
  Gavel,
  FileText,
  Home,
  Car,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/sections/Herader";
import About from "@/components/sections/About";

export default function LawFirmWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
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

      {/* About Section */}
      <About />
      {/* Services Section */}
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
                  Auto accidents, slip and fall, medical malpractice, and
                  wrongful death cases. We fight for maximum compensation for
                  your injuries.
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
                  DUI/DWI, drug charges, assault, theft, and white-collar
                  crimes. Aggressive defense to protect your rights and freedom.
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
                  Wills, trusts, probate, and estate administration. Securing
                  your legacy and protecting your loved ones' future.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Sterling & Associates
            </h2>
            <p className="text-xl text-slate-600">
              Experience the difference that dedicated legal representation
              makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                25+ Years Experience
              </h3>
              <p className="text-slate-600">
                Decades of combined legal experience across multiple practice
                areas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Service
              </h3>
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
                Emergency consultations and responsive communication when you
                need us
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  500+
                </div>
                <div className="text-slate-600">Cases Won</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  $50M+
                </div>
                <div className="text-slate-600">Recovered for Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  98%
                </div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Us Today</h2>
            <p className="text-xl text-slate-300">
              Ready to discuss your legal needs? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-600 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Call Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-amber-400 mb-2">
                  (555) 123-LEGAL
                </p>
                <p className="text-slate-300">Available 24/7 for emergencies</p>
                <Button className="mt-4 bg-amber-600 hover:bg-amber-700 w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-600 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Email Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-amber-400 mb-2">info@sterlinglaw.com</p>
                <p className="text-slate-300">We respond within 24 hours</p>
                <Button className="mt-4 bg-amber-600 hover:bg-amber-700 w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-600 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">
                    Schedule Consultation
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Free initial consultation available
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700 w-full">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">
                Free Consultation - No Obligation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-amber-400" />
                <span className="text-xl font-bold">Sterling & Associates</span>
              </div>
              <p className="text-slate-400 mb-4">
                Providing exceptional legal representation with integrity and
                dedication.
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary">AV Rated</Badge>
                <Badge variant="secondary">Super Lawyers</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Personal Injury</li>
                <li>Business Law</li>
                <li>Real Estate</li>
                <li>Family Law</li>
                <li>Criminal Defense</li>
                <li>Estate Planning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#about" className="hover:text-amber-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-amber-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-amber-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Client Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
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
              &copy; {new Date().getFullYear()} Sterling & Associates. All
              rights reserved. | Attorney Advertising
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
