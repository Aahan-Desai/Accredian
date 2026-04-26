import { NextResponse } from "next/server";
import type { LeadFormData } from "@/lib/types";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadFormData>;
    const lead: LeadFormData = {
      name: body.name?.trim() ?? "",
      email: body.email?.trim() ?? "",
      company: body.company?.trim() ?? "",
      phone: body.phone?.trim() ?? ""
    };

    if (!lead.name || !lead.company || !lead.phone || !isValidEmail(lead.email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name, email, company, and phone." },
        { status: 400 }
      );
    }

    const leadId = crypto.randomUUID();

    return NextResponse.json({ success: true, leadId }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to process lead submission." },
      { status: 500 }
    );
  }
}