import type { LucideIcon } from "lucide-react";
import { Calendar, Eye, Timer, QrCode, CloudUpload, ChevronRight } from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  tag: string;
  Icon: LucideIcon;
};

const FEATURES: Feature[] = [
  {
    title: "Smart Booking",
    desc: "Optimized slot allocation with intelligent overflow management to prevent congestion.",
    tag: "Scheduling",
    Icon: Calendar,
  },
  {
    title: "Live Tracking",
    desc: "Real-time queue visibility for patients via mobile web and app-less interfaces.",
    tag: "Visibility",
    Icon: Eye,
  },
  {
    title: "EWT Engine",
    desc: "AI-driven wait predictions that learn from actual consultation speeds.",
    tag: "AI Powered",
    Icon: Timer,
  },
  {
    title: "QR Check-In",
    desc: "Instant walk-in registration and token generation via QR scan.",
    tag: "Walk-in",
    Icon: QrCode,
  },
  {
    title: "Digital Records",
    desc: "Cloud prescription access and medical history available anywhere.",
    tag: "Cloud",
    Icon: CloudUpload,
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <article className="feature-queue__card group">
      <span className="feature-queue__step">{String(index + 1).padStart(2, "0")}</span>
      <div className="feature-queue__icon-box">
        <feature.Icon className="feature-queue__icon" strokeWidth={2.25} />
      </div>
      <span className="feature-queue__tag">{feature.tag}</span>
      <h3 className="feature-queue__title">{feature.title}</h3>
      <p className="feature-queue__desc">{feature.desc}</p>
    </article>
  );
}

function QueueArrow() {
  return (
    <div className="feature-queue__arrow" aria-hidden>
      <ChevronRight className="feature-queue__arrow-icon" strokeWidth={2.5} />
    </div>
  );
}

export function FeatureQueueShowcase() {
  return (
    <div className="feature-queue">
      <div className="feature-queue__track">
        {FEATURES.map((feature, i) => (
          <div key={feature.title} className="feature-queue__segment">
            <FeatureCard feature={feature} index={i} />
            {i < FEATURES.length - 1 && <QueueArrow />}
          </div>
        ))}
      </div>
    </div>
  );
}
