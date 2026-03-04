import CohortTimeline from "@/components/sections/CohortTimeline";
import FAQ from "@/components/sections/FAQ";
import FooterCTA from "@/components/sections/FooterCTA";
import Hero from "@/components/sections/Hero";
import HonestStatement from "@/components/sections/HonestStatement";
import Manifesto from "@/components/sections/Manifesto";
import WhatYouGet from "@/components/sections/WhatYouGet";

export default function Home() {
  return (
    <>
      <Hero />
      <HonestStatement />
      <Manifesto />
      <WhatYouGet />
      <CohortTimeline />
      <FAQ />
      <FooterCTA />
    </>
  );
}
