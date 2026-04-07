import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+55 62 98164-7087',
      href: 'https://wa.me/5562981647087',
      color: 'neon-green',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@lindilaudo.com',
      href: 'mailto:contato@lindilaudo.com',
      color: 'neon-cyan',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Goiânia, GO - Brasil',
      href: '#',
      color: 'neon-purple',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
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
            <span className="gradient-text">Vamos Conversar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pronto para revolucionar a radiologia do seu hospital? 
            Fale com nossos especialistas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
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
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan text-white transition-colors"
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
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan text-white transition-colors"
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
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan text-white transition-colors"
                    placeholder="Nome da instituição"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Mensagem</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan text-white transition-colors resize-none"
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass rounded-xl p-6 flex items-center gap-4 card-hover group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${info.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className={`w-6 h-6 text-${info.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5562981647087"
              target="_blank"
              rel="noopener noreferrer"
              className="block glass rounded-2xl p-8 border-2 border-neon-green/50 hover:border-neon-green transition-all duration-300 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-neon-green" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    Fale pelo WhatsApp
                  </h4>
                  <p className="text-gray-400">
                    Resposta em até 5 minutos durante horário comercial
                  </p>
                </div>
              </div>
            </a>

            {/* GitHub Link */}
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

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-neon-cyan/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-neon-cyan" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-neon-purple/20 transition-colors"
              >
                <Github className="w-5 h-5 text-neon-purple" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
