import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const bodyData = await req.json();

  try {
    const result = await prismaDb.comment.create({
      data: bodyData,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("COMMENT_CREATE_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}

export async function GET(req: Request) {
  const urlSearchParams = new URL(req.url).searchParams;
  const newsId = urlSearchParams.get("newsId");

  try {
    const result = await prismaDb.comment.findMany({
      where: {
        newsId: Number(newsId),
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("NEWS_GET_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}
