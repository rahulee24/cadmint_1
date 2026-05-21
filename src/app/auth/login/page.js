import Link from 'next/link'

export const metadata = {
  title: 'Sign In — CADmint',
  description: 'Sign in to your CADmint account',
}

export default function LoginPage() {
  return (
    <div className="vercel-bg-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
      <div className="vercel-grid-overlay" aria-hidden="true"></div>
      <div className="vercel-glow-1" aria-hidden="true" style={{ left: '10%', top: '10%' }}></div>
      <div className="vercel-glow-2" aria-hidden="true" style={{ right: '10%', bottom: '10%' }}></div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '420px', width: '100%', border: '1px solid var(--border)', borderRadius: '24px', background: 'var(--bg-card)', padding: '48px 36px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', backdropFilter: 'blur(20px)' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', marginBottom: '8px', color: 'var(--fg)', fontWeight: 900, letterSpacing: '-0.02em' }}>Welcome Back</h1>
        <p style={{ fontSize: '14px', color: 'var(--fg-muted)', marginBottom: '32px', fontWeight: 200 }}>Sign in to continue building</p>
        <form>
          <label style={{ display: 'block', marginBottom: '20px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: '8px' }}>Email</span>
            <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'rgba(2, 6, 23, 0.6)', color: 'var(--fg)', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '24px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: '8px' }}>Password</span>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'rgba(2, 6, 23, 0.6)', color: 'var(--fg)', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </label>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px',
              fontSize: '11px',
              fontWeight: 600,
              fontFamily: 'var(--font-geist-sans)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              background: 'linear-gradient(90deg, #6366f1, #a855f7)',
              color: '#ffffff',
              borderRadius: '9999px',
              boxShadow: '0 10px 25px rgba(99, 102, 241, 0.2)',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            Sign In
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: 'var(--fg-muted)' }}>
          Don&apos;t have an account? <Link href="/auth/signup" style={{ color: '#818cf8', fontWeight: 500 }}>Create one</Link>
        </p>
      </div>
    </div>
  )
}
