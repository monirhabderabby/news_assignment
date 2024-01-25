import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const bodyData = await req.json();

  try {
    const result = await prismaDb.subscription.create({
      data: bodyData,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    // console.log("SUBSCRIPTION_CREATE_ERROR", error.message, "fsdf");
    if (
      error.message.includes(
        "Unique constraint failed on the constraint: `subscription_email_key`"
      )
    ) {
      return NextResponse.json("Detect duplicate subscription!", {
        status: 500,
      });
    }
    return NextResponse.json(error.message, { status: 500 });
  }
}
