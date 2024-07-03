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
          light: "#269e89",
          DEFAULT: "#235591",
          dark: "#11453c",
        },
        secondary: {
          light: "#235591",
          DEFAULT: "#1F4068",
          dark: "#122c4a",
        },
        hover: {
          primary: "#11453c",
          secondary: "#122c4a",
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
