import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/config";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary text-white">
      <div className="container-xl grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="[&_span]:!text-white [&_.text-muted]:!text-white/70">
            <Logo />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            Your neighborhood pharmacy in Hor Al Anz, Deira, Dubai — offering
            healthcare essentials, wellness products, and friendly assistance.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition hover:text-white focus-ring rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a
                href={getTelUrl()}
                className="inline-flex items-start gap-2 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition hover:text-white"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                WhatsApp {siteConfig.whatsapp.display}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{siteConfig.address.full}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Find Us</h3>
          <p className="mt-4 text-sm text-white/75">
            Visit MEDLANZ Pharmacy on Abu Baker Al Siddique Street, near Al
            Ansari Exchange.
          </p>
          <a
            href={siteConfig.maps.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5 !bg-primary"
          >
            Open Google Maps
          </a>
          {siteConfig.social.length > 0 ? (
            <div className="mt-6 flex gap-3">
              {siteConfig.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl flex flex-col gap-2 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Pharmacy & Medicine · Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
