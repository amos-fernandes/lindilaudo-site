import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Shield, Zap, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Clock, value: '< 60s', label: 'Laudo Emitido' },
    { icon: Activity, value: '97%', label: 'Acurácia Clínica' },
    { icon: Shield, value: 'LGPD', label: 'Compliance' },
    { icon: Zap, value: '10x', label: 'Mais Rápido' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse mr-2" />
          <span className="text-sm text-neon-cyan font-mono">IA Generativa para Radiologia</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Revolucionando</span>
          <span className="block gradient-text mt-2">Laudos Médicos</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          De <span className="text-neon-pink line-through">30 minutos a 30 dias</span> para{' '}
          <span className="text-neon-cyan font-semibold">menos de 60 segundos</span>
          <br />
          <span className="text-lg">com 97% de acurácia clínica validada</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://wa.me/5562981647087"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-semibold text-dark-900 hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300"
          >
            Falar com Especialista
          </a>
          <button
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-neon-cyan/50 rounded-lg font-semibold text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
          >
            Conhecer Solução
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <stat.icon className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-neon-cyan/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
