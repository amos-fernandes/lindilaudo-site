# 🚀 LindiLaudo Shape Wave - Deploy Corrigido

## ⚠️ Erros Comuns e Soluções

### Erro 1: "src refspec main does not match any"
**Causa:** O Git criou a branch `master` mas você está tentando push para `main` (ou vice-versa).

### Erro 2: "non-fast-forward"
**Causa:** O repositório remoto tem commits que você não tem localmente.

---

## ✅ SOLUÇÃO RÁPIDA (Copie e cole no terminal)

```bash
# 1. Entre no diretório do projeto
cd lindilaudo-site-deploy

# 2. Configure o Git para usar 'main' como padrão
git config --global init.defaultBranch main

# 3. Inicialize o repositório (se ainda não fez)
git init

# 4. Renomeie a branch para 'main' (independente do nome atual)
git branch -M main

# 5. Adicione todos os arquivos
git add .

# 6. Faça o commit
git commit -m "Site LindiLaudo Shape Wave v1.0"

# 7. Configure o remote (forçando sobrescrita se necessário)
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/amos-fernandes/lindilaudo-site.git

# 8. FORÇAR o push (resolve o non-fast-forward)
git push -u origin main --force
```

---

## 🔧 Se o comando acima falhar, tente este método alternativo:

```bash
# Método 2: Resetar e começar do zero (CUIDADO: apaga histórico remoto)
cd lindilaudo-site-deploy

# Limpar completamente o Git
rm -rf .git

# Recomeçar
git init
git config user.email "seu-email@exemplo.com"
git config user.name "Seu Nome"
git add .
git commit -m "Site LindiLaudo Shape Wave v1.0"
git branch -M main
git remote add origin https://github.com/amos-fernandes/lindilaudo-site.git

# Forçar push (sobrescreve tudo no GitHub)
git push -u origin main --force
```

---

## ☁️ Deploy no Google Cloud (após o Git funcionar)

```bash
# 1. Configure o projeto
gcloud config set project SEU-PROJECT-ID

# 2. Habilitar APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# 3. Deploy
gcloud builds submit --config cloudbuild.yaml
```

Ou use o script automatizado:
```bash
chmod +x deploy-fix.sh
./deploy-fix.sh
```

---

## 🐛 Debug: Verificar qual branch você está

```bash
# Ver branch atual
git branch

# Ver branches remotas
git branch -r

# Ver log
git log --oneline

# Ver remotes configurados
git remote -v
```

---

## 📱 Contato

- WhatsApp: +55 62 98164-7087
- GitHub: https://github.com/amos-fernandes/lindilaudo-site.git

---

## 🎯 Resumo dos Comandos

| Situação | Comando |
|----------|---------|
| Ver branch atual | `git branch` |
| Mudar para main | `git branch -M main` |
| Forçar push | `git push -u origin main --force` |
| Limpar e recomeçar | `rm -rf .git && git init` |
| Ver erro detalhado | `git push -v origin main` |
