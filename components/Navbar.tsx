"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { siteConfig } from "@/lib/config";
import { cn, getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
      )}
    >
      <div className="container-xl flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-semibold transition focus-ring",
                  active
                    ? "bg-accent text-secondary"
                    : "text-muted hover:bg-background-light hover:text-secondary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={getTelUrl()} className="btn-secondary !px-4 !py-2.5 text-sm">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-4 !py-2.5 text-sm"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-secondary focus-ring lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <nav className="container-xl flex flex-col gap-1 py-4" aria-label="Mobile">
              {siteConfig.navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-semibold",
                      active
                        ? "bg-accent text-secondary"
                        : "text-muted hover:bg-background-light hover:text-secondary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-3 grid gap-2">
                <a href={getTelUrl()} className="btn-secondary w-full">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
