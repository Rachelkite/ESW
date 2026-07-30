import Link from "next/link";
import { cx } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline-light" | "outline-dark" | "text";
  className?: string;
};

const variants = {
  solid:
    "bg-royal text-paper hover:bg-royal-deep border border-royal hover:border-royal-deep",
  "outline-light":
    "border border-paper/40 text-paper hover:border-paper hover:bg-paper/5",
  "outline-dark":
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
  text: "text-royal hover:text-royal-deep underline underline-offset-4 decoration-royal/40 hover:decoration-royal-deep",
};

export function Button({ href, children, variant = "solid", className }: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (variant === "text") {
    return (
      <Link
        href={href}
        {...externalProps}
        className={cx(
          "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300",
          variants.text,
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      {...externalProps}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-[2px] px-7 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.12em] transition-all duration-300 ease-signature",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
