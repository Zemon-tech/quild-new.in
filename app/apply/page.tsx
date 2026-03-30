"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cohorts } from "@/lib/data/cohorts";
import { useIsMobile } from "@/hooks/use-mobile";

type Step = 1 | 2 | 3;

const CAROUSEL_SCREENS = [
  {
    image: "/footer.png",
    title: "CAPTURING MOMENTS,\nCREATING MEMORIES"
  },
  {
    image: "/careers.png",
    title: "BUILDING THE NEXT\nGREAT GENERATION"
  },
  {
    image: "/about.png",
    title: "FINDING THE BUILDERS\nWHO STAND OUT"
  }
];

export default function ApplyPage() {
  const current = useMemo(
    () => cohorts?.find((c) => c.status === "upcoming") ?? { id: 1, city: "SF", dates: "TBD" },
    []
  );

  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const isMobile = useIsMobile();

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % CAROUSEL_SCREENS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] font-sans flex items-center justify-center p-0 lg:p-4 shrink-0 grow block">
      <div
        className="w-full h-full min-h-screen lg:min-h-[92vh] flex flex-col lg:flex-row shadow-2xl overflow-hidden"
        style={isMobile ? { borderRadius: 0 } : { borderRadius: 0, border: "1px solid var(--border)", background: "var(--bg)" }}
      >

        {/* Left Side: Image / Hero */}
        <div className="hidden lg:flex w-full lg:w-[69%] relative overflow-hidden bg-[var(--void)] flex-col justify-between p-10 min-h-[750px] transition-all border-r border-white/10">

          {/* Background Images Crossfade */}
          <div className="absolute inset-0 z-0">
            {CAROUSEL_SCREENS.map((screen, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: activeScreenIndex === idx ? 1 : 0 }}
              >
                <Image
                  src={screen.image}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Top Row: Logo & Back Button */}
          <div className="relative z-20 flex justify-between items-start w-full">
            <Link href="/" className="flex items-center gap-3 decoration-transparent">
              <Image src="/logo.svg" alt="Quild" width={32} height={32} className="brightness-0 invert h-6 w-6 relative top-[2px]" />
              <span className="font-display text-[1.2rem] font-semibold tracking-[0.05em] text-white">Quild</span>
            </Link>

            <Link href="/">
              <Button variant="outline" className="rounded-none border border-white/40 text-white bg-transparent hover:bg-white hover:text-black font-mono text-[0.65rem] uppercase tracking-[0.12em] h-auto py-2 px-4 transition-all">
                BACK TO HUB &rarr;
              </Button>
            </Link>
          </div>

          {/* Bottom Area */}
          <div className="relative z-20 flex flex-col gap-8 pb-4">
            <div className="relative min-h-[140px]">
              {CAROUSEL_SCREENS.map((screen, idx) => (
                <div
                  key={idx}
                  className="absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out"
                  style={{
                    opacity: activeScreenIndex === idx ? 1 : 0,
                    transform: `translateY(${activeScreenIndex === idx ? '0px' : '15px'})`,
                    pointerEvents: activeScreenIndex === idx ? 'auto' : 'none',
                  }}
                >
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-white/50 mb-6">
                    0{idx + 1} / 03 — IN FOCUS
                  </div>
                  <h1
                    className="font-display font-semibold leading-[0.9] tracking-[-0.02em] text-white whitespace-pre-line"
                    style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", textShadow: "0 4px 40px rgba(0, 0, 0, 0.4)" }}
                  >
                    {screen.title}
                  </h1>
                </div>
              ))}
            </div>

            {/* Pagination Lines */}
            <div className="flex gap-3 items-center mt-2 border-t border-white/20 pt-6">
              {CAROUSEL_SCREENS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreenIndex(idx)}
                  className="h-[2px] transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    width: activeScreenIndex === idx ? "40px" : "20px",
                    backgroundColor: activeScreenIndex === idx ? "#FFFFFF" : "rgba(255,255,255,0.2)"
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-[31%] min-w-[380px] flex justify-center p-8 lg:p-12 xl:p-14 relative flex-col bg-[var(--bg)] overflow-y-auto border-l border-[var(--border)]">

          {/* Mobile Back Button (Only shows on mobile) */}
          <div className="absolute top-6 right-6 lg:hidden z-50">
            <Link href="/">
              <Button variant="outline" size="sm" className="rounded-none border-white/20 text-white bg-transparent hover:bg-white/10 h-10 w-10 p-0 flex items-center justify-center">
                ✕
              </Button>
            </Link>
          </div>

          {/* Added a subtle branding on mobile */}
          <div className="w-full mb-12 flex lg:hidden items-center justify-start border-b border-[var(--border)] pb-6">
            <Image src="/logo.svg" alt="Quild" width={24} height={24} className="brightness-0" />
            <span className="ml-3 font-display text-[1.1rem] font-semibold tracking-[0.12em] text-black">quild</span>
          </div>

          <div className="w-full max-w-[420px] mx-auto space-y-10">
            {submitted ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full justify-center min-h-[50vh]">
                <div className="mb-8 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--sage)]">
                  SYSTEM / STATUS: 200 OK
                </div>
                <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-[1] text-[var(--ink)] mb-6">
                  Access<br />Granted.
                </h2>
                <p className="text-[var(--muted)] text-[1rem] leading-[1.6] mb-10 font-sans border-l border-[var(--border)] pl-4 py-1">
                  Your identity has been verified and registered on the network. A terminal link is waiting in your inbox.
                </p>
                <Link href="/">
                  <Button className="w-full rounded-none bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--ink)]/90 h-[52px] font-mono text-[0.75rem] uppercase tracking-[0.1em] transition-all">
                    ENTER MAINFRAME →
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                <div className="mb-10">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[var(--muted)] mb-4 h-[12px]">
                    {!isLogin && `STEP 0${step} / 03`}
                  </div>
                  <h2 className="font-display text-[2.5rem] font-semibold text-[var(--ink)] mb-3 leading-[1.05] tracking-tight">
                    {isLogin ? "Welcome." : step === 1 ? "Initialize." : step === 2 ? "Specify." : "Commit."}
                  </h2>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.05em] text-[var(--muted)] leading-relaxed border-l border-[var(--border)] pl-3">
                    {step === 1 ? (
                      <>
                        {isLogin ? "NEW SESSION? " : "EXISTING USER? "}
                        <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-[var(--ink)] underline decoration-[var(--border)] hover:decoration-[var(--ink)] underline-offset-4 transition-colors">
                          {isLogin ? "REQ ACCESS" : "AUTH NOW"}
                        </button>
                      </>
                    ) : step === 2 ? (
                      `TRANSMIT DIRECTIVES ALONG WITH BUILDER PROFILE`
                    ) : (
                      `VERIFY SYNC DATA. SUBMIT TO NETWORK.`
                    )}
                  </p>
                </div>

                {step === 1 && (
                  <>
                    {isLogin ? (
                      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Identity (Email)</label>
                          <Input required type="email" placeholder="void@quild.community" className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 h-[48px] px-4 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all text-[0.9rem] font-sans" />
                        </div>

                        <div className="space-y-1.5 relative w-full">
                          <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Passkey</label>
                          <Input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 h-[48px] px-4 pr-12 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all w-full text-[0.9rem] font-mono"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-[28px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>

                        <div className="pt-4">
                          <Button type="submit" className="w-full rounded-none bg-[var(--sage)] hover:bg-[var(--sage)] border border-[var(--sage)] hover:opacity-90 text-white h-[48px] font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-all">
                            AUTHENTICATE →
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                            <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">First Name</label>
                            <Input required placeholder="Jane" className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 h-[48px] px-4 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all text-[0.9rem] font-sans" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Last Name</label>
                            <Input required placeholder="Doe" className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 h-[48px] px-4 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all text-[0.9rem] font-sans" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Identity (Email)</label>
                          <Input required type="email" placeholder="void@quild.community" className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 h-[48px] px-4 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all text-[0.9rem] font-sans" />
                        </div>

                        <div className="space-y-1.5 relative w-full">
                          <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Passkey</label>
                          <Input
                            required
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 h-[48px] px-4 pr-12 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all w-full text-[0.9rem] font-mono"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-[28px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>

                        <div className="flex items-center space-x-3 pt-2 pb-2">
                          <Checkbox id="terms" required className="rounded-none border-[var(--border)] data-[state=checked]:bg-[var(--sage)] data-[state=checked]:border-[var(--sage)] w-4 h-4 flex items-center justify-center shrink-0" />
                          <label htmlFor="terms" className="font-mono text-[0.65rem] tracking-[0.05em] uppercase text-[var(--muted)] leading-none cursor-pointer flex items-center gap-1 mt-[2px]">
                            Accept
                            <Dialog>
                              <DialogTrigger className="text-[var(--ink)] underline decoration-[var(--border)] hover:decoration-[var(--ink)] underline-offset-4 transition-colors">
                                Policy & Rules
                              </DialogTrigger>
                              <DialogContent className="border border-[var(--border)] text-[var(--ink)] sm:max-w-[425px] overflow-hidden rounded-none shadow-2xl" data-bg="var(--bg)" data-noise="url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')" data-blend="overlay">
                                <DialogHeader>
                                  <DialogTitle className="font-display tracking-[0.05em] text-xl">NETWORK POLICIES</DialogTitle>
                                  <DialogDescription className="font-mono text-[0.7rem] uppercase tracking-[0.05em] text-[var(--muted)] mt-2">
                                    [ STRICT GOVERNANCE PROTOCOL ACTIVE ]
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="font-sans text-[0.95rem] leading-[1.6] text-[var(--muted)] space-y-6 mt-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                                  <p>
                                    <strong className="text-[var(--ink)] font-mono text-[0.7rem] uppercase tracking-[0.1em] block mb-1">01 / ACCEPTANCE</strong>
                                    By bridging to this network, you submit to all parameters formulated within.
                                  </p>
                                  <p>
                                    <strong className="text-[var(--ink)] font-mono text-[0.7rem] uppercase tracking-[0.1em] block mb-1">02 / DATA PROTOCOL</strong>
                                    Inputs drop firmly into our encrypted stores. No leaks. No telemetry swaps without dual-consent.
                                  </p>
                                  <p>
                                    <strong className="text-[var(--ink)] font-mono text-[0.7rem] uppercase tracking-[0.1em] block mb-1">03 / CONDUCT</strong>
                                    Build, do not destroy. Noise generators will be forcefully disconnected.
                                  </p>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </label>
                        </div>

                        <Button type="submit" className="w-full rounded-none bg-[var(--ink)] hover:bg-[var(--ink)]/90 text-[var(--bg)] h-[48px] font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-all">
                          CONTINUE (1/3) →
                        </Button>
                      </form>
                    )}

                    <div className="relative flex items-center py-6">
                      <div className="flex-grow border-t border-[var(--border)]"></div>
                      <span className="flex-shrink-0 mx-4 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--muted)]/50">EXTERNAL AUTH LAYER</span>
                      <div className="flex-grow border-t border-[var(--border)]"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button type="button" variant="outline" className="w-full text-[var(--ink)] bg-transparent border-[var(--border)] hover:bg-[var(--ink)]/5 rounded-none h-[44px] transition-all font-mono text-[0.65rem] uppercase tracking-[0.1em]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-[14px] h-[14px] mr-2 shrink-0">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z" />
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        <span className="truncate tracking-[0.1em]">GOOGLE</span>
                      </Button>
                      <Button type="button" variant="outline" className="w-full text-[var(--ink)] bg-transparent border-[var(--border)] hover:bg-[var(--ink)]/5 rounded-none h-[44px] transition-all font-mono text-[0.65rem] uppercase tracking-[0.1em]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px] mr-1 shrink-0">
                          <path d="M16.3653 10.1558C16.3862 7.42555 18.6083 6.11054 18.7067 6.04944C17.4475 4.20573 15.5188 3.92135 14.8687 3.84078C13.1834 3.66812 11.5363 4.8364 10.6865 4.8364C9.84307 4.8364 8.44185 3.85694 7.03437 3.88567C5.23253 3.91136 3.56515 4.93988 2.63737 6.55928C0.751325 9.85196 2.15509 14.7176 3.99308 17.3828C4.89311 18.6791 5.95254 20.1416 7.33306 20.086C8.67814 20.0267 9.18331 19.2059 10.8066 19.2059C12.4285 19.2059 12.8943 20.086 14.2829 20.0573C15.7118 20.0267 16.6215 18.7366 17.5144 17.4367C18.5492 15.9143 18.9804 14.4368 19 14.3649C18.9669 14.3512 16.3429 13.33 16.3653 10.1558ZM13.8837 2.45493C14.6309 1.54947 15.127 0.288599 14.9905 -0.966309C13.914 0.0768469 12.6033 0.750133 11.823 1.68414C11.1341 2.50285 10.5362 3.79152 10.7042 5.01357C11.9056 5.10541 13.1203 4.38072 13.8837 2.45493Z" />
                        </svg>
                        <span className="truncate tracking-[0.1em]">APPLE</span>
                      </Button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Target Build</label>
                      <Textarea required placeholder="Describe what you are building briefly..." className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 min-h-[110px] p-4 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all resize-none text-[0.9rem] font-sans" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Data Links (Optional)</label>
                      <Input placeholder="GitHub / Portfolio" className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 h-[48px] px-4 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all text-[0.9rem] font-sans" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--muted)] block">Motive (Why Quild?)</label>
                      <Textarea required placeholder="Tell us why." className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] placeholder:text-[var(--muted)]/30 min-h-[90px] p-4 focus-visible:ring-1 focus-visible:ring-[var(--ink)] focus-visible:border-[var(--ink)] transition-all resize-none text-[0.9rem] font-sans" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8 pt-4">
                      <Button type="button" variant="outline" className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] hover:bg-[var(--ink)]/5 h-[48px] transition-all font-mono text-[0.7rem] uppercase tracking-[0.1em] px-0" onClick={() => setStep(1)}>
                        &larr; REVERT
                      </Button>
                      <Button type="submit" className="rounded-none bg-[var(--ink)] hover:bg-[var(--ink)]/90 text-[var(--bg)] h-[48px] font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-all px-0">
                        CONTINUE (2/3) &rarr;
                      </Button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <div className="border border-[var(--border)] bg-[var(--bg)] p-6 border-l-2 border-l-[var(--sage)]">
                      <h3 className="text-[var(--ink)] font-display text-[1.4rem] tracking-[0.02em] mb-3 leading-none">Final Check.</h3>
                      <p className="text-[0.95rem] leading-[1.65] text-[var(--muted)] font-sans">
                        You are about to submit your application profile to the Quild network. Review cautiously. Once committed, the registry is sealed.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Button type="button" variant="outline" className="rounded-none bg-transparent border-[var(--border)] text-[var(--ink)] hover:bg-[var(--ink)]/5 h-[48px] transition-all font-mono text-[0.7rem] uppercase tracking-[0.1em] px-0" onClick={() => setStep(2)}>
                        &larr; REVERT
                      </Button>
                      <Button type="button" className="rounded-none bg-[var(--sage)] border border-[var(--sage)] text-white hover:bg-[var(--sage)] hover:opacity-90 h-[48px] font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-all px-0" onClick={() => setSubmitted(true)}>
                        EXECUTE ROOT ACCESS
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Override browser autocomplete background specifically on this page theme */
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px var(--bg) inset !important;
            -webkit-text-fill-color: var(--ink) !important;
            transition: background-color 5000s ease-in-out 0s;
        }
      `}} />
    </div>
  );
}
