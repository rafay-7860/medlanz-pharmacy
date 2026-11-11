"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MEDLANZ Pharmacy on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 transition hover:scale-105 focus-ring md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
    </a>
  );
}
