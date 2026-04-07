import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Menu, X, Clock, Activity, Shield, Zap, ChevronDown,
  Database, FileText, LayoutDashboard, RefreshCw, Lock,
  Microscope, Stethoscope, Scan, TrendingUp, Users, Building2, Globe,
  CheckCircle, DollarSign, Award, Building, CreditCard, Settings,
  Target, PieChart, Phone, Mail, MapPin, Send, Github, Linkedin, MessageCircle
} from 'lucide-react';

// ============ COMPONENTE NAVBAR ============
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Solução', href: '#features' },
    { name: 'Validação', href: '#validation' },
    { name: 'Negócio', href: '#business' },
    { name: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="w-8 h-8 text-neon-cyan" />
              <div className="absolute inset-0 bg-neon-cyan/30 blur-lg rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">LindiLaudo</h1>
              <p className="text-xs text-neon-cyan/70 font-mono tracking-wider">SHAPE WAVE</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-gray-300 hover:text-neon-cyan transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <a
              href="https://github.com/amos-fernandes/financial-rpo.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          <button className="md:hidden text-neon-cyan" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-cyan/20">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// ============ COMPONENTE HERO ============
const Hero = () => {
  const stats = [
    { icon: Clock, value: '< 60s', label: 'Laudo Emitido' },
    { icon: Activity, value: '97%', label: 'Acurácia Clínica' },
    { icon: Shield, value: 'LGPD', label: 'Compliance' },
    { icon: Zap, value: '10x', label: 'Mais Rápido' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse mr-2" />
          <span className="text-sm text-neon-cyan font-mono">IA Generativa para Radiologia</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Revolucionando</span>
          <span className="block gradient-text mt-2">Laudos Médicos</span>
        </motion.h1>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6 text-neon-cyan/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ COMPONENTE FEATURES ============
const Features = () => {
  const features = [
    { icon: Brain, title: 'Motor IA Multimodal', description: 'Modelos ensemble (CNN/RNN/LSTM) para análise de imagens médicas em múltiplas modalidades', color: 'text-neon-cyan' },
    { icon: Database, title: 'Integração Nativa', description: 'Conectividade DICOM/HL7/FHIR com PACS/RIS hospitalares existentes', color: 'text-neon-purple' },
    { icon: FileText, title: 'Laudos em < 60s', description: 'Emissão automática de laudos estruturados com validação clínica de 97%', color: 'text-neon-pink' },
    { icon: LayoutDashboard, title: 'Portal Multi-tenant', description: 'Dashboard completo com métricas operacionais e analytics em tempo real', color: 'text-neon-green' },
    { icon: RefreshCw, title: 'Aprendizado Contínuo', description: 'Sistema evolutivo com revisão e validação de especialistas radiologistas', color: 'text-neon-blue' },
    { icon: Lock, title: 'LGPD by Design', description: 'Criptografia E2E, auditoria completa e anonimização automática de dados', color: 'text-neon-yellow' },
  ];

  const modalities = [
    { icon: Scan, name: 'Radiografia', desc: 'RX Digital' },
    { icon: Microscope, name: 'Tomografia', desc: 'CT Scan' },
    { icon: Brain, name: 'Ressonância', desc: 'MRI' },
    { icon: Stethoscope, name: 'Ultrassom', desc: 'USG' },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Solução Completa</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Plataforma de IA proprietária que automatiza a emissão de laudos médicos por imagem
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {modalities.map((mod, index) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center card-hover border border-neon-cyan/20"
            >
              <mod.icon className="w-10 h-10 text-neon-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-white">{mod.name}</h3>
              <p className="text-sm text-gray-400">{mod.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 card-hover group"
            >
              <div className={`w-14 h-14 rounded-xl bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color.replace('text-', 'bg-')}`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="glass rounded-2xl p-8 border-l-4 border-neon-pink">
            <h3 className="text-2xl font-bold text-neon-pink mb-4">Problema Crítico</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start"><span className="text-neon-pink mr-2">▸</span>Deficit de 30% de radiologistas no Brasil</li>
              <li className="flex items-start"><span className="text-neon-pink mr-2">▸</span>Filas de até 30 dias para laudos complexos</li>
              <li className="flex items-start"><span className="text-neon-pink mr-2">▸</span>Hospitais neurológicos mais afetados</li>
              <li className="flex items-start"><span className="text-neon-pink mr-2">▸</span>Diagnósticos tardios e custos elevados</li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-8 border-l-4 border-neon-cyan">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">Nossa Solução</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start"><span className="text-neon-cyan mr-2">▸</span>Laudo automatizado end-to-end</li>
              <li className="flex items-start"><span className="text-neon-cyan mr-2">▸</span>Integração profunda ao fluxo clínico brasileiro</li>
              <li className="flex items-start"><span className="text-neon-cyan mr-2">▸</span>Dataset proprietário curado com especialistas</li>
              <li className="flex items-start"><span className="text-neon-cyan mr-2">▸</span>Arquitetura escalável para telemedicina</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ COMPONENTE STATS ============
const Stats = () => {
  const marketStats = [
    { icon: Building2, value: '6.800+', label: 'Hospitais no Brasil', color: 'text-neon-cyan' },
    { icon: Users, value: '14.000+', label: 'Clínicas Médicas', color: 'text-neon-purple' },
    { icon: Globe, value: 'USD 2.8B', label: 'TAM Global', color: 'text-neon-pink' },
    { icon: TrendingUp, value: '28%', label: 'CAGR Anual', color: 'text-neon-green' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
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
          <p className="text-xl text-gray-400">Oportunidade massiva no setor de saúde digital brasileiro</p>
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
              <div className={`w-16 h-16 rounded-2xl bg-opacity-10 flex items-center justify-center mx-auto mb-4 ${stat.color.replace('text-', 'bg-')}`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

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
                Enquanto concorrentes internacionais (IBM Watson, Aidoc, Viz.ai) focam apenas em triagem, 
                nosso foco é <span className="text-neon-cyan font-semibold">laudo automatizado end-to-end</span> com integração profunda ao fluxo clínico brasileiro.
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

// ============ COMPONENTE VALIDATION ============
const Validation = () => {
  const results = [
    { icon: Activity, metric: '97%', label: 'Acurácia Clínica', description: 'Comparação cega com laudos de radiologistas', color: 'text-neon-cyan' },
    { icon: Clock, metric: '< 60s', label: 'Latência', description: 'vs 4-24 horas do fluxo manual', color: 'text-neon-green' },
    { icon: DollarSign, metric: '65%', label: 'Redução de Custos', description: 'Economia por exame processado', color: 'text-neon-pink' },
    { icon: CheckCircle, metric: '10x', label: 'Throughput', description: 'Aumento na capacidade de laudos/dia', color: 'text-neon-purple' },
  ];

  return (
    <section id="validation" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Piloto realizado no Hospital Neurológico de Goiânia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass rounded-2xl p-8 md:p-12 border border-neon-cyan/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-blue flex items-center justify-center flex-shrink-0">
                <Building className="w-12 h-12 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Hospital Neurológico de Goiânia</h3>
                <p className="text-neon-cyan font-mono mb-4">Instituto de Neurologia de Goiânia (ING)</p>
                <p className="text-gray-400 max-w-2xl">
                  Parceria estratégica com o Dr. Paulo Ragazzo para curadoria de dataset proprietário e validação clínica.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

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
              <div className={`w-16 h-16 rounded-2xl bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${result.color.replace('text-', 'bg-')}`}>
                <result.icon className={`w-8 h-8 ${result.color}`} />
              </div>
              <div className={`text-5xl font-bold ${result.color} mb-2`}>{result.metric}</div>
              <div className="text-lg font-semibold text-white mb-2">{result.label}</div>
              <div className="text-sm text-gray-400">{result.description}</div>
            </motion.div>
          ))}
        </div>

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
                A precisão dos laudos automatizados permite diagnósticos mais rápidos e eficientes."
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

// ============ COMPONENTE BUSINESS MODEL ============
const BusinessModel = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: 'R$ 2.990',
      period: '/mês',
      description: 'Ideal para clínicas pequenas',
      features: ['Até 3 radiologistas', '500 laudos/mês', 'Suporte por email', 'Integração básica PACS'],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 'R$ 7.990',
      period: '/mês',
      description: 'Para hospitais de médio porte',
      features: ['Até 10 radiologistas', '2.000 laudos/mês', 'Suporte 24/7', 'Integração HL7/FHIR', 'Dashboard avançado', 'API dedicada'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Redes hospitalares e telemedicina',
      features: ['Radiologistas ilimitados', 'Laudos ilimitados', 'Gerente de conta dedicado', 'Integração customizada', 'SLA 99.9%', 'On-premise'],
      highlighted: false,
    },
  ];

  return (
    <section id="business" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Modelo de Negócio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">SaaS escalável com múltiplas fontes de receita</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl p-8 card-hover relative ${
                tier.highlighted ? 'border-2 border-neon-cyan scale-105 z-10' : 'border border-gray-800'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.highlighted ? 'text-neon-cyan' : 'text-white'}`}>
                  {tier.price}
                </span>
                <span className="text-gray-400">{tier.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-neon-cyan mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  : 'border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10'
              }`}>
                {tier.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Oportunidade de <span className="text-neon-cyan">Mercado</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Mercado Endereçável</div>
                    <div className="text-neon-cyan">6.800+ hospitais e 14.000+ clínicas</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Crescimento Anual</div>
                    <div className="text-neon-purple">28% CAGR - Setor de IA em saúde</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">TAM Global</div>
                    <div className="text-neon-pink">USD 2.8 Bilhões</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass rounded-xl p-6 border border-neon-cyan/20">
              <h4 className="text-lg font-semibold text-white mb-4">Projeção de Receita (5 anos)</h4>
              <div className="space-y-3">
                {[
                  { year: 'Ano 1', value: 'R$ 2M', width: '20%' },
                  { year: 'Ano 2', value: 'R$ 8M', width: '40%' },
                  { year: 'Ano 3', value: 'R$ 25M', width: '60%' },
                  { year: 'Ano 4', value: 'R$ 60M', width: '80%' },
                  { year: 'Ano 5', value: 'R$ 120M', width: '100%' },
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-4">
                    <span className="text-gray-400 w-16">{item.year}</span>
                    <div className="flex-1 h-8 bg-dark-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-end px-3" style={{ width: item.width }}>
                        <span className="text-dark-900 font-bold text-sm">{item.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ COMPONENTE CONTACT ============
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', hospital: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Vamos Conversar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pronto para revolucionar a radiologia do seu hospital?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nome completo</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none text-white"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none text-white"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Hospital/Clínica</label>
                  <input
                    type="text"
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none text-white"
                    placeholder="Nome da instituição"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Mensagem</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none text-white resize-none"
                    placeholder="Como podemos ajudar?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg font-semibold text-dark-900 hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <a
              href="https://wa.me/5562981647087"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass rounded-2xl p-8 border-2 border-neon-green/50 hover:border-neon-green transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-neon-green" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Fale pelo WhatsApp</h4>
                  <p className="text-gray-400">+55 62 98164-7087</p>
                  <p className="text-sm text-neon-green mt-1">Resposta em até 5 minutos</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/amos-fernandes/financial-rpo.git"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass rounded-xl p-6 flex items-center gap-4 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-400">Repositório GitHub</div>
                <div className="text-lg font-semibold text-white hover:text-neon-cyan transition-colors">
                  github.com/amos-fernandes/financial-rpo
                </div>
              </div>
            </a>

            <div className="glass rounded-xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-lg font-semibold text-white">contato@lindilaudo.com</div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Localização</div>
                <div className="text-lg font-semibold text-white">Goiânia, GO - Brasil</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ APP PRINCIPAL ============
function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px] pointer-events-none" />

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Stats />
        <Validation />
        <BusinessModel />
        <Contact />
      </main>

      <footer className="py-8 border-t border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">© 2026 LindiLaudo Shape Wave. Todos os direitos reservados.</p>
          <p className="text-neon-cyan/60 text-xs mt-2 font-mono">Powered by AI • Made in Brazil 🇧🇷</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
