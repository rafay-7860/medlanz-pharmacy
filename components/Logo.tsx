import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export default function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 focus-ring rounded-xl",
        className
      )}
      aria-label="MEDLANZ Pharmacy Home"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary shadow-lg shadow-secondary/20">
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-transparent" />
        <svg
          viewBox="0 0 48 48"
          className="relative h-6 w-6 text-white"
          aria-hidden="true"
        >
          <rect x="20" y="8" width="8" height="32" rx="2" fill="currentColor" />
          <rect x="8" y="20" width="32" height="8" rx="2" fill="currentColor" />
          <circle cx="24" cy="24" r="3" fill="#159B72" />
        </svg>
      </span>
      {showText ? (
        <span className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold tracking-tight text-secondary group-hover:text-primary transition-colors">
            MEDLANZ
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Pharmacy
          </span>
        </span>
      ) : null}
    </Link>
  );
}
