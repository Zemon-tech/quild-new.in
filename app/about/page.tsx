import AboutHero from "@/components/about/AboutHero";
import AboutProblem from "@/components/about/AboutProblem";
import AboutBelief from "@/components/about/AboutBelief";
import AboutWhereWeAre from "@/components/about/AboutWhereWeAre";
import AboutFounders from "@/components/about/AboutFounders";
import AboutTheCode from "@/components/about/AboutTheCode";
import AboutVision from "@/components/about/AboutVision";
import AboutClosingQuote from "@/components/about/AboutClosingQuote";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main id="about-top" className="bg-[var(--bg)]">
      <AboutHero />
      <AboutProblem />
      <AboutBelief />
      <AboutWhereWeAre />
      <AboutFounders />
      <AboutTheCode />
      <AboutVision />
      <AboutClosingQuote />
    </main>
  );
}
