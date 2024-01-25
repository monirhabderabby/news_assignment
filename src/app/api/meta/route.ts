import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const bodyData = await req.json();

  try {
    const result = await prismaDb.meta.create({
      data: bodyData,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("META_CREATE_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}
