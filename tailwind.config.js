/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { display: ['"SF Mono"'] },
    colors: {
      bluom: {
        light: "hsl(220, 90%, 80%)",
        "select-tint": "hsl(220, 60%, 20%)",
        select: "hsl(220, 20%, 20%)",
        dark: "hsl(200, 100%, 4.5%)",
      },
    },
  },
  plugins: [],
};
