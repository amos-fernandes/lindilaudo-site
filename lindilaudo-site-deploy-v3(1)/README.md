# LindiLaudo Shape Wave - Site Institucional

Site moderno em React com design neon para a plataforma de IA médica.

## 🚀 Deploy no Google Cloud Run

### Opção 1: Deploy Automático (Recomendado)

```bash
# Configurar projeto
gcloud config set project SEU-PROJECT-ID

# Deploy completo
gcloud builds submit --config cloudbuild.yaml
```

### Opção 2: Deploy Manual

```bash
# Build e push
gcloud builds submit --tag gcr.io/SEU-PROJECT-ID/lindilaudo-site

# Deploy
gcloud run deploy lindilaudo-site \
  --image gcr.io/SEU-PROJECT-ID/lindilaudo-site \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

## 📁 Estrutura

```
.
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Todos os componentes
│   ├── index.js        # Entry point
│   └── index.css       # Estilos globais
├── Dockerfile          # Container config
├── cloudbuild.yaml     # CI/CD Google Cloud
├── package.json        # Dependências
├── tailwind.config.js  # Config Tailwind
└── postcss.config.js   # PostCSS config
```

## 🔗 Links

- WhatsApp: +55 62 98164-7087
- GitHub: https://github.com/amos-fernandes/financial-rpo.git

## 📝 Notas

- Site 100% estático (frontend only)
- Otimizado para Cloud Run (porta 8080)
- Design responsivo com Tailwind CSS
- Animações com Framer Motion
