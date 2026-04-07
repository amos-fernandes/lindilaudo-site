import { Router } from 'express';

const router = Router();

// GET /api/status - Status da API
router.get('/status', (req, res) => {
  res.json({
    status: 'online',
    service: 'LindiLaudo Shape Wave',
    timestamp: new Date().toISOString(),
    features: [
      'ia-multimodal',
      'laudos-automatizados',
      'integracao-pacs',
      'lgpd-compliance'
    ]
  });
});

// POST /api/contact - Formulário de contato
router.post('/contact', (req, res) => {
  const { name, email, hospital, message } = req.body;

  // Aqui você implementaria o envio para email/CRM
  console.log('Novo contato:', { name, email, hospital, message });

  res.status(201).json({
    success: true,
    message: 'Mensagem recebida com sucesso',
    data: {
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    }
  });
});

// GET /api/pricing - Informações de preços
router.get('/pricing', (req, res) => {
  res.json({
    tiers: [
      {
        name: 'Starter',
        price: 2990,
        currency: 'BRL',
        period: 'monthly',
        features: ['3 radiologistas', '500 laudos', 'Suporte email']
      },
      {
        name: 'Professional',
        price: 7990,
        currency: 'BRL',
        period: 'monthly',
        features: ['10 radiologistas', '2000 laudos', 'Suporte 24/7', 'API dedicada']
      },
      {
        name: 'Enterprise',
        price: null,
        currency: 'BRL',
        period: 'monthly',
        features: ['Ilimitado', 'Laudos ilimitados', 'Gerente dedicado', 'On-premise']
      }
    ]
  });
});

// GET /api/stats - Estatísticas públicas
router.get('/stats', (req, res) => {
  res.json({
    accuracy: 97,
    speed: '< 60s',
    costReduction: 65,
    throughput: '10x',
    hospitals: 6800,
    clinics: 14000,
    tam: 'USD 2.8B',
    cagr: '28%'
  });
});

// GET /api/validation - Dados de validação clínica
router.get('/validation', (req, res) => {
  res.json({
    pilot: {
      institution: 'Hospital Neurológico de Goiânia',
      partner: 'Dr. Paulo Ragazzo',
      results: {
        accuracy: 97,
        latency: '< 60s',
        costReduction: 65,
        throughput: '10x'
      }
    }
  });
});

export default router;
