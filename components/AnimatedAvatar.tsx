"use client";

export default function AnimatedAvatar() {
  return (
    <div className="relative w-full max-w-sm">
      <svg
        viewBox="0 0 420 160"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Paulo Llanos Linux dev illustration"
      >
        <title>Paulo Llanos</title>

        {/* Programmer — slimmer body, left side */}
        <g transform="translate(142, 18)">
          {/* Body/Hoodie — thinner */}
          <path d="M 22 54 Q 14 72 10 96 Q 8 114 10 124 L 48 124 Q 50 114 48 96 Q 44 72 36 54 Z" fill="var(--teal)" opacity="0.75" />
          <rect x="28" y="44" width="6" height="10" rx="3" fill="var(--ctp-text)" opacity="0.2" />

          {/* Head */}
          <ellipse cx="29" cy="26" rx="12" ry="17" fill="var(--ctp-text)" opacity="0.28" />

          {/* Curly hair — denser, more defined curls */}
          <g fill="none" stroke="var(--ctp-text)" strokeWidth="1.5" strokeLinecap="round" opacity="0.35">
            {/* Top curls */}
            <path d="M 17 18 Q 15 8 22 5" />
            <path d="M 22 16 Q 20 6 27 3" />
            <path d="M 27 15 Q 25 5 32 2" />
            <path d="M 32 14 Q 30 4 37 1" />
            <path d="M 37 15 Q 35 5 42 2" />
            <path d="M 17 24 Q 13 16 18 11" />
            <path d="M 41 24 Q 45 16 40 11" />
            <path d="M 18 30 Q 14 22 16 17" />
            <path d="M 40 30 Q 44 22 42 17" />
            {/* Front baby hairs */}
            <path d="M 24 18 Q 25 22 27 19" strokeWidth="1" />
            <path d="M 28 17 Q 29 21 31 18" strokeWidth="1" />
            <path d="M 32 18 Q 33 22 35 19" strokeWidth="1" />
          </g>

          {/* Glasses */}
          <rect x="22" y="19" width="6" height="5" rx="2" fill="none" stroke="var(--ctp-text)" strokeWidth="1.3" opacity="0.5" />
          <rect x="31" y="19" width="6" height="5" rx="2" fill="none" stroke="var(--ctp-text)" strokeWidth="1.3" opacity="0.5" />
          <line x1="28" y1="21" x2="31" y2="21" stroke="var(--ctp-text)" strokeWidth="1.3" opacity="0.5" />

          {/* Eyes */}
          <circle cx="25" cy="21.5" r="1.5" fill="var(--ctp-text)" opacity="0.55">
            <animate attributeName="cx" values="25;26;25" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="34" cy="21.5" r="1.5" fill="var(--ctp-text)" opacity="0.55">
            <animate attributeName="cx" values="34;35;34" dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Arms typing — thinner */}
          <path d="M 15 68 L 4 86" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <path d="M 43 68 L 54 86" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <circle cx="4" cy="86" r="3.5" fill="var(--ctp-text)" opacity="0.22">
            <animate attributeName="cy" values="86;83;86" dur="0.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="54" cy="86" r="3.5" fill="var(--ctp-text)" opacity="0.22">
            <animate attributeName="cy" values="86;89;86" dur="0.3s" begin="0.15s" repeatCount="indefinite" />
          </circle>

          {/* Coffee */}
          <g transform="translate(55, 72)">
            <rect x="0" y="0" width="8" height="9" rx="2" fill="var(--ctp-surface0)" opacity="0.4" stroke="var(--ctp-overlay0)" strokeWidth="0.5" />
            <path d="M 8 2 Q 10 2 10 5 Q 10 8 8 8" fill="none" stroke="var(--ctp-surface0)" strokeWidth="1.2" opacity="0.35" />
            <ellipse cx="4" cy="0" rx="4" ry="1.2" fill="var(--ctp-subtext0)" opacity="0.45" />
            <path d="M 3 -2 Q 4 -5 3 -8" fill="none" stroke="var(--ctp-overlay0)" strokeWidth="0.7" opacity="0.2">
              <animate attributeName="d" values="M 3 -2 Q 4 -5 3 -8;M 3 -2 Q 2 -5 3 -8;M 3 -2 Q 4 -5 3 -8" dur="2s" repeatCount="indefinite" />
            </path>
          </g>
        </g>

        {/* Laptop screen — center, bigger terminal */}
        <g transform="translate(28, 68)">
          <rect x="0" y="0" width="115" height="72" rx="7" fill="var(--ctp-crust)" stroke="var(--ctp-surface1)" strokeWidth="2" />
          <rect x="4" y="4" width="107" height="64" rx="4" fill="var(--ctp-base)" opacity="0.85" />
          {/* Terminal */}
          <rect x="8" y="8" width="99" height="56" rx="4" fill="var(--ctp-mantle)" opacity="0.95" />
          {/* Title bar */}
          <rect x="8" y="8" width="99" height="10" rx="4" fill="var(--ctp-surface0)" opacity="0.5" />
          <circle cx="14" cy="13" r="2" fill="var(--red)" opacity="0.7" />
          <circle cx="20" cy="13" r="2" fill="var(--yellow)" opacity="0.7" />
          <circle cx="26" cy="13" r="2" fill="var(--green)" opacity="0.7" />

          {/* Terminal content — bigger typography, dev commands */}
          <text x="13" y="28" fill="var(--green)" fontSize="6.5" fontFamily="monospace" opacity="0.85">
            <tspan fontStyle="normal">$ cargo build --release</tspan>
          </text>
          <text x="13" y="38" fill="var(--ctp-subtext0)" fontSize="5" fontFamily="monospace" opacity="0.6">
            Compiling portfolio v0.1.0
          </text>
          <text x="13" y="48" fill="var(--ctp-subtext0)" fontSize="5" fontFamily="monospace" opacity="0.5">
            Finished release [optimized]
          </text>
          <text x="13" y="58" fill="var(--green)" fontSize="6.5" fontFamily="monospace" opacity="0.85">
            $ git push origin main
          </text>

          {/* Cursor blink left side */}
          <rect x="14" y="60" width="3" height="6" fill="var(--green)" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="0.7s" repeatCount="indefinite" />
          </rect>

          {/* Screen glow */}
          <ellipse cx="57" cy="72" rx="65" ry="8" fill="var(--green)" opacity="0.05">
            <animate attributeName="opacity" values="0.03;0.08;0.03" dur="3s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* Tux — classic penguin, right side */}
        <g transform="translate(320, 65)">
          <ellipse cx="28" cy="72" rx="23" ry="6" fill="var(--ctp-crust)" opacity="0.25" />
          <ellipse cx="28" cy="40" rx="19" ry="28" fill="var(--ctp-text)" opacity="0.3" />
          <ellipse cx="28" cy="44" rx="13" ry="18" fill="var(--ctp-base)" opacity="0.7" />
          <ellipse cx="28" cy="14" rx="16" ry="13" fill="var(--ctp-text)" opacity="0.3" />
          <ellipse cx="22" cy="17" rx="7" ry="8" fill="var(--ctp-base)" opacity="0.7" />
          <ellipse cx="34" cy="17" rx="7" ry="8" fill="var(--ctp-base)" opacity="0.7" />
          <ellipse cx="20" cy="13" rx="4" ry="5" fill="var(--ctp-base)" />
          <ellipse cx="36" cy="13" rx="4" ry="5" fill="var(--ctp-base)" />
          <circle cx="21" cy="12.5" r="2.2" fill="var(--ctp-text)" opacity="0.7">
            <animate attributeName="cx" values="21;22;21" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="37" cy="12.5" r="2.2" fill="var(--ctp-text)" opacity="0.7">
            <animate attributeName="cx" values="37;38;37" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="22" cy="11" r="0.8" fill="var(--ctp-base)" />
          <circle cx="38" cy="11" r="0.8" fill="var(--ctp-base)" />
          <path d="M 22 21 Q 28 16 34 21 Q 28 24 22 21" fill="var(--peach)" opacity="0.85" />
          <path d="M 10 34 Q 2 50 8 62 Q 14 66 20 58 Q 24 52 20 38 Z" fill="var(--ctp-text)" opacity="0.25">
            <animateTransform attributeName="transform" type="rotate" values="0 10 34;-6 10 34;0 10 34" dur="1.8s" repeatCount="indefinite" />
          </path>
          <path d="M 46 34 Q 54 50 48 62 Q 42 66 36 58 Q 32 52 36 38 Z" fill="var(--ctp-text)" opacity="0.25">
            <animateTransform attributeName="transform" type="rotate" values="0 46 34;6 46 34;0 46 34" dur="1.8s" repeatCount="indefinite" />
          </path>
          <ellipse cx="18" cy="68" rx="9" ry="4" fill="var(--peach)" opacity="0.7" transform="rotate(-20 18 68)" />
          <ellipse cx="38" cy="68" rx="9" ry="4" fill="var(--peach)" opacity="0.7" transform="rotate(20 38 68)" />
        </g>
      </svg>

      <span className="absolute top-0 right-4 text-xs font-bold font-mono text-green opacity-30 animate-[float_3s_ease-in-out_infinite]">
        {"$"}
      </span>
      <span className="absolute bottom-0 right-2 text-[10px] font-bold font-mono text-mauve opacity-20 animate-[float_4s_ease-in-out_infinite_1s]">
        {"{}"}
      </span>
    </div>
  );
}
