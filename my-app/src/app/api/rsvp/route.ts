import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, allergies, transportSaturday } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Ogiltiga fält" },
        { status: 400 }
      );
    }

    await prisma.rsvp.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        allergies: allergies || null,
        transportSaturday: transportSaturday ?? false,
        },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Något gick fel, försök igen senare." },
      { status: 500 }
    );
  }
}

