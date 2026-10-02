import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, projectType } = body ?? {};
    if (!name || !email || !phone || !projectType) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const lead = await prisma.estimateRequest.create({
      data: {
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        phone: String(phone).slice(0, 50),
        projectAddress: body.projectAddress ? String(body.projectAddress).slice(0, 300) : null,
        projectType: String(projectType).slice(0, 100),
        approxBudget: body.approxBudget ? String(body.approxBudget).slice(0, 50) : null,
        desiredStart: body.desiredStart ? String(body.desiredStart).slice(0, 100) : null,
        description: body.description ? String(body.description).slice(0, 4000) : null,
        source: "website_estimate_form",
      },
    });

    // Optional: forward a notification email if RESEND_API_KEY is configured.
    // Left unimplemented intentionally — wiring a transactional email
    // provider is a quick follow-up once an API key is available. The lead
    // is always saved to the database regardless.

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("Failed to save estimate request:", err);
    return NextResponse.json(
      { error: "Unable to save your request right now." },
      { status: 500 }
    );
  }
}
