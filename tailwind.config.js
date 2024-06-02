/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-background": "url('/img/banner-portfolio.png')",
        'instagram-gradient': 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
      },
      backgroundColor: {
        "portfolio-gray": '#171614'
      },
      boxShadow: {
        'lg-lr': '10px 0 15px -3px rgba(0, 0, 0, 0.1), -10px 0 15px -3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
