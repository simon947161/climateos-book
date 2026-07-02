import fs from "node:fs";
import { NextResponse } from "next/server";
import { getTorchAndHorizonPdfPath, hasTorchAndHorizonPdf } from "@/lib/books";

export function GET() {
  if (!hasTorchAndHorizonPdf()) {
    return new NextResponse("PDF not found", { status: 404 });
  }

  const pdf = fs.readFileSync(getTorchAndHorizonPdfPath());

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="torch-and-horizon-v1.pdf"',
    },
  });
}
