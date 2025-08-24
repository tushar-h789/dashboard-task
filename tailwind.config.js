/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
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
        activeTextColor: "hsl(var(--active-text-color))",
        activeBgColor: "hsl(var(--active-bg-color))",
        sidebarMenuTextColor: "hsl(var(--sidebar-menu-text-color))",
        sidebarHeadingTextColor: "hsl(var(--sidebar-heading-text-color))",
        userNameTextColor: "hsl(var(--user-name-text-color))",
        userCardEmailTextColor: "hsl(var(--user-card-email-text-color))",
        userEmailTextColor: "hsl(var(--user-email-text-color))",
        userRoleTextColor: "hsl(var(--user-role-text-color))",
        sidebarBgColor: "hsl(var(--sidebar-bg-color))",
        tagTeamTextColor: "hsl(var(--tag-team-text-color))",
        tagTeamBgColor: "hsl(var(--tag-team-bg-color))",
        tagTeamBorderColor: "hsl(var(--tag-team-border-color))",




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
        brand: {
          50: "#eef9ff",
          100: "#d9f0ff",
          200: "#b6e1ff",
          300: "#85ccff",
          400: "#4fb2ff",
          500: "#1c98ff", // primary
          600: "#0b7be6",
          700: "#095fb4",
          800: "#084d8f",
          900: "#083f75",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [forms, typography],
};
