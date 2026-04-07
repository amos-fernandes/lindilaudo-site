# 🏥 LindiLaudo Shape Wave

**Plataforma de Inteligência Artificial para Emissão Automatizada de Laudos Médicos por Imagem**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-06B6D4?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-18-339933?logo=node.js)

## ✨ Sumário Executivo

O **LindiLaudo Shape Wave** é uma plataforma de IA proprietária que automatiza a emissão de laudos médicos por imagem em múltiplas modalidades:

- 🔬 **Radiografia (RX)**
- 🧠 **Tomografia Computadorizada (CT)**
- 🎯 **Ressonância Magnética (MRI)**
- 📡 **Ultrassonografia (USG)**

### 🚀 Resultados Comprovados

- ⚡ **< 60 segundos** para emissão de laudo (vs 30 min a 30 dias manual)
- 🎯 **97% de acurácia** clínica validada
- 💰 **65% de redução** de custos operacionais
- 📈 **10x aumento** na capacidade de processamento

---

## 🛠️ Stack Tecnológica

### Frontend
- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones

### Backend
- **Node.js** com Express
- **TypeScript** para type safety
- **Helmet** para segurança
- **CORS** habilitado

### Infraestrutura
- **Docker** para containerização
- **Google Cloud Run** para deploy serverless
- **Cloud Build** para CI/CD

---

## 🚀 Deploy no Google Cloud Run

### Pré-requisitos

1. [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) instalado
2. Projeto criado no [Google Cloud Console](https://console.cloud.google.com)
3. Cloud Run API e Cloud Build API habilitados

### Passo a Passo

#### 1. Autenticação
```bash
gcloud auth login
gcloud config set project SEU-PROJECT-ID
```

#### 2. Habilitar APIs necessárias
```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

#### 3. Deploy via Cloud Build (Recomendado)
```bash
gcloud builds submit --config cloudbuild.yaml
```

#### 4. Deploy Manual (Alternativo)

**Backend:**
```bash
cd backend
gcloud builds submit --tag gcr.io/SEU-PROJECT-ID/lindilaudo-backend
gcloud run deploy lindilaudo-backend \
  --image gcr.io/SEU-PROJECT-ID/lindilaudo-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

**Frontend:**
```bash
cd frontend
gcloud builds submit --tag gcr.io/SEU-PROJECT-ID/lindilaudo-frontend
gcloud run deploy lindilaudo-frontend \
  --image gcr.io/SEU-PROJECT-ID/lindilaudo-frontend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

---

## 🧪 Desenvolvimento Local

### Usando Docker Compose

```bash
# Clone o repositório
git clone https://github.com/amos-fernandes/financial-rpo.git
cd lindilaudo-shapewave

# Inicie os serviços
docker-compose up --build

# Acesse:
# Frontend: http://localhost:3000
# Backend: http://localhost:8081
```

### Manualmente

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

---

## 📁 Estrutura do Projeto

```
lindilaudo-shapewave/
├── frontend/                 # React + TypeScript + Tailwind
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Validation.tsx
│   │   │   ├── BusinessModel.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Navbar.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── Dockerfile
│   └── package.json
├── backend/                  # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── server.ts
│   │   └── routes/
│   │       └── api.ts
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml        # Configuração local
├── cloudbuild.yaml          # CI/CD Google Cloud
└── README.md
```

---

## 🔗 Links Importantes

- 📱 **WhatsApp:** [+55 62 98164-7087](https://wa.me/5562981647087)
- 💻 **GitHub:** [github.com/amos-fernandes/financial-rpo](https://github.com/amos-fernandes/financial-rpo.git)
- 🏥 **Parceiro:** Hospital Neurológico de Goiânia
- 👨‍⚕️ **Especialista:** Dr. Paulo Ragazzo

---

## 📊 Endpoints da API

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/health` | GET | Health check |
| `/api/status` | GET | Status da API |
| `/api/contact` | POST | Formulário de contato |
| `/api/pricing` | GET | Informações de preços |
| `/api/stats` | GET | Estatísticas públicas |
| `/api/validation` | GET | Dados de validação clínica |

---

## 🎨 Design System

### Cores Neon
- **Cyan:** `#00f3ff`
- **Pink:** `#ff00ff`
- **Purple:** `#b026ff`
- **Green:** `#39ff14`
- **Blue:** `#0066ff`

### Fontes
- **Primary:** Inter
- **Mono:** JetBrains Mono

---

## 📄 Licença

© 2026 LindiLaudo Shape Wave. Todos os direitos reservados.

---

## 🤝 Contato

Para mais informações ou parcerias comerciais:

- 📧 Email: contato@lindilaudo.com
- 📱 WhatsApp: +55 62 98164-7087
- 🔗 LinkedIn: [LindiLaudo Shape Wave](#)

---

<p align="center">
  <strong>Powered by AI • Made in Brazil 🇧🇷</strong>
</p>
