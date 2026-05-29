export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Top-left violet glow */}
      <div
        className="absolute -top-64 -left-64 w-[700px] h-[700px] rounded-full animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(124,58,237,0.02) 50%, transparent 70%)' }}
      />
      {/* Top-right accent */}
      <div
        className="absolute -top-32 -right-48 w-[500px] h-[500px] rounded-full animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, rgba(124,58,237,0.01) 50%, transparent 70%)' }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
