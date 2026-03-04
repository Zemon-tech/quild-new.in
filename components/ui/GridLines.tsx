export default function GridLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="mx-auto grid h-full w-full max-w-[1280px] grid-cols-12 px-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="relative h-full"
          >
            <div className="absolute right-0 top-0 h-full w-px bg-black/[0.04]" />
          </div>
        ))}
      </div>
    </div>
  );
}
