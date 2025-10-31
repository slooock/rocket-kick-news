import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);

    const news = await prisma.news.findUnique({
      where: { id: newsId },
      include: {
        comments: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!news) {
      return NextResponse.json(
        { error: 'Notícia não encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error('Erro ao buscar notícia:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar notícia' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const parsedId = parseInt(id);
    const body = await request.json();
    const { title, content, category, image, excerpt, timeAgo } = body;

    const dataToUpdate: { [key: string]: any } = {};
    if (title) dataToUpdate.title = title;
    if (content) dataToUpdate.content = content;
    if (category) dataToUpdate.category = category;
    if (image) dataToUpdate.image = image;
    if (excerpt) dataToUpdate.excerpt = excerpt;
    if (timeAgo) dataToUpdate.timeAgo = timeAgo;

    const updatedNews = await prisma.news.update({
      where: { id: parsedId },
      data: dataToUpdate,
    });

    return NextResponse.json(updatedNews);
  } catch (error) {
    console.error("Error updating news:", error);
    return NextResponse.json(
      { error: "Error updating news" },
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

    await prisma.news.delete({
      where: { id: newsId },
    });

    return NextResponse.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error("Error deleting news:", error);
    return NextResponse.json(
      { error: "Error deleting news" },
      { status: 500 }
    );
  }
}
