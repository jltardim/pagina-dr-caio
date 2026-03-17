import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Feedback 3.1", // Placeholder - substituir pelo depoimento real
        name: "Paciente",
    },
    {
        text: "Feedback 4.1", // Placeholder - substituir pelo depoimento real
        name: "Paciente",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold text-sm uppercase tracking-wider">Depoimentos</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
                        A confiança também se constrói a partir da experiência de outros pacientes
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="mb-6">
                                <Quote size={32} className="text-primary/20" />
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6 italic">"{item.text}"</p>
                            <p className="text-gray-900 font-bold">— {item.name}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
