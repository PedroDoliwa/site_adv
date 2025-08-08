"use client"

import { Mail, Phone } from "lucide-react";
import { ContactCard } from "../components generics/ContactCard";
import { useState } from "react";
import { validateContactForm } from "../../lib/emailValidation";

const messageWhats = encodeURIComponent("Olá, gostaria de saber mais sobre seus serviços.");
const phone = "5551980280932";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validação do formulário
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setSubmitStatus('error');
      setStatusMessage(validation.errors.join(', '));
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (    
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-xl text-slate-300">
            Pronto para discutir suas necessidades jurídicas? Estamos aqui para ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 align-items-center justify-center">
          <ContactCard
            icon={Phone}
            title="Ligue para nós"
            mainText="(51) 98028-0932"
            subText="Disponível 24/7 para emergências"
            buttonText="Chamar no WhatsApp"
            buttonAction={() => window.open(`https://wa.me/${phone}?text=${messageWhats}`, "_blank")}
          />

          <ContactCard
            icon={Mail}
            title="Nosso Email"
            mainText="rossanahertzog@gmail.com"
            subText="Nós respondemos em 24 horas"
            buttonText="Envie um Email"
            buttonAction={() => window.location.href = "mailto:rossanahertzog@gmail.com"}
          />
        </div>

        {/* Formulário de contato */}
        <div className="mt-12 max-w-xl mx-auto bg-slate-900 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-white">Envie uma mensagem</h3>
          
          {/* Status Message */}
          {submitStatus !== 'idle' && (
            <div className={`mb-4 p-3 rounded ${
              submitStatus === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }`}>
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Seu nome"
              required
              disabled={isSubmitting}
              className="p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Seu email"
              required
              disabled={isSubmitting}
              className="p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Sua mensagem"
              required
              rows={5}
              disabled={isSubmitting}
              className="p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-2 px-6 rounded transition-colors disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
