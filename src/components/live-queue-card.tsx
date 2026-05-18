import { Signal, Wifi, BatteryFull } from "lucide-react";
import logo from "@/assets/medikue-logo.png";

export function LiveQueueCard() {
  return (
    <div className="iphone-showcase" aria-label="Medikue live queue on iPhone">
      <div className="iphone-showcase__glow" aria-hidden />
      <div className="iphone-mockup">
        <div className="iphone-mockup__btn iphone-mockup__btn--silent" aria-hidden />
        <div className="iphone-mockup__btn iphone-mockup__btn--volume-up" aria-hidden />
        <div className="iphone-mockup__btn iphone-mockup__btn--volume-down" aria-hidden />
        <div className="iphone-mockup__btn iphone-mockup__btn--power" aria-hidden />

        <div className="iphone-mockup__frame">
          <div className="iphone-mockup__screen">
            <div className="iphone-mockup__island" aria-hidden />

            <div className="iphone-status-bar">
              <span className="iphone-status-bar__time">9:41</span>
              <div className="iphone-status-bar__icons">
                <Signal className="h-3.5 w-3.5" strokeWidth={2.5} />
                <Wifi className="h-3.5 w-3.5" strokeWidth={2.5} />
                <BatteryFull className="h-3.5 w-3.5" strokeWidth={2.5} />
              </div>
            </div>

            <header className="iphone-app-header">
              <div className="iphone-app-header__brand">
                <img src={logo} alt="" className="iphone-app-header__logo" />
                <span className="iphone-app-header__name">medikue</span>
              </div>
              <span className="iphone-app-header__title">Live Queue</span>
            </header>

            <div className="iphone-app-content live-queue-card">
              <div className="live-queue-card__inner">
                <div className="live-queue-card__cycle">
                  <div className="live-queue-frame live-queue-frame--waiting">
                    <p className="live-queue-label">Your Token</p>
                    <p className="live-queue-token">#18</p>
                    <div className="live-queue-stats">
                      <div className="live-queue-stat">
                        <span>Patients Ahead</span>
                        <strong>6</strong>
                      </div>
                      <div className="live-queue-stat">
                        <span>Est. Wait</span>
                        <strong>38 mins</strong>
                      </div>
                      <div className="live-queue-stat">
                        <span>Doctor</span>
                        <strong>Dr. Sharma</strong>
                      </div>
                    </div>
                    <span className="live-queue-status-pill live-queue-status-pill--active mt-4">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#03a66d]" aria-hidden />
                      Synced
                    </span>
                  </div>

                  <div className="live-queue-frame live-queue-frame--countdown">
                    <p className="live-queue-label">Your Token</p>
                    <p className="live-queue-token">#18</p>
                    <p className="mt-1 text-[10px] font-semibold text-[#0052cc]">Queue moving…</p>
                    <div className="live-queue-stats mt-4">
                      <div className="live-queue-stat">
                        <span>Patients Ahead</span>
                        <div className="queue-ahead-ticker w-7">
                          <div className="queue-ahead-ticker__strip">
                            <span>6</span>
                            <span>5</span>
                            <span>4</span>
                            <span>3</span>
                            <span>2</span>
                            <span>1</span>
                          </div>
                        </div>
                      </div>
                      <div className="live-queue-stat">
                        <span>Est. Wait</span>
                        <div className="queue-ahead-ticker w-12">
                          <div className="queue-wait-ticker__strip">
                            <span>38m</span>
                            <span>28m</span>
                            <span>18m</span>
                            <span>12m</span>
                            <span>6m</span>
                            <span>2m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="live-queue-status-pill live-queue-status-pill--moving mt-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0052cc]" aria-hidden />
                      Updating live
                    </span>
                  </div>

                  <div className="live-queue-frame live-queue-frame--almost">
                    <p className="live-queue-label">Your Token</p>
                    <p className="live-queue-token">#18</p>
                    <div className="live-queue-banner">1 patient ahead of you</div>
                    <div className="live-queue-stats mt-4">
                      <div className="live-queue-stat">
                        <span>Est. Wait</span>
                        <strong className="text-[#0052cc]">~2 mins</strong>
                      </div>
                      <div className="live-queue-stat">
                        <span>Doctor</span>
                        <strong>Dr. Sharma</strong>
                      </div>
                    </div>
                    <span className="live-queue-status-pill live-queue-status-pill--moving mt-4">Almost your turn</span>
                  </div>

                  <div className="live-queue-frame live-queue-frame--consult">
                    <p className="live-queue-label">Your Token</p>
                    <div className="live-queue-consult-ring inline-block rounded-xl px-1">
                      <p className="live-queue-token">#18</p>
                    </div>
                    <p className="mt-2 text-center text-[11px] font-bold uppercase tracking-wide text-[#003e99]">In Consultation</p>
                    <div className="live-queue-ecg" aria-hidden>
                      <svg viewBox="0 0 200 40" preserveAspectRatio="none">
                        <path d="M0 20 L25 20 L32 8 L40 32 L48 20 L200 20" />
                      </svg>
                    </div>
                    <div className="live-queue-dots" aria-hidden>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="live-queue-stats mt-3">
                      <div className="live-queue-stat">
                        <span>Room</span>
                        <strong>OP-3</strong>
                      </div>
                      <div className="live-queue-stat">
                        <span>Doctor</span>
                        <strong>Dr. Sharma</strong>
                      </div>
                    </div>
                    <span className="live-queue-status-pill live-queue-status-pill--consult mt-3">Session in progress</span>
                  </div>
                </div>

                <button type="button" className="live-queue-cta">Track Live</button>
              </div>
            </div>

            <div className="iphone-home-indicator" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
