import AboutHero from "@/components/about/AboutHero";
import AboutProblem from "@/components/about/AboutProblem";
import AboutBelief from "@/components/about/AboutBelief";
import AboutWhereWeAre from "@/components/about/AboutWhereWeAre";
import AboutFounders from "@/components/about/AboutFounders";
import AboutTheCode from "@/components/about/AboutTheCode";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutVision from "@/components/about/AboutVision";
import AboutClosingQuote from "@/components/about/AboutClosingQuote";
import AboutCTA from "@/components/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Quild, our mission, vision, and the founders building a community for serious builders, engineers, and students in AI.",
  alternates: { canonical: "https://quild.in/about" },
  openGraph: {
    title: "About Us | Quild",
    description: "Learn about Quild, our mission, vision, and the founders building a community for serious builders, engineers, and students in AI.",
    url: "https://quild.in/about",
  },
};

export default function AboutPage() {
  return (
    <main id="about-top" className="bg-[var(--bg)]">
      <AboutHero />
      <AboutProblem />
      <AboutBelief />
      <AboutWhereWeAre />
      <AboutTheCode />
      <AboutPhilosophy />
      <AboutVision />
      <AboutClosingQuote />
    </main>
  );
}
