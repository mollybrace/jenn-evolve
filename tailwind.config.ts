import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)']
      },
      colors: {
        "khaki-green": "#ADA491",
        "khaki-beige": "#CBB6A1",
        "khaki-cream" : "#E5DBD6"
      },
    },
  },
  plugins: [],
};
export default config;
