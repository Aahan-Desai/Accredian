import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        accredian: {
          blue: "#0b66e4",
          navy: "#081f4d",
          cyan: "#e8f4ff",
          ink: "#101828"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(8, 31, 77, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
