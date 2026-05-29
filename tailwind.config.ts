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
        // Brand
        'primary': '#7c3aed',
        'primary-dark': '#5b21b6',
        'primary-hover': '#6d28d9',
        'primary-light': '#f5f3ff',
        'primary-border': '#ddd6fe',
        // Background
        'body': '#ffffff',
        'surface': '#fafafa',
        'surface-hover': '#f3f3f9',
        // Text
        'text-main': '#111827',
        'text-muted': '#6B7280',
        'text-subtle': '#9CA3AF',
        // Border
        'border-subtle': '#E5E7EB',
        'border-strong': '#D1D5DB',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)',
        'primary': '0 4px 20px rgba(124,58,237,0.25)',
      },
    },
  },
  plugins: [],
}
export default config
