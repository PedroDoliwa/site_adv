// Validação de email usando regex
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validação de nome (mínimo 2 caracteres, máximo 100)
export function isValidName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100;
}

// Validação de mensagem (mínimo 10 caracteres, máximo 1000)
export function isValidMessage(message: string): boolean {
  return message.trim().length >= 10 && message.trim().length <= 1000;
}

// Proteção básica contra spam (verifica se há muitos links)
export function hasTooManyLinks(text: string): boolean {
  const linkRegex = /https?:\/\/[^\s]+/g;
  const links = text.match(linkRegex);
  return links ? links.length > 3 : false;
}

// Verifica se a mensagem contém palavras suspeitas
export function hasSpamKeywords(text: string): boolean {
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'winner', 'free money',
    'make money fast', 'work from home', 'earn money',
    'click here', 'buy now', 'limited time'
  ];
  
  const lowerText = text.toLowerCase();
  return spamKeywords.some(keyword => lowerText.includes(keyword));
}

// Validação completa do formulário
export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!isValidName(data.name)) {
    errors.push('Nome deve ter entre 2 e 100 caracteres');
  }

  if (!isValidEmail(data.email)) {
    errors.push('Email inválido');
  }

  if (!isValidMessage(data.message)) {
    errors.push('Mensagem deve ter entre 10 e 1000 caracteres');
  }

  if (hasTooManyLinks(data.message)) {
    errors.push('Mensagem contém muitos links');
  }

  if (hasSpamKeywords(data.message)) {
    errors.push('Mensagem contém conteúdo suspeito');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
} 