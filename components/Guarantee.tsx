import React from 'react';
import { AlertTriangle, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Guarantee: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de agendar uma consulta com o Dr. Caio.`, '_blank');
  };

  return (
    <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="bg-white/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8 backdrop-blur-sm">
          <AlertTriangle size={40} className="text-secondary" />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Você está a um passo do seu tratamento!</h2>
        <p className="font-heading text-xl md:text-2xl text-secondary font-semibold mb-6">Alguns sintomas neurológicos não devem esperar</p>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          Se você apresenta sintomas como dores de cabeça frequentes, formigamentos, tremores, alterações de memória, entre outros, agende agora uma consulta para esclarecer o seu quadro e receber orientação sobre a melhor conduta.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-3 bg-whatsapp hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-bold shadow-xl shadow-green-900/50 transition-all transform hover:-translate-y-1 hover:scale-105 text-lg"
        >
          <MessageCircle size={28} />
          Agendar Consulta
        </button>
      </div>
    </section>
  );
};

export default Guarantee;