import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { NEUROIMMUNOLOGY_LIST, PHONE_NUMBER } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const Surgeries: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('neuroimmunology', PHONE_NUMBER);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de agendar uma consulta com o Dr. Caio.`, '_blank');
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-dark to-primary opacity-95"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-8 text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Quando a investigação precisa ir um pouco mais fundo</h2>
          <p className="text-primary-light text-lg max-w-3xl mx-auto mb-4 opacity-90">
            Além da neurologia clínica geral, o Dr. Caio possui atuação especializada em Neuroimunologia, área dedicada ao estudo e tratamento de doenças em que o sistema imunológico afeta o sistema nervoso.
          </p>
          <p className="text-primary-light text-base max-w-3xl mx-auto mb-8 opacity-80">
            Essas condições costumam exigir investigação minuciosa e acompanhamento prolongado, com monitoramento clínico e, em alguns casos, terapias imunológicas específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {NEUROIMMUNOLOGY_LIST.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all group"
              >
                <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-heading font-bold text-lg">{item.name}</h3>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-primary-light text-sm max-w-2xl mx-auto mb-12 opacity-80">
          Essa formação complementar contribui para uma abordagem mais aprofundada em casos neurológicos complexos.
        </p>

        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 w-full sm:w-auto text-lg"
          >
            <MessageCircle size={24} />
            Agendar Consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Surgeries;