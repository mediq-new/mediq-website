type StoreBadgesProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function StoreBadges({ className = "", variant = "dark" }: StoreBadgesProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#"
        className={`store-badge ${isLight ? "store-badge--light" : ""}`}
        aria-label="Download on the App Store (coming soon)"
      >
        <svg viewBox="0 0 24 24" className="store-badge__icon" aria-hidden>
          <path
            fill="currentColor"
            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
          />
        </svg>
        <span className="store-badge__text">
          <span className="store-badge__label">Download on the</span>
          <span className="store-badge__name">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className={`store-badge ${isLight ? "store-badge--light" : ""}`}
        aria-label="Get it on Google Play (coming soon)"
      >
        <svg viewBox="0 0 24 24" className="store-badge__icon" aria-hidden>
          <path
            fill="currentColor"
            d="M3.18 23.76c.24.14.54.16.8.05l12.43-7.18-2.65-2.65-10.58 9.78zm-.89-20.9a1.05 1.05 0 0 0-.29.78v19.72c0 .31.14.6.37.78l.11.07 11.1-11.1v-.26L2.99 2.05l.3.81zm20.07 9.54-2.82-1.63-2.98 2.98 2.98 2.98 2.82-1.63c.54-.31.87-.89.87-1.52s-.33-1.21-.87-1.52l-.02-.01-11.35 6.55 9.33-5.39 2.02-1.17z"
          />
        </svg>
        <span className="store-badge__text">
          <span className="store-badge__label">Get it on</span>
          <span className="store-badge__name">Google Play</span>
        </span>
      </a>
    </div>
  );
}
