#!/bin/bash

# 🚀 Script de Deploy LindiLaudo Shape Wave para Google Cloud Run
# Autor: Kimi AI
# Data: 2026-04-07

set -e

echo "🏥 LindiLaudo Shape Wave - Deploy Script"
echo "=========================================="

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar se gcloud está instalado
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ Google Cloud SDK não encontrado!${NC}"
    echo "👉 Instale em: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Verificar autenticação
echo -e "${BLUE}🔐 Verificando autenticação...${NC}"
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q "@"; then
    echo -e "${YELLOW}⚠️  Não autenticado. Iniciando login...${NC}"
    gcloud auth login
fi

# Configurar projeto
echo ""
echo -e "${BLUE}📋 Projetos disponíveis:${NC}"
gcloud projects list --format="table(projectId,name)"
echo ""
read -p "Digite o ID do projeto Google Cloud: " PROJECT_ID

gcloud config set project $PROJECT_ID

# Habilitar APIs
echo ""
echo -e "${BLUE}🔧 Habilitando APIs necessárias...${NC}"
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable monitoring.googleapis.com

echo -e "${GREEN}✅ APIs habilitadas com sucesso!${NC}"

# Deploy via Cloud Build
echo ""
echo -e "${BLUE}🚀 Iniciando deploy via Cloud Build...${NC}"
echo -e "${YELLOW}⏳ Isso pode levar alguns minutos...${NC}"

gcloud builds submit --config cloudbuild.yaml

# Obter URLs
echo ""
echo -e "${BLUE}🔗 Obtendo URLs dos serviços...${NC}"

BACKEND_URL=$(gcloud run services describe lindilaudo-backend --region=us-central1 --format="value(status.url)" 2>/dev/null || echo "Não disponível")
FRONTEND_URL=$(gcloud run services describe lindilaudo-frontend --region=us-central1 --format="value(status.url)" 2>/dev/null || echo "Não disponível")

echo ""
echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
echo "=========================================="
echo -e "${BLUE}🌐 URLs dos serviços:${NC}"
echo -e "  Frontend: ${GREEN}$FRONTEND_URL${NC}"
echo -e "  Backend:  ${GREEN}$BACKEND_URL${NC}"
echo ""
echo -e "${YELLOW}📊 Health Checks:${NC}"
echo -e "  Backend: ${GREEN}$BACKEND_URL/health${NC}"
echo ""
echo -e "${BLUE}📱 Contato:${NC}"
echo -e "  WhatsApp: +55 62 98164-7087"
echo -e "  GitHub:   https://github.com/amos-fernandes/financial-rpo.git"
echo ""
echo -e "${GREEN}🎉 LindiLaudo Shape Wave está no ar!${NC}"
