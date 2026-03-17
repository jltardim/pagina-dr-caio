import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, ABOUT_IMG_SRC, BENEFITS_LIST } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';
import ImageWithFallback from './ImageWithFallback';

const About: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('about', PHONE_NUMBER);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de agendar uma consulta com o Dr. Caio.`, '_blank');
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden relative">

      {/* Background Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 skew-x-12 transform origin-top-right -z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">

          {/* Image Side */}
          <motion.div
            className="lg:w-1/2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-10 right-10 lg:right-0 w-[110%] h-[95%] bg-gradient-to-br from-blue-100 to-blue-50 rounded-[4rem] transform rotate-3 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -z-10"></div>

            <div className="relative w-full max-w-xl">
              <ImageWithFallback
                src={ABOUT_IMG_SRC}
                alt="Dr. Caio Tardim"
                className="w-full h-auto mix-blend-multiply filter drop-shadow-xl rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="lg:w-1/2 pl-0 lg:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-secondary font-bold uppercase tracking-widest text-sm mb-3 bg-blue-50 px-3 py-1 rounded-lg">Quem cuidará de você</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Dr. Caio Tardim
            </h2>

            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
              <p>
                Médico neurologista (CRM 1148702 | RQE 51787), com atuação clínica, acadêmica e em pesquisa na área de neuroimunologia e doenças desmielinizantes, incluindo esclerose múltipla e neuromielite óptica.
              </p>
              <p className="mt-4">
                Formado pela Faculdade de Medicina de Teresópolis, realizou residência em Neurologia pela UFRJ e complementou sua formação no Centro de Esclerose Múltipla de Barcelona (CEMCAT). Possui Título de Especialista pela Academia Brasileira de Neurologia (ABN).
              </p>
            </div>

            {/* Atuação */}
            <p className="text-gray-700 font-bold mb-4">Atualmente atua como:</p>
            <div className="space-y-4 mb-12">
              {[
                "Neurologista no ambulatório de neuroimunologia do Hospital Clementino Fraga Filho – UFRJ",
                "Pesquisador em neuroimunologia no LabNet (UNIRIO/UFRJ)",
                "Neurologista no Hospital São Vicente de Paulo e da Prevent Senior",
                "Professor do VRMed"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-whatsapp w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 italic mb-8">
              Sua prática clínica combina rigor científico, investigação minuciosa e atendimento humanizado.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-3 bg-whatsapp hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-bold shadow-xl shadow-green-200 transition-all transform hover:-translate-y-1 hover:scale-105 w-full md:w-auto text-lg group"
            >
              <MessageCircle size={28} className="group-hover:animate-bounce" />
              Agendar Consulta
            </button>

          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-2">
            Um cuidado neurológico baseado em atenção, ciência e experiência
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS_LIST.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white w-12 h-12 rounded-lg shadow-sm flex items-center justify-center text-primary mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default About;