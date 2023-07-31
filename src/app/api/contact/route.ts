import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const response = await axios.post("localhost:3000/contacts", reqBody);
    console.log(reqBody);
    return NextResponse.json({
      message: "User created sucessfully",
      data: reqBody,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
