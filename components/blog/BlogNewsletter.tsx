"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BlogNewsletter() {
  return (
    <section
      style={{
        background: "var(--void)",
        padding: "5rem 6rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4rem",
      }}
    >
      <div style={{ maxWidth: "480px" }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "0.62rem",
            color: "var(--sage)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          THE QUILD DISPATCH
        </div>
        <h3
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: "clamp(1.8rem, 2.5vw, 2.8rem)",
            color: "#FFFFFF",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
          }}
        >
          Ideas, builds, and stories
          <br />
          from inside the community.
        </h3>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex",
          gap: 0,
          flex: "0 0 auto",
          width: "420px",
        }}
      >
        <Input
          type="email"
          placeholder="you@domain.com"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRight: "none",
            borderRadius: 0,
            color: "#FFFFFF",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: "0.95rem",
            padding: "0.875rem 1rem",
            height: "auto",
            flex: 1,
          }}
        />
        <Button
          type="submit"
          style={{
            background: "var(--sage)",
            border: "none",
            borderRadius: 0,
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#FFFFFF",
            padding: "0.875rem 1.5rem",
            height: "auto",
            cursor: "pointer",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          JOIN →
        </Button>
      </form>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 3rem 1.5rem !important;
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          form {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
