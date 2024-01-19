import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./src/client/index.html",
    "./src/client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography(),
  ],
  darkMode: 'class',
} satisfies Config
