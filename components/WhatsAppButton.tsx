import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHONE_NUMBER } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    trackWhatsAppClick('floating_button', PHONE_NUMBER);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=Olá, vim pelo site e gostaria de agendar uma consulta.`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={handleClick}
        className="bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        <MessageCircle size={32} className="relative z-10" fill="white" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;