import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#28209e",
          DEFAULT: "#211C6A",
          dark: "#16124d",
        },
        secondary: {
          light: "#FDFFA9",
          DEFAULT: "#74E291",
          dark: "#429e5b",
        },
        hover: {
          primary: "#16124d",
          secondary: "#429e5b",
        },
        warning: {
          DEFAULT: "#F59E0B",
        },
        success: {
          DEFAULT: "#10b91b",
        },
        error: {
          DEFAULT: "#EF4444",
        },
        info: {
          DEFAULT: "#3B82F6",
        },
      },
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        "300": "300ms",
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
export default config;
