import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { newsId: number } }
) {
  try {
    const result = await prismaDb.news.findUnique({
      where: {
        id: Number(params.newsId),
      },
      include: {
        categories: true,
        user: true,
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("NEWS_GET_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}
