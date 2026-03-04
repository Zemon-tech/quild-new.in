import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 py-24">
      <Skeleton className="h-px w-full bg-black/[0.06]" />
    </div>
  );
}
