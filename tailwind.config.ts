import type {Config} from "tailwindcss";


const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [
    require('daisyui'),
    require('@midudev/tailwind-animations'),
  ],
};

export default config;
