
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { SYMPTOMS_LIST, DISEASES_COMMON, DISEASES_OTHER, OFFICE_IMG_SRC, PHONE_NUMBER } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';
import ImageWithFallback from './ImageWithFallback';

const Treatments: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('treatments', PHONE_NUMBER);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, gostaria de agendar uma consulta com o Dr. Caio.`, '_blank');
  };

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">Sintomas</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
            Quando você deve me procurar
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Sintomas neurológicos podem se manifestar de diferentes formas e, muitas vezes, evoluem de maneira gradual. Uma avaliação especializada permite compreender melhor a origem dos sintomas e orientar o acompanhamento adequado.
        </p>

        {/* Symptoms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SYMPTOMS_LIST.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group cursor-default flex flex-col relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="text-primary w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="font-heading text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Diseases Section */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-12">
          <div className="flex flex-col lg:flex-row">

            {/* Image Side */}
            <div className="lg:w-5/12 relative h-64 lg:h-auto min-h-[400px]">
              <ImageWithFallback
                src={OFFICE_IMG_SRC}
                alt="Consultório Dr. Caio Tardim"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/10"></div>
            </div>

            {/* Content Side */}
            <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark mb-2">
                Um olhar atento para sua saúde neurológica
              </h3>
              <p className="text-gray-600 mb-8">
                O atendimento é voltado para investigação cuidadosa dos sintomas, diagnóstico preciso e acompanhamento de condições neurológicas, desde quadros comuns até doenças mais complexas.
              </p>

              <h4 className="font-heading font-bold text-lg text-gray-800 mb-4">Doenças neurológicas comuns</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                {DISEASES_COMMON.map((disease, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="text-whatsapp w-5 h-5 flex-shrink-0 mt-0.5" />
                    {disease}
                  </li>
                ))}
              </ul>

              <h4 className="font-heading font-bold text-lg text-gray-800 mb-4">Outras condições neurológicas</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
                {DISEASES_OTHER.map((disease, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium text-sm sm:text-base">
                    <CheckCircle2 className="text-whatsapp w-5 h-5 flex-shrink-0 mt-0.5" />
                    {disease}
                  </li>
                ))}
              </ul>

              <p className="text-gray-500 text-sm italic mb-8">
                Cada caso é avaliado de forma individual, considerando história clínica, exame neurológico e exames complementares quando necessário.
              </p>

              <div className="flex justify-start">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 w-full sm:w-auto text-lg"
                >
                  <MessageCircle size={24} />
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Treatments;
