import Link from 'next/link'

export const metadata = {
  title: 'Sign In — CADmint',
  description: 'Sign in to your CADmint account',
}

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '32px' }}>
      <div style={{ maxWidth: '420px', width: '100%', border: '1px solid var(--border)', borderRadius: '24px', background: 'var(--bg-card)', padding: '48px 36px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', marginBottom: '8px', color: 'var(--fg)' }}>Welcome Back</h1>
        <p style={{ fontSize: '14px', color: 'var(--fg-muted)', marginBottom: '32px', fontWeight: 200 }}>Sign in to continue building</p>
        <form>
          <label style={{ display: 'block', marginBottom: '20px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: '8px' }}>Email</span>
            <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--fg)', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '24px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: '8px' }}>Password</span>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--fg)', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none' }} />
          </label>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '12px' }}>Sign In</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '13px', color: 'var(--fg-muted)' }}>
          Don&apos;t have an account? <Link href="/auth/signup" style={{ color: 'var(--emerald)' }}>Create one</Link>
        </p>
      </div>
    </div>
  )
}
