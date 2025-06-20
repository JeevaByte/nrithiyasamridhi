
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
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
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
        // Enhanced devotional color palette
        bharata: {
          // Primary devotional colors
          crimson: "hsl(0, 75%, 30%)", // Deeper, richer red
          gold: "hsl(45, 85%, 58%)", // Brighter, more vibrant gold
          cream: "hsl(40, 15%, 97%)", // Softer cream
          copper: "hsl(25, 70%, 50%)", // Warmer copper
          deepRed: "hsl(0, 70%, 25%)", // Deeper red for variety
          
          // Additional spiritual colors
          saffron: "hsl(35, 90%, 65%)", // Sacred saffron
          vermillion: "hsl(15, 85%, 55%)", // Traditional vermillion
          lotus: "hsl(330, 45%, 75%)", // Lotus pink
          peacock: "hsl(195, 70%, 45%)", // Peacock blue
          emerald: "hsl(150, 60%, 40%)", // Temple green
          sandalwood: "hsl(30, 35%, 75%)", // Sandalwood beige
          ivory: "hsl(45, 20%, 95%)", // Pure ivory
          
          // Gradient combinations
          sunset: "linear-gradient(135deg, hsl(0, 75%, 30%) 0%, hsl(35, 90%, 65%) 50%, hsl(45, 85%, 58%) 100%)",
          temple: "linear-gradient(135deg, hsl(195, 70%, 45%) 0%, hsl(150, 60%, 40%) 50%, hsl(45, 85%, 58%) 100%)",
          divine: "linear-gradient(135deg, hsl(330, 45%, 75%) 0%, hsl(35, 90%, 65%) 50%, hsl(0, 75%, 30%) 100%)",
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
        "gentle-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" 
          },
        },
        "divine-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
            filter: "brightness(1)"
          },
          "50%": { 
            transform: "scale(1.02)",
            filter: "brightness(1.1)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gentle-glow": "gentle-glow 3s ease-in-out infinite",
        "divine-pulse": "divine-pulse 4s ease-in-out infinite",
      },
      backgroundImage: {
        'devotional-gradient': 'linear-gradient(135deg, hsl(0, 75%, 30%) 0%, hsl(35, 90%, 65%) 25%, hsl(45, 85%, 58%) 50%, hsl(330, 45%, 75%) 75%, hsl(195, 70%, 45%) 100%)',
        'temple-gradient': 'linear-gradient(135deg, hsl(195, 70%, 45%) 0%, hsl(150, 60%, 40%) 50%, hsl(45, 85%, 58%) 100%)',
        'sacred-gradient': 'linear-gradient(135deg, hsl(330, 45%, 75%) 0%, hsl(35, 90%, 65%) 50%, hsl(0, 75%, 30%) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
