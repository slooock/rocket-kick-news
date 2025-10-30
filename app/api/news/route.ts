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
