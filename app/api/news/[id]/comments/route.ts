import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);
    const body = await request.json();
    const { author, text } = body;

    if (!author || !text) {
      return NextResponse.json(
        { error: 'Autor e texto são obrigatórios' },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        author,
        text,
        timeAgo: 'agora',
        newsId,
      }
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar comentário:', error);
    return NextResponse.json(
      { error: 'Erro ao criar comentário' },
      { status: 500 }
    );
  }
}
