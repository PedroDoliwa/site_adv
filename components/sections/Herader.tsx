import { Scale } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-amber-400" />
            <div>
              <h1 className="text-xl font-bold">Sterling & Associates</h1>
              <p className="text-sm text-slate-300">Attorneys at Law</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#about"
              className="hover:text-amber-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="hover:text-amber-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#benefits"
              className="hover:text-amber-400 transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="#location"
              className="hover:text-amber-400 transition-colors"
            >
              Location
            </Link>
            <Link
              href="#contact"
              className="hover:text-amber-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
