import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-yellow': '#A78BFA',
        'accent-yellow-dark': '#8B5CF6',
        'body': '#fafafa',
        'text-main': '#111827',
        'text-muted': '#6B7280',
        'border-subtle': '#E5E7EB',
      },
    },
  },
  plugins: [],
}
export default config
