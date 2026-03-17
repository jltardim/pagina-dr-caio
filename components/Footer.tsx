import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram } from 'lucide-react';
import { ADDRESS, ADDRESS_2, GOOGLE_MAPS_LINK, GOOGLE_MAPS_LINK_2, PHONE_DISPLAY, PHONE_NUMBER, CNPJ } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';
import ImageWithFallback from './ImageWithFallback';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Column 1: Brand & CTA */}
          <div>
            <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">AGENDAMENTO</span>
            <h3 className="text-2xl text-white font-heading font-bold mb-4">Marque sua consulta</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Dê o primeiro passo para cuidar da sua saúde neurológica com um especialista dedicado e atualizado.
            </p>
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick('footer_cta', PHONE_NUMBER)}
              className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-green-900 transition-all transform hover:-translate-y-1 w-full sm:w-auto text-lg"
            >
              <MessageCircle size={24} />
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Fale Conosco</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="text-secondary mt-1 w-5 h-5 shrink-0" />
                <div>
                  <span className="block text-sm text-gray-500">WhatsApp</span>
                  <a href={`https://wa.me/${PHONE_NUMBER}`} className="text-white hover:text-secondary transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1 w-5 h-5 shrink-0" />
                <div>
                  <span className="block text-sm text-gray-500">Consultório - Centro</span>
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer" className="text-white hover:text-secondary transition-colors leading-tight block mt-1">
                    {ADDRESS}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1 w-5 h-5 shrink-0" />
                <div>
                  <span className="block text-sm text-gray-500">Hospital - Tijuca</span>
                  <a href={GOOGLE_MAPS_LINK_2} target="_blank" rel="noreferrer" className="text-white hover:text-secondary transition-colors leading-tight block mt-1">
                    {ADDRESS_2}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Map Placeholder */}
          <div className="rounded-xl overflow-hidden h-64 bg-gray-800 relative group border border-gray-700">
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noreferrer" className="block w-full h-full relative">
              <ImageWithFallback
                src="/images/map.png"
                alt="Mapa"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Ver no Google Maps
                </span>
              </div>
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-gray-500">
            <p>CNPJ {CNPJ} | Todos os Direitos Reservados</p>
            <p className="mt-1">© {new Date().getFullYear()} Dr. Caio Tardim. Designed by Ascen.</p>
          </div>
          <div className="flex space-x-4">
            <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors"><MessageCircle size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;