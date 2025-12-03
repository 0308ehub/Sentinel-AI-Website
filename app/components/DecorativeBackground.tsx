'use client'

export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Curved lines on the sides */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Left curved line */}
        <svg
          className="absolute left-0 top-0 w-96 h-full opacity-20"
          viewBox="0 0 400 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 Q100,200 150,400 T200,800 Q250,1000 300,1200"
            stroke="url(#gradient-left)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse-slow"
          />
          <defs>
            <linearGradient id="gradient-left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right curved line */}
        <svg
          className="absolute right-0 top-0 w-96 h-full opacity-20"
          viewBox="0 0 400 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400,0 Q300,200 250,400 T200,800 Q150,1000 100,1200"
            stroke="url(#gradient-right)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse-slow"
          />
          <defs>
            <linearGradient id="gradient-right" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-yellow/10 rounded-full blur-2xl animate-float" />
      <div className="absolute top-60 right-20 w-40 h-40 bg-accent-yellow-dark/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent-yellow/15 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-60 right-1/3 w-36 h-36 bg-accent-yellow-dark/10 rounded-full blur-2xl animate-float" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #A78BFA 1px, transparent 1px),
            linear-gradient(to bottom, #A78BFA 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}

