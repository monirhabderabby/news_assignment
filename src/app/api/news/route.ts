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
  const whereCondition: any = {};

  const urlSearchParams = new URL(req.url).searchParams;
  const type = urlSearchParams.get("type");
  const cat = urlSearchParams.get("category");
  const category = cat?.split("_").join(" ");
  const searchText = urlSearchParams.get("search");

  // Handle type condition
  if (type) {
    whereCondition.type = type as newsType;
  }

  // Handle category condition
  if (category) {
    whereCondition.categories = {
      name: category,
    };
  }

  // Handle title condition
  if (searchText) {
    whereCondition.title = {
      contains: searchText,
    };
  }

  try {
    const result = await prismaDb.news.findMany({
      where: whereCondition,
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
