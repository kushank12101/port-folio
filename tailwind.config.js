/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F3",
        "paper-dim": "#F2EFE7",
        ink: "#13140F",
        "ink-soft": "#23241D",
        brass: "#8B6F3E",
        "brass-light": "#B79A63",
        ledger: "#2F4538",
        rust: "#C2410C",
        slate: "#6B6356",
        line: "#DDD7C9",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.22em",
      },
      maxWidth: {
        content: "1240px",
      },
      transitionTimingFunction: {
        ledger: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
