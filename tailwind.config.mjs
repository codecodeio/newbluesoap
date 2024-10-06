/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#df00a9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
