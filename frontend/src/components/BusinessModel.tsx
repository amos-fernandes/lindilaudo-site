import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Settings, FileText, TrendingUp, PieChart, Target } from 'lucide-react';

const BusinessModel: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: 'R$ 2.990',
      period: '/mês',
      description: 'Ideal para clínicas pequenas',
      features: [
        'Até 3 radiologistas',
        '500 laudos/mês incluídos',
        'Suporte por email',
        'Integração básica PACS',
      ],
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 'R$ 7.990',
      period: '/mês',
      description: 'Para hospitais de médio porte',
      features: [
        'Até 10 radiologistas',
        '2.000 laudos/mês incluídos',
        'Suporte prioritário 24/7',
        'Integração completa HL7/FHIR',
        'Dashboard avançado',
        'API dedicada',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Redes hospitalares e telemedicina',
      features: [
        'Radiologistas ilimitados',
        'Laudos ilimitados',
        'Gerente de conta dedicado',
        'Integração customizada',
        'SLA garantido 99.9%',
        'On-premise disponível',
      ],
      highlighted: false,
    },
  ];

  const revenueStreams = [
    {
      icon: CreditCard,
      title: 'SaaS Mensal',
      description: 'Por radiologista ativo na plataforma',
      color: 'neon-cyan',
    },
    {
      icon: Settings,
      title: 'Fee de Implantação',
      description: 'Setup inicial e integração hospitalar',
      color: 'neon-purple',
    },
    {
      icon: FileText,
      title: 'Tokens por Laudo',
      description: 'Excedentes além da franquia inclusa',
      color: 'neon-pink',
    },
  ];

  return (
    <section id="business" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            SaaS escalável com múltiplas fontes de receita
          </p>
        </motion.div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {revenueStreams.map((stream, index) => (
            <div
              key={stream.title}
              className="glass rounded-2xl p-8 card-hover text-center"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${stream.color}/10 flex items-center justify-center mx-auto mb-4`}>
                <stream.icon className={`w-8 h-8 text-${stream.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{stream.title}</h3>
              <p className="text-gray-400">{stream.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-2xl p-8 card-hover relative ${
                tier.highlighted 
                  ? 'border-2 border-neon-cyan scale-105 z-10' 
                  : 'border border-gray-800'
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

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                    : 'border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10'
                }`}
              >
                {tier.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Market Opportunity */}
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
                    <div className="font-semibold text-white">Mercado Endereçável (SAM)</div>
                    <div className="text-neon-cyan">6.800+ hospitais e 14.000+ clínicas</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Crescimento Anual (CAGR)</div>
                    <div className="text-neon-purple">28% - Setor de IA em saúde</div>
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
                      <div 
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-end px-3"
                        style={{ width: item.width }}
                      >
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

export default BusinessModel;
