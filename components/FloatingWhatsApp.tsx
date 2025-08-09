"use client"

import { FaWhatsapp } from "react-icons/fa";

type FloatingWhatsAppProps = {
  phoneNumber?: string;
  presetMessage?: string;
};

export default function FloatingWhatsApp({
  phoneNumber = "5551980280932",
  presetMessage = "Olá, gostaria de saber mais sobre seus serviços.",
}: FloatingWhatsAppProps) {
  const encodedMessage = encodeURIComponent(presetMessage);
  const href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-10 right-5 z-50 p-2 md:p-3 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg transition-all hover:shadow-xl"
    >
      <FaWhatsapp className="w-9 h-9 md:w-10 md:h-10 text-white" />
    </a>
  );
}


