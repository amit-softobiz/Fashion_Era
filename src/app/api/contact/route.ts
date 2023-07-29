import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    console.log(reqBody);
    return NextResponse.json({
      message: "User created sucessfully",
      data: reqBody,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
