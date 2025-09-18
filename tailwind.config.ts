import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Kundlee Brand Colors
        saffron: {
          DEFAULT: "hsl(var(--saffron))",
          light: "hsl(var(--saffron-light))",
          dark: "hsl(var(--saffron-dark))",
          glow: "hsl(var(--saffron-glow))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          light: "hsl(var(--teal-light))",
          dark: "hsl(var(--teal-dark))",
          soft: "hsl(var(--teal-soft))",
        },
        "warm-white": "hsl(var(--warm-white))",
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          soft: "hsl(var(--charcoal-soft))",
          light: "hsl(var(--charcoal-light))",
        },
      },
      fontFamily: {
        larken: ['Larken', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-saffron': 'var(--gradient-saffron)',
        'gradient-teal': 'var(--gradient-teal)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-cosmic': 'var(--gradient-cosmic)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-premium': 'var(--gradient-premium)',
      },
      boxShadow: {
        'elegant': 'var(--shadow-elegant)',
        'premium': 'var(--shadow-premium)',
        'saffron-glow': 'var(--shadow-saffron-glow)',
        'teal-glow': 'var(--shadow-teal-glow)',
        'soft': 'var(--shadow-soft)',
        'crisp': 'var(--shadow-crisp)',
      },
      animation: {
        "accordion-down": "accordion-down 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-up": "accordion-up 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-up": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in": "slide-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "draw": "draw 2.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(50px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "draw": {
          "0%": { "stroke-dashoffset": "1000" },
          "100%": { "stroke-dashoffset": "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
