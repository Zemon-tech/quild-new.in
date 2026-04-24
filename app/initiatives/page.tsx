import InitiativesHero from "@/components/initiatives/InitiativesHero";
import InitiativesIndex from "@/components/initiatives/InitiativesIndex";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives",
  description: "Programs, cohorts, research, and systems. Everything Quild is building — for serious builders in every field.",
  alternates: { canonical: "https://quild.in/initiatives" },
  openGraph: {
    title: "Initiatives | Quild",
    description: "Programs, cohorts, research, and systems. Everything Quild is building — for serious builders in every field.",
    url: "https://quild.in/initiatives",
  },
};

export default function InitiativesPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <InitiativesHero />
      <InitiativesIndex />
      {/*<InitiativesAnchors />*/}
    </main>
  );
}
