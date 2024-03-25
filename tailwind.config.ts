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
        'sidebar-item': '#2f65cb',
        'sidebar-item-hover': 'rgba(137,167,225,0.67)',
        'sidebar': '#3f6fd0',
        'content': '#f5f5f5',
        'footer': '#fcfcfc',
      },
      textColor: {
        'footer-text': 'rgb(158, 158, 158)',
      },
      fontSize: {
        'user-name': '0.8125rem',
        'user-role': '0.7rem',
      },
      lineHeight: {
        'user-name': '1.43',
        'user-role': '1.66',
      },
      screens: {
        'sm': '0px',
        'md': '600px',
        'lg': '1536px',
      },
      width: {
        'sidebar': '240px',
        'content': 'calc(100% - 240px)',
      }
    },
  },
  plugins: [],
};
export default config;
