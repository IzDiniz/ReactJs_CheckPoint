/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      // Criando tamanhos de telas, para a responsividade do site
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },
    extend: {},
  },
  plugins: [],
}

