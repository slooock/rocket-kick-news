import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "8");
    const offset = parseInt(searchParams.get("offset") || "0");

    const where = category && category !== "all" ? { category } : {};

    const [news, total] = await Promise.all([
      prisma.news.findMany({
        where,
        include: { _count: { select: { comments: true } } },
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.news.count({ where })
    ]);

    return NextResponse.json({ news, total, hasMore: offset + limit < total });
  } catch (error) {
    console.error("Erro:", error);
    return NextResponse.json({ error: "Erro ao buscar notícias" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, category, image, excerpt, timeAgo } = body;

    if (!title || !content || !category || !image || !excerpt || !timeAgo) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const news = await prisma.news.create({
      data: {
        title,
        content,
        category,
        image,
        excerpt,
        timeAgo,
      },
    });

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error("Error creating news:", error);
    return NextResponse.json({ error: "Error creating news" }, { status: 500 });
  }
}
