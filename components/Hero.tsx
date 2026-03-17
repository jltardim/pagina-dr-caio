
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Microscope, GraduationCap, Globe } from 'lucide-react';
import { PHONE_NUMBER, HERO_IMG_SRC } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';
import ImageWithFallback from './ImageWithFallback';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero', PHONE_NUMBER);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de agendar uma consulta com o Dr. Caio.`, '_blank');
  };

  const badges = [
    { icon: Microscope, text: "Especialidade em Neuroimunologia" },
    { icon: GraduationCap, text: "Atuação clínica, acadêmica e em pesquisa" },
    { icon: Globe, text: "Formação em centros de referência no Brasil e na Europa" },
  ];

  return (
    <section id="home" className="relative pt-32 pb-0 lg:pt-40 lg:pb-0 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden min-h-[90vh] flex flex-col justify-end">

      {/* Background Organic Elements (Fluidez) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-50/60 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-[20%] w-[800px] h-[600px] bg-gradient-to-t from-blue-100/80 to-transparent rounded-t-full blur-2xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col lg:flex-row items-center">

        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 max-w-2xl text-center lg:text-left mb-12 lg:mb-0 pt-10 lg:self-center lg:-mt-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full bg-white shadow-sm text-primary font-bold tracking-wide mb-6 border border-blue-100 text-sm uppercase"
          >
            NEUROLOGIA CLÍNICA
          </motion.span>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Diagnóstico e tratamento neurológico preciso para quem busca <span className="text-primary">respostas e cuidado especializado</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium max-w-lg mx-auto lg:mx-0">
            Atendimento em neurologia clínica para avaliação de diferentes condições neurológicas, incluindo cefaleia, doença de Parkinson, Alzheimer, AVC e outros distúrbios do sistema nervoso, com abordagem clínica criteriosa e atuação na área de neuroimunologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-3 bg-whatsapp hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-bold shadow-xl shadow-green-200 transition-all transform hover:-translate-y-1 hover:scale-105 w-full sm:w-auto text-lg group"
            >
              <MessageCircle size={28} className="group-hover:animate-bounce" />
              Agendar Consulta
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-3 justify-center lg:justify-start">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-gray-600 font-semibold">{badge.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="lg:w-1/2 relative flex justify-center lg:justify-end items-end h-full w-full lg:self-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative z-10 w-full max-w-[650px] lg:-mr-12">
            {/* Main Photo */}
            <ImageWithFallback
              src={HERO_IMG_SRC}
              alt="Dr. Caio Tardim"
              className="w-full h-auto drop-shadow-2xl object-bottom"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
