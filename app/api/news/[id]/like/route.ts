import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);

    const news = await prisma.news.update({
      where: { id: newsId },
      data: {
        likes: {
          increment: 1
        }
      }
    });

    return NextResponse.json({ likes: news.likes });
  } catch (error) {
    console.error('Erro ao dar like:', error);
    return NextResponse.json(
      { error: 'Erro ao dar like' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);

    const news = await prisma.news.update({
      where: { id: newsId },
      data: {
        likes: {
          decrement: 1
        }
      }
    });

    return NextResponse.json({ likes: news.likes });
  } catch (error) {
    console.error('Erro ao remover like:', error);
    return NextResponse.json(
      { error: 'Erro ao remover like' },
      { status: 500 }
    );
  }
}
