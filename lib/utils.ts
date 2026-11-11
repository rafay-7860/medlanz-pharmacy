import { siteConfig } from "./config";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message || siteConfig.whatsapp.defaultMessage
  );
  return `${siteConfig.whatsapp.url}?text=${text}`;
}

export function getTelUrl() {
  return `tel:${siteConfig.phone.tel}`;
}

export function getProductInquiryMessage(category: string) {
  return `Hello MEDLANZ Pharmacy, I would like to inquire about availability for ${category}. Please assist me.`;
}

export function buildInquiryClipboardText(data: {
  fullName: string;
  phone: string;
  email?: string;
  inquiryType: string;
  message: string;
}) {
  const lines = [
    "MEDLANZ Pharmacy Inquiry",
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Inquiry Type: ${data.inquiryType}`,
    `Message: ${data.message}`,
  ].filter(Boolean);

  return lines.join("\n");
}

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
