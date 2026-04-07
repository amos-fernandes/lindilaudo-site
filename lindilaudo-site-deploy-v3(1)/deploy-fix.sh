#!/bin/bash

# 🔧 Script de Deploy Corrigido para LindiLaudo Shape Wave
# Resolve problemas de branch e push

set -e

echo "🏥 LindiLaudo Shape Wave - Deploy Corrigido"
echo "============================================"

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script no diretório do projeto (onde está o package.json)"
    exit 1
fi

# Configurar Git (evitar erros de branch)
echo ""
echo "🔧 Configurando Git..."
git config --global init.defaultBranch main 2>/dev/null || true

# Verificar se já é um repositório git
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
    git checkout -b main
else
    echo "📦 Repositório Git já existe"
    # Garantir que estamos na branch main
    git checkout main 2>/dev/null || git checkout -b main
fi

# Adicionar todos os arquivos
echo ""
echo "📁 Adicionando arquivos..."
git add .

# Commit
echo ""
echo "💾 Criando commit..."
git commit -m "Site LindiLaudo Shape Wave v1.0 - Deploy Cloud Run" || echo "⚠️  Nada para commitar (ou commit já existe)"

# Configurar remote (forçar atualização)
echo ""
echo "🔗 Configurando remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/amos-fernandes/lindilaudo-site.git

# Forçar push (sobrescrever histórico remoto se necessário)
echo ""
echo "☁️  Enviando para GitHub..."
echo "⚠️  Isso vai sobrescrever o conteúdo remoto!"
read -p "Continuar? (s/N): " confirm

if [[ $confirm == [sS] ]]; then
    git push -u origin main --force
    echo ""
    echo "✅ Código enviado para GitHub!"
else
    echo "❌ Push cancelado"
    exit 1
fi

# Deploy no Google Cloud
echo ""
echo "🚀 Iniciando deploy no Google Cloud Run..."
echo ""

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
read -p "Digite o ID do projeto Google Cloud: " PROJECT_ID

gcloud config set project $PROJECT_ID

# Habilitar APIs
echo ""
echo "🔧 Habilitando APIs necessárias..."
gcloud services enable run.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com

# Deploy via Cloud Build
echo ""
echo "🚀 Executando deploy via Cloud Build..."
echo "⏳ Isso pode levar 3-5 minutos..."
gcloud builds submit --config cloudbuild.yaml

# Obter URL
echo ""
echo "✅ Deploy concluído!"
URL=$(gcloud run services describe lindilaudo-site --region=us-central1 --format="value(status.url)" 2>/dev/null || echo "N/A")
echo ""
echo "🌐 ========================================="
echo "   SEU SITE ESTÁ NO AR!"
echo "   URL: $URL"
echo "========================================="
echo ""
echo "📱 WhatsApp: +55 62 98164-7087"
echo "💻 GitHub: https://github.com/amos-fernandes/lindilaudo-site"
echo ""
