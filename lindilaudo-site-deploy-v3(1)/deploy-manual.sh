#!/bin/bash

# 🚀 Deploy Manual LindiLaudo Shape Wave
# Não depende de Git - build e deploy direto

set -e

echo "🏥 LindiLaudo Shape Wave - Deploy Manual"
echo "========================================="

# Verificar se está no diretório correto
if [ ! -f "Dockerfile" ]; then
    echo "❌ Erro: Dockerfile não encontrado!"
    echo "Execute este script no diretório do projeto"
    exit 1
fi

# Verificar gcloud
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud SDK não encontrado!"
    exit 1
fi

# Configurar projeto
echo ""
echo "📋 Projetos disponíveis:"
gcloud projects list --format="table(projectId,name)"
echo ""
read -p "Digite o ID do projeto: " PROJECT_ID

gcloud config set project $PROJECT_ID

# Habilitar APIs
echo ""
echo "🔧 Habilitando APIs..."
gcloud services enable run.googleapis.com containerregistry.googleapis.com

# Build da imagem Docker localmente e push
echo ""
echo "🔨 Building Docker image..."
docker build -t gcr.io/$PROJECT_ID/lindilaudo-site:latest .

echo ""
echo "☁️  Push para Container Registry..."
gcloud auth configure-docker
docker push gcr.io/$PROJECT_ID/lindilaudo-site:latest

# Deploy no Cloud Run
echo ""
echo "🚀 Deploy no Cloud Run..."
gcloud run deploy lindilaudo-site \
  --image gcr.io/$PROJECT_ID/lindilaudo-site:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 10

# Obter URL
URL=$(gcloud run services describe lindilaudo-site --region=us-central1 --format="value(status.url)")

echo ""
echo "✅ Deploy concluído!"
echo "🌐 URL: $URL"
