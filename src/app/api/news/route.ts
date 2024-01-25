import { prismaDb } from "@/lib/db";
import { newsType } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const result = await prismaDb.news.create({
      data: body,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("NEWS_CREATE_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}

export async function GET(req: Request) {
  const urlSearchParams = new URL(req.url).searchParams;
  const type = urlSearchParams.get("type");
  const cat = urlSearchParams.get("category");
  const category = cat?.split("_").join(" ");

  try {
    const result = await prismaDb.news.findMany({
      where: {
        type: type as newsType,
        AND: {
          categories: {
            name: category,
          },
        },
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
