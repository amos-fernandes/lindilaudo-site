#!/bin/bash

# Script de Deploy LindiLaudo Shape Wave
set -e

echo "🏥 LindiLaudo Shape Wave - Deploy"
echo "=================================="

# Verificar gcloud
if ! command -v gcloud &> /dev/null; then
    echo "❌ Google Cloud SDK não encontrado!"
    echo "👉 https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Login se necessário
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q "@"; then
    echo "🔐 Faça login no Google Cloud..."
    gcloud auth login
fi

# Listar projetos
echo ""
echo "📋 Projetos disponíveis:"
gcloud projects list --format="table(projectId,name)"
echo ""
read -p "Digite o ID do projeto: " PROJECT_ID

gcloud config set project $PROJECT_ID

# Habilitar APIs
echo ""
echo "🔧 Habilitando APIs..."
gcloud services enable run.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com

# Deploy
echo ""
echo "🚀 Iniciando deploy..."
gcloud builds submit --config cloudbuild.yaml

# Obter URL
echo ""
echo "✅ Deploy concluído!"
URL=$(gcloud run services describe lindilaudo-site --region=us-central1 --format="value(status.url)" 2>/dev/null || echo "N/A")
echo "🌐 URL: $URL"
echo ""
echo "📱 WhatsApp: +55 62 98164-7087"
