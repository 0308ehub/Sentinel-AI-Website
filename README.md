# Sentinel AI Website

Marketing website for Sentinel, an AI-powered audit assistant for internal compliance teams.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Ready for Vercel or any Node.js hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/
├── app/
│   ├── components/      # React components for each section
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main landing page
├── package.json
├── tailwind.config.ts   # Tailwind configuration with custom colors
└── tsconfig.json        # TypeScript configuration
```

## Theme Colors

- **Background:** `#f5f5f7` (body)
- **Card Background:** `#ffffff` (white)
- **Accent Yellow:** `#FFE9A5` (primary actions)
- **Accent Yellow Dark:** `#F6C94C` (hover states)
- **Text Main:** `#111827`
- **Text Muted:** `#6B7280`
- **Border Subtle:** `#E5E7EB`

## Building for Production

```bash
npm run build
npm run start
```

## Deployment to Vercel

This project is configured and ready for Vercel deployment.

### Quick Deploy

1. **Via Vercel Dashboard:**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Import your repository in the [Vercel Dashboard](https://vercel.com/new)
   - Vercel will automatically detect Next.js and configure the build settings
   - Click "Deploy"

2. **Via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Build Settings (Auto-detected by Vercel)
- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install` (or `yarn install` / `pnpm install`)

### Environment Variables
If you need to add environment variables later, you can add them in the Vercel dashboard under Project Settings → Environment Variables.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Single-page marketing site with smooth scrolling
- Accessible navigation with mobile menu
- Modern UI matching the Sentinel product theme
- SEO-friendly structure
- Optimized for Vercel deployment

## License

Private project for Sentinel.
