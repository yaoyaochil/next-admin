import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#eef2f6',
      },
      screens: {
        'sm': '0px',
        'md': '600px',
        'lg': '1536px',
      }
    },
  },
  plugins: [],
};
export default config;
