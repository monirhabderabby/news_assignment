import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { page: string } }
) {
  try {
    const result = await prismaDb.meta.findFirst({
      where: {
        page: params.page!,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.log("META_GET_ERROR", error);
    return NextResponse.json("Internal Server Error!");
  }
}
