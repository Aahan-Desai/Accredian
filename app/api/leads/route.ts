import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LeadFormData } from "@/lib/types";

type StoredLead = LeadFormData & {
  id: string;
  createdAt: string;
};

const leadsFile = path.join(process.cwd(), "data", "leads.json");

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

    const storedLead: StoredLead = {
      ...lead,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };

    await mkdir(path.dirname(leadsFile), { recursive: true });

    let existingLeads: StoredLead[] = [];
    try {
      const file = await readFile(leadsFile, "utf8");
      existingLeads = JSON.parse(file) as StoredLead[];
    } catch {
      existingLeads = [];
    }

    await writeFile(leadsFile, JSON.stringify([storedLead, ...existingLeads], null, 2));

    return NextResponse.json({ success: true, leadId: storedLead.id }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to process lead submission." },
      { status: 500 }
    );
  }
}
