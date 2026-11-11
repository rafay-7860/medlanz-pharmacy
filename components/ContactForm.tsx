"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, ClipboardCopy, Phone } from "lucide-react";
import { inquiryTypes } from "@/lib/config";
import {
  buildInquiryClipboardText,
  getTelUrl,
  getWhatsAppUrl,
} from "@/lib/utils";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  inquiryType: inquiryTypes[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const [copiedText, setCopiedText] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^[+\d\s()-]{8,20}$/.test(values.phone.trim())) {
      next.phone = "Enter a valid phone number.";
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.inquiryType) next.inquiryType = "Select an inquiry type.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Please enter a message (at least 10 characters).";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    const text = buildInquiryClipboardText({
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      inquiryType: form.inquiryType,
      message: form.message.trim(),
    });

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setStatus("copied");
    } catch {
      setCopiedText(text);
      setStatus("copied");
    }
  }

  const whatsappMessage = copiedText
    ? `Hello MEDLANZ Pharmacy,\n\n${copiedText}`
    : undefined;

  return (
    <div className="card-surface p-6 md:p-8">
      <h3 className="font-display text-2xl font-bold text-secondary">
        Send an Inquiry
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Fill in your details below. We will copy your message so you can paste
        it into WhatsApp or share it when you call. This form does not send
        messages to the pharmacy automatically.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-secondary">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={(e) => setForm((s) => ({ ...s, fullName: e.target.value }))}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            autoComplete="name"
            required
          />
          {errors.fullName ? (
            <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-secondary">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              autoComplete="tel"
              required
            />
            {errors.phone ? (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-secondary">
              Email Address (optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              autoComplete="email"
            />
            {errors.email ? (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="inquiryType" className="mb-1.5 block text-sm font-semibold text-secondary">
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={form.inquiryType}
            onChange={(e) =>
              setForm((s) => ({ ...s, inquiryType: e.target.value }))
            }
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            required
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.inquiryType ? (
            <p className="mt-1 text-xs text-red-600">{errors.inquiryType}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-secondary">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            className="w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            required
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-red-600">{errors.message}</p>
          ) : null}
        </div>

        <button type="submit" className="btn-primary w-full md:w-auto">
          <ClipboardCopy className="h-4 w-4" />
          Copy Inquiry & Continue
        </button>
      </form>

      {status === "copied" ? (
        <div className="mt-6 rounded-2xl border border-primary/20 bg-background-light p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-secondary">
                Inquiry copied to your clipboard
              </p>
              <p className="mt-1 text-sm text-muted">
                Continue by opening WhatsApp (message is ready) or calling the
                pharmacy. Paste the copied text if needed.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !px-4 !py-2.5 text-sm"
            >
              Open WhatsApp
            </a>
            <a href={getTelUrl()} className="btn-secondary !px-4 !py-2.5 text-sm">
              <Phone className="h-4 w-4" />
              Call Pharmacy
            </a>
          </div>
          {copiedText ? (
            <pre className="mt-4 overflow-x-auto rounded-xl bg-white p-3 text-xs text-muted ring-1 ring-border whitespace-pre-wrap">
              {copiedText}
            </pre>
          ) : null}
        </div>
      ) : null}

      {status === "error" ? (
        <p className="mt-4 text-sm text-red-600">
          Please correct the highlighted fields and try again.
        </p>
      ) : null}
    </div>
  );
}
