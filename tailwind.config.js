/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070A14",
          900: "#0B1020",
          800: "#0F1730"
        }
      },
      boxShadow: {
        glass: "0 10px 40px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px rgba(56,189,248,0.18)"
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate3d(-10%, -10%, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(10%, 10%, 0) rotate(8deg)" },
          "100%": { transform: "translate3d(-10%, -10%, 0) rotate(0deg)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        aurora: "aurora 14s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

