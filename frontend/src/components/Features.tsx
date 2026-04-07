import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  FileText, 
  LayoutDashboard, 
  RefreshCw, 
  Lock,
  Microscope,
  Stethoscope,
  Scan
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Motor IA Multimodal',
      description: 'Modelos ensemble (CNN/RNN/LSTM) para análise de imagens médicas em múltiplas modalidades',
      color: 'neon-cyan',
    },
    {
      icon: Database,
      title: 'Integração Nativa',
      description: 'Conectividade DICOM/HL7/FHIR com PACS/RIS hospitalares existentes',
      color: 'neon-purple',
    },
    {
      icon: FileText,
      title: 'Laudos em < 60s',
      description: 'Emissão automática de laudos estruturados com validação clínica de 97%',
      color: 'neon-pink',
    },
    {
      icon: LayoutDashboard,
      title: 'Portal Multi-tenant',
      description: 'Dashboard completo com métricas operacionais e analytics em tempo real',
      color: 'neon-green',
    },
    {
      icon: RefreshCw,
      title: 'Aprendizado Contínuo',
      description: 'Sistema evolutivo com revisão e validação de especialistas radiologistas',
      color: 'neon-blue',
    },
    {
      icon: Lock,
      title: 'LGPD by Design',
      description: 'Criptografia E2E, auditoria completa e anonimização automática de dados',
      color: 'neon-yellow',
    },
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
        {/* Section Header */}
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
            Plataforma de IA proprietária que automatiza a emissão de laudos médicos 
            por imagem em múltiplas modalidades
          </p>
        </motion.div>

        {/* Modalities */}
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 card-hover group relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-${feature.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-${feature.color}/5 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>

        {/* Problem/Solution Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {/* Problem Card */}
          <div className="glass rounded-2xl p-8 border-l-4 border-neon-pink">
            <h3 className="text-2xl font-bold text-neon-pink mb-4">Problema Crítico</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-neon-pink mr-2">▸</span>
                Deficit de 30% de radiologistas no Brasil
              </li>
              <li className="flex items-start">
                <span className="text-neon-pink mr-2">▸</span>
                Filas de até 30 dias para laudos complexos
              </li>
              <li className="flex items-start">
                <span className="text-neon-pink mr-2">▸</span>
                Hospitais neurológicos mais afetados
              </li>
              <li className="flex items-start">
                <span className="text-neon-pink mr-2">▸</span>
                Diagnósticos tardios e custos elevados
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="glass rounded-2xl p-8 border-l-4 border-neon-cyan">
            <h3 className="text-2xl font-bold text-neon-cyan mb-4">Nossa Solução</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-neon-cyan mr-2">▸</span>
                Laudo automatizado end-to-end
              </li>
              <li className="flex items-start">
                <span className="text-neon-cyan mr-2">▸</span>
                Integração profunda ao fluxo clínico brasileiro
              </li>
              <li className="flex items-start">
                <span className="text-neon-cyan mr-2">▸</span>
                Dataset proprietário curado com especialistas
              </li>
              <li className="flex items-start">
                <span className="text-neon-cyan mr-2">▸</span>
                Arquitetura escalável para telemedicina
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
