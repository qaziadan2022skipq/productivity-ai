import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { industry, role, startPrompt, message } = body;

    if (!userId) {
      return new NextResponse("Unauthorized User", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key is Invalid", { status: 500 });
    }
    if (!industry) {
      return new NextResponse("Job role is required", { status: 400 });
    }
    if (!role) {
      return new NextResponse("Job skills are required", { status: 400 });
    }
    if (!startPrompt) {
      return new NextResponse("Creativity is required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
                      You are Powerful assistant and you are ${industry} specialist
                      your role is ${role}
                      Now be professional and skilled ${role} and do ${startPrompt}
        ${message}
                      `,
        },
        // { role: "user", content: messages[0].content },
      ],
    });
    console.log(response);
    return NextResponse.json(response.choices[0].message.content, { status: 200 });
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
