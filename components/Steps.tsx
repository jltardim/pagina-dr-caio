import React from 'react';
import { motion } from 'framer-motion';
import { STEPS_LIST } from '../constants';

const Steps: React.FC = () => {
    return (
        <section id="steps" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold text-sm uppercase tracking-wider">Como Funciona</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
                        Como acontece cada etapa
                    </h2>
                    <p className="text-gray-600">
                        Do primeiro contato até a orientação pós-consulta
                    </p>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
                </div>

                {/* Steps */}
                <div className="max-w-4xl mx-auto">
                    {STEPS_LIST.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex gap-6 mb-12 last:mb-0"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            {/* Number */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                                    <span className="text-white font-heading font-bold text-xl">{step.number}</span>
                                </div>
                                {index < STEPS_LIST.length - 1 && (
                                    <div className="w-0.5 h-12 bg-gray-200 mx-auto mt-4"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-2">
                                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Steps;
