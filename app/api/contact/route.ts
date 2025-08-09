import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend apenas se a API key estiver disponível
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se o Resend está configurado
    if (!resend) {
      console.error('Resend não configurado - API key não encontrada');
      return NextResponse.json(
        { error: 'Serviço de email não configurado' },
        { status: 500 }
      );
    }

    // Lista de emails de destino (pode ter múltiplos)
    const destinationEmails: string[] = [
      process.env.TO_EMAIL || 'rhadv.torres@gmail.com', // Email principal
      process.env.TO_EMAIL_2, // Email secundário (opcional)
    ].filter((email): email is string => Boolean(email)); // Remove emails vazios e garante tipo string

    // Enviar email usando Resend
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Site Advocacia <noreply@seudominio.com>',
      to: destinationEmails,
      subject: `Nova mensagem de ${name} - Site Advocacia`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">Nova mensagem do site</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Esta mensagem foi enviada através do formulário de contato do site.
          </p>
        </div>
      `,
      reply_to: email, // Permite responder diretamente ao cliente
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem. Tente novamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 