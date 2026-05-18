import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Eye, QrCode, CheckCircle2, Play, Shuffle, BellRing, Search, Ticket, Bell, Building2, MapPin, Send } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/medikue-logo.png";
import { LiveQueueCard } from "@/components/live-queue-card";
import { StoreBadges } from "@/components/app-store-badges";
import { FeatureQueueShowcase } from "@/components/feature-queue-showcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medikue | Effortless Hospital Queue Orchestration" },
      { name: "description", content: "Smart OP booking and real-time queue intelligence. Live in life, not in line." },
      { property: "og:title", content: "Medikue | Effortless Hospital Queue Orchestration" },
      { property: "og:description", content: "Smart OP booking and real-time queue intelligence." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-[#1a1c1e]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-[#e1e5ea] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Medikue" className="h-9 w-auto" />
            <span className="text-xl font-bold tracking-tight text-[#0052cc] lowercase">medikue</span>
          </a>
          <nav className="flex items-center gap-8 text-sm font-medium text-[#41474d]">
            <a href="#features" className="transition-colors hover:text-[#0052cc]">Features</a>
            <a href="#contact" className="transition-colors hover:text-[#0052cc]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Skip Hospital <br />
              <span className="text-[#0052cc]">Waiting Lines</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#41474d]">
              "Live in life, not in line." Reimagining healthcare accessibility through high-performance digital orchestration. Smart OP booking & real-time queue intelligence.
            </p>
            <StoreBadges className="mt-8" />
          </div>

          <LiveQueueCard />
        </div>
      </section>

      {/* Features — queue pipeline */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Smart OP Management Suite</h2>
          <p className="mt-4 text-[#41474d]">The intelligent orchestration engine that syncs online bookings, physical walk-ins, and real-time doctor availability.</p>
        </div>
        <FeatureQueueShowcase />
      </section>

            {/* Live Intelligence */}
      <section className="bg-[#f0f7ff] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052cc]">Live Intelligence</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Live Queue Intelligence</h2>
            <p className="mt-4 text-[#41474d]">Patients receive persistent updates on their mobile device, ensuring they no longer wait in infectious, crowded rooms.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Live Queue Sync: Sub-300ms latency.",
                "Smart Prediction: AI-driven wait estimates.",
                "Integrated Dashboards: For doctors and staff.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#1a1c1e]">
                  <CheckCircle2 className="h-5 w-5 text-[#0052cc] mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl shadow-[#0052cc]/5">
            <h3 className="text-lg font-semibold">Traditional OP vs Medikue</h3>
            <div className="mt-6 overflow-hidden rounded-xl border border-[#e1e5ea]">
              <table className="w-full text-sm">
                <thead className="bg-[#f0f4f8] text-left text-xs uppercase tracking-wider text-[#41474d]">
                  <tr>
                    <th className="px-4 py-3">Metric</th>
                    <th className="px-4 py-3">Traditional</th>
                    <th className="px-4 py-3">Medikue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e1e5ea]">
                  {[
                    ["Waiting", "Physical Crowding", "Virtual Queue"],
                    ["Visibility", "Zero Transparency", "Live EWT Tracking"],
                    ["Flow", "Manual Coordination", "Automated Real-Time"],
                    ["Comms", "Verbal Shout-Outs", "Push Notifications"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className="px-4 py-3 text-[#71787e]">{row[1]}</td>
                      <td className="px-4 py-3 font-semibold text-[#0052cc]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 rounded-xl bg-[#d9e8ff] p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#003e99]">Efficiency Boost</div>
              <p className="mt-1 text-sm font-medium text-[#001a41]">"Reduces manual reception coordination by 65%."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Queue Control */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Full Queue Control</h2>
          <p className="mt-4 text-[#41474d]">Powerful tools for doctors and staff to orchestrate patient flow in real time.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { Icon: Play, title: "Active Session Manager", desc: "Start, pause, or complete consultations with single-click precision." },
            { Icon: Shuffle, title: "Drag-and-Drop Prioritization", desc: "Easily adjust queue order for emergency cases or priority patients." },
            { Icon: BellRing, title: "Real-Time Sync", desc: "Instantly track session volume and efficiency for staff performance." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-[#111B21] p-6 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#adcaff]">
                <f.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f0f7ff] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0052cc]">How It Works</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Simple. Smart. Real-Time.</h2>
            <p className="mt-4 text-[#41474d]">Six effortless steps from search to consultation — no queues, no paperwork.</p>
          </div>
          <div className="relative mt-16">
            {/* connector line */}
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-transparent via-[#0052cc]/30 to-transparent md:block" />
            <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { Icon: Search, title: "Search", desc: "Find your hospital & doctor" },
                { Icon: Calendar, title: "Book", desc: "Pick a slot in seconds" },
                { Icon: Ticket, title: "Token", desc: "Get your digital token" },
                { Icon: Eye, title: "Track", desc: "Watch the queue live" },
                { Icon: QrCode, title: "Check In", desc: "QR code walk-in registration" },
                { Icon: Bell, title: "Notify", desc: "Smart alerts before your turn" },
              ].map((step, i) => (
                <div key={step.title} className="group relative flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#0052cc]/20 blur-xl transition-all duration-300 group-hover:bg-[#0052cc]/40" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0052cc] to-[#003e99] text-white shadow-lg shadow-[#0052cc]/30 transition-transform duration-300 group-hover:scale-110">
                      <step.Icon className="h-6 w-6" />
                    </div>
                    <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-[#0052cc] shadow">{i + 1}</div>
                  </div>
                  <div className="mt-5 rounded-2xl border border-[#e1e5ea] bg-white px-4 py-4 shadow-sm transition-all duration-300 group-hover:border-[#0052cc]/40 group-hover:shadow-md">
                    <div className="text-base font-bold text-[#1a1c1e]">{step.title}</div>
                    <div className="mt-1 text-xs text-[#41474d]">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Onboarding */}
      <HospitalOnboarding />

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0052cc] to-[#003e99] p-10 text-white md:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Transforming Healthcare Access</h2>
            <p className="mt-3 text-lg italic text-[#d9e8ff]">"Live in life, not in line."</p>
            <p className="mt-8 text-lg font-medium text-white">
              Contact:{" "}
              <a href="mailto:support@medikue.com" className="underline decoration-[#d9e8ff]/50 underline-offset-4 hover:decoration-white">
                support@medikue.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e1e5ea] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Medikue" className="h-8 w-auto" />
              <span className="font-bold text-[#0052cc] lowercase">medikue</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-[#41474d]">Orchestrating the future of healthcare through intelligent patient flow systems.</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#71787e]">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-[#41474d]">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Refund Policy", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Disclaimer", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#0052cc]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e1e5ea] py-6 text-center text-xs text-[#71787e]">© 2025 Longbyte software private limited. All rights reserved.</div>
      </footer>
    </div>
  );
}

function HospitalOnboarding() {
  const [hospital, setHospital] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hospital Onboarding Request: ${hospital}`);
    const body = encodeURIComponent(
      `Hello Medikue team,\n\nWe would like to onboard our hospital with Medikue.\n\nHospital Name: ${hospital}\nLocation: ${location}\nContact: ${contact}\n\nLooking forward to hearing from you.`,
    );
    window.location.href = `mailto:support@medikue.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="onboard" className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-[#e1e5ea] bg-white shadow-xl shadow-[#0052cc]/5">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#d9e8ff] blur-3xl opacity-60" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#f0f7ff] blur-3xl" />
        <div className="relative grid gap-10 p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#d9e8ff] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#003e99]">
              <Building2 className="h-4 w-4" /> For Hospitals
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Are you looking to onboard your hospital?
            </h2>
            <p className="mt-4 text-[#41474d]">
              Join the future of healthcare orchestration. Tell us about your hospital and our team will reach out within 24 hours to get you live on Medikue.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#1a1c1e]">
              {["White-glove onboarding & staff training", "Seamless integration with existing systems", "Dedicated success manager"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0052cc]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="relative rounded-2xl border border-[#e1e5ea] bg-white p-6 shadow-lg md:p-8">
            <h3 className="text-lg font-bold">Get in touch</h3>
            <p className="mt-1 text-sm text-[#41474d]">Fill in your details and we'll get back to you.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#41474d]">Hospital Name</label>
                <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[#e1e5ea] bg-white px-3 py-2.5 focus-within:border-[#0052cc] focus-within:ring-2 focus-within:ring-[#0052cc]/15">
                  <Building2 className="h-4 w-4 text-[#71787e]" />
                  <input
                    required
                    value={hospital}
                    onChange={(e) => setHospital(e.target.value)}
                    placeholder="e.g. City Health Hospital"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#9aa0a6]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#41474d]">Location</label>
                <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[#e1e5ea] bg-white px-3 py-2.5 focus-within:border-[#0052cc] focus-within:ring-2 focus-within:ring-[#0052cc]/15">
                  <MapPin className="h-4 w-4 text-[#71787e]" />
                  <input
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, State"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#9aa0a6]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#41474d]">Your Email (optional)</label>
                <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-[#e1e5ea] bg-white px-3 py-2.5 focus-within:border-[#0052cc] focus-within:ring-2 focus-within:ring-[#0052cc]/15">
                  <input
                    type="email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="you@hospital.com"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#9aa0a6]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0052cc] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0052cc]/20 transition hover:bg-[#003e99]"
              >
                <Send className="h-4 w-4" /> Send Request
              </button>
              <p className="text-center text-xs text-[#71787e]">
                Or email us directly at <a href="mailto:support@medikue.com" className="font-semibold text-[#0052cc]">support@medikue.com</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
