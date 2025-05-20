import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4F46E5", // Vivid Indigo
          foreground: "#F9FAFB",
          100: "#e0e0ff",
          200: "#c0c0ff",
          300: "#a1a1ff",
          400: "#8282ff",
          500: "#6363ff",
          600: "#4F46E5",
          700: "#3f3fc7",
          800: "#2f2fa9",
          900: "#20208b",
        },
        secondary: {
          DEFAULT: "#22D3EE", // Neon Cyan
          foreground: "#1F2937",
          100: "#d0f8ff",
          200: "#a1f1ff",
          300: "#72eaff",
          400: "#43e3ff",
          500: "#22D3EE",
          600: "#14b8d4",
          700: "#0e9eb8",
          800: "#08849c",
          900: "#026a80",
        },
        accent: {
          DEFAULT: "#EC4899", // Hot Pink
          foreground: "#F9FAFB",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#EC4899", // Hot Pink
          foreground: "#F9FAFB",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        slate: {
          900: "#1F2937", // Dark Slate
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-up": {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px 2px rgba(34, 211, 238, 0.3)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(34, 211, 238, 0.6)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fade-in 1s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-up": "scale-up 0.5s ease-out",
        "glow-pulse": "glow-pulse 3s infinite",
        "gradient-shift": "gradient-shift 5s ease infinite",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        grotesk: [
          "var(--font-space-grotesk)",
          "var(--font-manrope)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(45deg, #4F46E5, #22D3EE)",
        "gradient-accent": "linear-gradient(45deg, #4F46E5, #EC4899)",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, #4F46E5, #22D3EE, #EC4899, #4F46E5)",
      },
      boxShadow: {
        glow: "0 0 15px 5px rgba(34, 211, 238, 0.3)",
        "glow-accent": "0 0 15px 5px rgba(236, 72, 153, 0.3)",
      },
      backdropFilter: {
        glass: "blur(10px)",
      },
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.2)",
        md: "0 2px 4px rgba(0, 0, 0, 0.2)",
        lg: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
