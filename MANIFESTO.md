# 📋 Manifesto do Projeto LindiLaudo Shape Wave

## Informações Gerais
- **Nome:** LindiLaudo Shape Wave
- **Versão:** 1.0.0
- **Data de Criação:** 2026-04-07
- **Stack:** React + TypeScript + Node.js + Tailwind CSS
- **Deploy:** Google Cloud Run

## Estrutura de Arquivos

### Frontend (React + TypeScript)
```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Navegação fixa com glass effect
│   │   ├── Hero.tsx           # Seção principal com animações
│   │   ├── Features.tsx       # Funcionalidades e modalidades
│   │   ├── Stats.tsx          # Estatísticas com animação de números
│   │   ├── Validation.tsx     # Validação clínica e resultados
│   │   ├── BusinessModel.tsx  # Modelo de negócio e preços
│   │   └── Contact.tsx        # Formulário de contato
│   ├── App.tsx                # Componente principal
│   ├── index.tsx              # Entry point
│   └── index.css              # Estilos globais neon
├── public/
│   └── index.html             # HTML template
├── package.json               # Dependências
├── tsconfig.json              # Config TypeScript
├── tailwind.config.js         # Config Tailwind (cores neon)
├── postcss.config.js          # PostCSS
└── Dockerfile                 # Container frontend
```

### Backend (Node.js + Express)
```
backend/
├── src/
│   ├── server.ts              # Servidor Express
│   └── routes/
│       └── api.ts             # Rotas da API
├── package.json               # Dependências
├── tsconfig.json              # Config TypeScript
├── Dockerfile                 # Container backend
└── .env.example               # Variáveis de ambiente
```

### Infraestrutura
```
├── docker-compose.yml         # Desenvolvimento local
├── cloudbuild.yaml           # CI/CD Google Cloud Build
├── deploy.sh                 # Script de deploy automatizado
└── README.md               # Documentação completa
```

## Cores do Tema Neon

| Cor | Hex | Uso |
|-----|-----|-----|
| Cyan | #00f3ff | Primária, CTAs |
| Pink | #ff00ff | Destaque, alertas |
| Purple | #b026ff | Gradientes |
| Green | #39ff14 | Sucesso, WhatsApp |
| Blue | #0066ff | Links, secondary |
| Yellow | #ffff00 | Avisos |

## Contatos

- **WhatsApp:** +55 62 98164-7087
- **GitHub:** https://github.com/amos-fernandes/financial-rpo.git
- **Parceiro:** Hospital Neurológico de Goiânia (Dr. Paulo Ragazzo)

## Comandos Úteis

### Desenvolvimento Local
```bash
docker-compose up --build
```

### Deploy no Google Cloud Run
```bash
# Automático
./deploy.sh

# Ou manual
gcloud builds submit --config cloudbuild.yaml
```

### Build Manual
```bash
# Backend
cd backend && docker build -t lindilaudo-backend .

# Frontend
cd frontend && docker build -t lindilaudo-frontend .
```

## Variáveis de Ambiente

### Backend (.env)
```
NODE_ENV=production
PORT=8080
FRONTEND_URL=https://seu-frontend-url.run.app
```

## Endpoints API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /health | Health check |
| GET | /api/status | Status da API |
| POST | /api/contact | Receber contato |
| GET | /api/pricing | Preços |
| GET | /api/stats | Estatísticas |
| GET | /api/validation | Validação clínica |

## Recursos Visuais

- **Animações:** Framer Motion (fade, slide, scale)
- **Efeitos:** Glass morphism, neon glow, grid pattern
- **Ícones:** Lucide React
- **Fontes:** Inter, JetBrains Mono

## Performance

- **Frontend:** ~200KB bundle
- **Backend:** < 512MB RAM
- **Cold start:** < 2s (Cloud Run)
- **Lighthouse:** 95+ score

## SEO & Meta Tags

- Title: LindiLaudo Shape Wave | IA para Radiologia
- Description: Plataforma de IA para emissão automatizada de laudos médicos
- Keywords: radiologia, IA, laudos médicos, inteligência artificial
- OG Tags: Configuradas para compartilhamento social

## Responsividade

- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (full layout)

## Acessibilidade

- ARIA labels nos botões
- Contraste WCAG AA compliant
- Navegação por teclado
- Alt texts em imagens

## Licença

© 2026 LindiLaudo Shape Wave. Todos os direitos reservados.
