# Configuração do Sistema de Envio de Emails

## 🎯 Serviço Recomendado: Resend

Para que o formulário de contato funcione corretamente, você precisa configurar o **Resend** - um serviço moderno, confiável e com plano gratuito generoso.

### Por que Resend?

- ✅ **Mais moderno** - API mais simples e intuitiva
- ✅ **Melhor delivery rate** - 99.9% de entrega
- ✅ **Plano gratuito generoso** - 3.000 emails/mês
- ✅ **Setup mais fácil** - Menos configuração
- ✅ **Melhor documentação** - Exemplos claros
- ✅ **Suporte nativo TypeScript** - Melhor integração

## 📧 Configuração do Resend

### 1. Criar conta no Resend

1. Acesse: https://resend.com
2. Crie uma conta gratuita
3. Verifique seu domínio de email

### 2. Obter API Key

1. No dashboard do Resend, vá em "API Keys"
2. Crie uma nova API key
3. Copie a chave (começa com `re_`)

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
# Resend API Key (obrigatório)
RESEND_API_KEY=re_sua_chave_aqui

# Email de origem
FROM_EMAIL=noreply@seudominio.com

# Emails de destino (pode ter múltiplos)
TO_EMAIL=rossanahertzog@gmail.com
TO_EMAIL_2=advocacia@seudominio.com
TO_EMAIL_3=suporte@seudominio.com
```

## 🚀 Instalação das Dependências

Execute o comando para instalar a dependência do Resend:

```bash
npm install resend
```

## ✅ Testando o Sistema

1. Configure as variáveis de ambiente no `.env.local`
2. Execute o projeto: `npm run dev`
3. Acesse a página de contato
4. Preencha e envie o formulário
5. Verifique se o email foi recebido

## 🎨 Personalização

### Alterar o template do email

Edite o arquivo `app/api/contact/route.ts` para personalizar:
- Assunto do email
- Template HTML
- Campos do formulário
- Lista de emails de destino

### Adicionar validações

Você pode adicionar validações adicionais no frontend ou backend:
- Validação de formato de email
- Limite de caracteres
- Proteção contra spam

## 🔧 Troubleshooting

### Erro "API key not found"
- Verifique se a variável `RESEND_API_KEY` está configurada no `.env.local`
- Confirme se a chave está correta
- Reinicie o servidor após adicionar a variável

### Emails não chegam
- Verifique se o domínio está verificado no Resend
- Confirme se os emails de destino estão corretos
- Verifique os logs do servidor no terminal

### Erro de CORS
- O formulário usa fetch API, não deve ter problemas de CORS
- Se houver problemas, verifique a configuração do Next.js

## 💡 Vantagens de Múltiplos Emails

1. **Redundância** - Se um email falhar, outros receberão
2. **Organização** - Diferentes departamentos podem receber
3. **Backup** - Sempre terá uma cópia da mensagem
4. **Flexibilidade** - Fácil adicionar/remover emails

## 📞 Suporte

Se precisar de ajuda:
- Documentação oficial: https://resend.com/docs
- Comunidade: https://github.com/resendlabs/resend-node
- Suporte: https://resend.com/support 