import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const result = await prismaDb.socials.create({
      data: body,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("SOCIAL_CREATE_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}

export async function GET() {
  try {
    const result = await prismaDb.socials.findUnique({
      where: {
        id: 1,
      },
      select: {
        facebook: true,
        instagram: true,
        twitter: true,
        youtube: true,
        id: true,
      },
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("SOCIAL_GET_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}
