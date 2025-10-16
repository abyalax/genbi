import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const pluginRounded = plugin(function ({ addUtilities }: PluginAPI) {
  const newUtilities = {
    '.rounded-custom': {
      'border-top-left-radius': '90rem',
      'border-top-right-radius': '60rem',
      'border-bottom-right-radius': '20rem',
      'border-bottom-left-radius': '28rem',
    },
  };
  addUtilities(newUtilities);
});


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/admin/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/admin/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/admin/news/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/admin/news/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/news/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/news/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ml:"950px",
        mml: "850px", // Custom breakpoint dengan min-width
        xs: "500px",
        xxs: "300px",
      },
      backgroundColor:{
        "toska-light": "#21A4A4",
        "toska": "#1C8383",
        "toska-dark": "#146767",
      },
      colors: {
        "toska-light": "#21A4A4",
        "toska": "#1C8383",
        "toska-dark": "#146767",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    pluginRounded, 
    require('@tailwindcss/typography')
  ],
};
export default config;
