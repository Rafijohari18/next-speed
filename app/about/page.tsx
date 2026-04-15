export default function About() {
  return (
    <section className="section" style={{ paddingTop: '7rem' }}>
      <div className="container">
        <div className="section-title">
          <h2>Tentang Demo Ini</h2>
          <p>Proyek perbandingan Astro vs Next.js untuk menunjukkan perbedaan performa</p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
          <div className="card">
            <h3>&#127919; Tujuan</h3>
            <p>
              Menunjukkan secara langsung perbedaan performa antara Astro dan Next.js.
              Deploy kedua versi, cek PageSpeed, dan bandingkan.
            </p>
          </div>
          <div className="card">
            <h3>&#128296; Tech Stack</h3>
            <p>
              Versi ini: Next.js 14 (App Router) + React. Versi Astro: Astro 4 + Preact (hanya untuk islands).
              Desain dan konten identik.
            </p>
          </div>
        </div>

        <div className="card" style={{ maxWidth: 700, margin: '0 auto' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Perbedaan Utama</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 36, height: 36, background: 'rgba(239,68,68,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>&#128230;</div>
              <div>
                <strong>React Runtime (~42KB)</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Next.js wajib mengirim React ke setiap halaman, bahkan yang statis</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 36, height: 36, background: 'rgba(234,179,8,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>&#128260;</div>
              <div>
                <strong>Full Page Hydration</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Seluruh halaman di-hydrate oleh React, bukan hanya bagian interaktif</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 36, height: 36, background: 'rgba(59,130,246,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>&#9200;</div>
              <div>
                <strong>No Selective Hydration</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tidak ada client:visible, client:idle, dll. Semua hydrate segera</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 36, height: 36, background: 'rgba(124,58,237,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>&#128202;</div>
              <div>
                <strong>Cek PageSpeed Kedua Versi</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Bandingkan skor Lighthouse antara versi Astro dan Next.js ini di PageSpeed Insights</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/" className="btn btn-primary">&#8592; Kembali ke Home</a>
        </div>
      </div>
    </section>
  );
}
