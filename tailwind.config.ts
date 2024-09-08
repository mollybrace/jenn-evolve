import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        'center-top': 'center top',
      },
        scrollBehavior: ['responsive'],
      
      fontFamily: {
        sans: ['var(--font-montserrat)']
      },
      
      colors: {
        "khaki-green": "#ADA491",
        "khaki-beige": "#CBB6A1",
        "khaki-cream" : "#E5DBD6",
        "bistre": "#3A271Bff",
        "carmine": "#931F25ff",
        "beaver": "#8D7664ff",
        "bone": "#DDD8C7ff",
      },
    },
  },
  plugins: [],
};
export default config;
