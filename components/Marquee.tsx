import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "Neurologia Clínica",
  "Neuroimunologia",
  "Cefaleia e Enxaqueca",
  "Distúrbios do Movimento",
  "Doenças Desmielinizantes",
  "Avaliação Neurológica",
  "Neurologia Clínica",
  "Neuroimunologia",
  "Cefaleia e Enxaqueca",
  "Distúrbios do Movimento",
  "Doenças Desmielinizantes",
  "Avaliação Neurológica",
];

const Marquee: React.FC = () => {
  return (
    <div className="bg-primary-dark py-4 overflow-hidden whitespace-nowrap relative z-20 border-t border-white/10">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <span className="text-white font-heading font-bold text-lg md:text-xl uppercase tracking-wider">
              {service}
            </span>
            <span className="text-secondary text-2xl">•</span>
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop handled by -50% */}
        {services.map((service, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span className="text-white font-heading font-bold text-lg md:text-xl uppercase tracking-wider">
              {service}
            </span>
            <span className="text-secondary text-2xl">•</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;