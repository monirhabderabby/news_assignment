import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const result = await prismaDb.categories.create({
      data: body,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("CATEGORY_CREATE_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}

export async function GET() {
  try {
    const result = await prismaDb.categories.findMany();

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("CATEGORY_GET_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}
