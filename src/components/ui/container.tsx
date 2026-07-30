import { cx } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-content px-6 md:px-10", className)}>
      {children}
    </div>
  );
}
