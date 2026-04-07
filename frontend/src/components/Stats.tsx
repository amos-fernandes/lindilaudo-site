import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Building2, Globe } from 'lucide-react';

const AnimatedNumber: React.FC<{ value: number; suffix?: string; prefix?: string }> = ({ 
  value, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const marketStats = [
    {
      icon: Building2,
      value: 6800,
      suffix: '+',
      label: 'Hospitais no Brasil',
      color: 'neon-cyan',
    },
    {
      icon: Users,
      value: 14000,
      suffix: '+',
      label: 'Clínicas Médicas',
      color: 'neon-purple',
    },
    {
      icon: Globe,
      value: 2.8,
      suffix: 'B',
      prefix: 'USD ',
      label: 'TAM Global',
      color: 'neon-pink',
    },
    {
      icon: TrendingUp,
      value: 28,
      suffix: '%',
      label: 'CAGR Anual',
      color: 'neon-green',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Mercado em Expansão</span>
          </h2>
          <p className="text-xl text-gray-400">
            Oportunidade massiva no setor de saúde digital brasileiro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center card-hover pulse-glow"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${stat.color}/10 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold text-${stat.color} mb-2`}>
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix} 
                />
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Competitive Advantage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12 border border-neon-cyan/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Diferencial <span className="text-neon-cyan">Competitivo</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Enquanto concorrentes internacionais (IBM Watson, Aidoc, Viz.ai) focam apenas 
                em triagem e detecção de achados específicos, nosso foco é{' '}
                <span className="text-neon-cyan font-semibold">laudo automatizado end-to-end</span>{' '}
                com integração profunda ao fluxo clínico brasileiro.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-4 glass rounded-xl">
                <div className="text-neon-pink font-bold text-xl">IBM Watson</div>
                <div className="text-xs text-gray-500 mt-1">Triagem</div>
              </div>
              <div className="text-center px-6 py-4 glass rounded-xl border-2 border-neon-cyan">
                <div className="text-neon-cyan font-bold text-xl">LindiLaudo</div>
                <div className="text-xs text-neon-cyan mt-1">Laudo Completo</div>
              </div>
              <div className="text-center px-6 py-4 glass rounded-xl">
                <div className="text-neon-purple font-bold text-xl">Viz.ai</div>
                <div className="text-xs text-gray-500 mt-1">Detecção</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
