import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, DollarSign, Activity, Award, Building } from 'lucide-react';

const Validation: React.FC = () => {
  const results = [
    {
      icon: Activity,
      metric: '97%',
      label: 'Acurácia Clínica',
      description: 'Comparação cega com laudos de radiologistas',
      color: 'neon-cyan',
    },
    {
      icon: Clock,
      metric: '< 60s',
      label: 'Latência',
      description: 'vs 4-24 horas do fluxo manual',
      color: 'neon-green',
    },
    {
      icon: DollarSign,
      metric: '65%',
      label: 'Redução de Custos',
      description: 'Economia por exame processado',
      color: 'neon-pink',
    },
    {
      icon: CheckCircle,
      metric: '10x',
      label: 'Throughput',
      description: 'Aumento na capacidade de laudos/dia',
      color: 'neon-purple',
    },
  ];

  return (
    <section id="validation" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <Award className="w-5 h-5 text-neon-cyan mr-2" />
            <span className="text-sm text-neon-cyan font-mono">Validação Clínica Real</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Resultados Comprovados</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Piloto realizado no Hospital Neurológico de Goiânia com resultados excepcionais
          </p>
        </motion.div>

        {/* Hospital Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass rounded-2xl p-8 md:p-12 border border-neon-cyan/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center flex-shrink-0">
                <Building className="w-12 h-12 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Hospital Neurológico de Goiânia
                </h3>
                <p className="text-neon-cyan font-mono mb-4">Instituto de Neurologia de Goiânia (ING)</p>
                <p className="text-gray-400 max-w-2xl">
                  Parceria estratégica com o Dr. Paulo Ragazzo para curadoria de dataset proprietário 
                  e validação clínica em ambiente real de alta complexidade neurológica.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center card-hover group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${result.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <result.icon className={`w-8 h-8 text-${result.color}`} />
              </div>
              <div className={`text-5xl font-bold text-${result.color} mb-2`}>
                {result.metric}
              </div>
              <div className="text-lg font-semibold text-white mb-2">{result.label}</div>
              <div className="text-sm text-gray-400">{result.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12 border-l-4 border-neon-cyan"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-neon-cyan">PR</span>
            </div>
            <div>
              <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-4 leading-relaxed">
                "A LindiLaudo Shape Wave representa um avanço significativo na radiologia brasileira. 
                A precisão dos laudos automatizados, aliada à velocidade de emissão, 
                permite diagnósticos mais rápidos e eficientes para nossos pacientes."
              </blockquote>
              <div>
                <div className="font-semibold text-white">Dr. Paulo Ragazzo</div>
                <div className="text-neon-cyan text-sm">Hospital Neurológico de Goiânia</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Validation;
