import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-[var(--border)] px-[10px] py-[2px] font-mono text-[0.65rem] uppercase tracking-[0.15em]",
        className
      )}
    >
      {children}
    </span>
  );
}
