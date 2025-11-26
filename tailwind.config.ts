import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'blatismo-sans': ['var(--font-blatismo-sans)'],
        'milker': ['var(--font-milker)'],
        'sans-text': ['var(--font-sans-text)'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        'celeste-wave': {
          '0%, 100%': {
            'color': 'white',
            'text-shadow': 'none',
          },
          '25%': {
            'color': 'hsl(190 80% 70%)', /* Un celeste claro */
            'text-shadow': '0 0 10px hsl(190 80% 70%), 0 0 20px hsl(190 80% 70%)',
          },
          '50%': {
            'color': 'hsl(190 80% 80%)', /* Celeste más brillante */
            'text-shadow': '0 0 15px hsl(190 80% 80%), 0 0 30px hsl(190 80% 80%)',
          },
          '75%': {
            'color': 'hsl(190 80% 70%)',
            'text-shadow': '0 0 10px hsl(190 80% 70%), 0 0 20px hsl(190 80% 70%)',
          },
        },
        'background-light-move': {
          '0%': { 'transform': 'translate(0%, 0%)' },
          '50%': { 'transform': 'translate(50%, 50%)' },
          '100%': { 'transform': 'translate(0%, 0%)' },
        },
        'background-light-color': {
          '0%, 90%': { 'background-image': 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)' }, // Blanco
          '100%': { 'background-image': 'radial-gradient(circle at center, rgba(173, 216, 230, 0.1) 0%, transparent 70%)' }, // Celeste tenue
        },
        'pulse-white-button': {
          '0%, 100%': { 'box-shadow': '0 0 15px rgba(255, 255, 255, 0.8)' },
          '50%': { 'box-shadow': '0 0 30px rgba(255, 255, 255, 1)' },
        },
        'button-shine': {
          '0%': { 'left': '-100%', 'opacity': '0' },
          '50%': { 'left': '100%', 'opacity': '0.5' },
          '100%': { 'left': '200%', 'opacity': '0' },
        },
        'fade-in': {
          '0%': { 'opacity': '0', 'transform': 'translateY(-20px)' },
          '100%': { 'opacity': '1', 'transform': 'translateY(0)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'celeste-wave': 'celeste-wave 4s ease-in-out infinite',
        'background-light': 'background-light-move 20s ease-in-out infinite alternate, background-light-color 10s linear infinite alternate',
        'pulse-white-button': 'pulse-white-button 2s infinite',
        'button-shine': 'button-shine 1.5s infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;