import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/client/index.html",
    "./src/client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
