import PerformanceMeter from '../components/PerformanceMeter';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">&#9889; Next.js Speed Demo</div>
          <h1>
            Web dengan <span className="highlight">React Runtime</span><br />
            Full Hydration
          </h1>
          <p>
            Next.js mengirimkan JavaScript ke setiap halaman. Bandingkan performanya
            dengan versi Astro &mdash; lihat sendiri perbedaannya di bawah.
          </p>
          <div className="hero-metrics">
            <div className="metric">
              <div className="metric-value red">~85KB</div>
              <div className="metric-label">JS Bundle</div>
            </div>
            <div className="metric">
              <div className="metric-value yellow">~800ms</div>
              <div className="metric-label">TTI Avg</div>
            </div>
            <div className="metric">
              <div className="metric-value yellow">85-95</div>
              <div className="metric-label">Lighthouse</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Mengapa Next.js Lebih Berat?</h2>
            <p>3 alasan Next.js mengirim lebih banyak JavaScript dari Astro</p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <div className="card-icon">&#128230;</div>
              <h3>React Runtime Wajib</h3>
              <p>
                Setiap halaman Next.js membawa React runtime (~42KB gzip).
                Bahkan halaman statis tetap mengirim React untuk hydration.
                Ini overhead yang tidak ada di Astro.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">&#128260;</div>
              <h3>Full Page Hydration</h3>
              <p>
                Next.js melakukan hydrate SELURUH halaman, bukan hanya bagian interaktif.
                Tombol, teks, gambar &mdash; semuanya diproses oleh React di browser.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">&#9200;</div>
              <h3>Client-Side Routing</h3>
              <p>
                Next.js router membutuhkan JavaScript untuk navigasi antar halaman.
                Tanpa JS, navigasi tidak bisa terjadi. Astro bisa tanpa JS sama sekali.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">&#128202;</div>
              <h3>Bundle Size Bertambah</h3>
              <p>
                Setiap komponen React (meski statis) menambah bundle size.
                Framework runtime, router, dan hydration code semuanya ikut terkirim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Live Performance Metrics</h2>
            <p>Ukuran sebenarnya dari halaman Next.js ini &mdash; diukur real-time di browser Anda</p>
          </div>

          <PerformanceMeter />

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              &#128161; Bandingkan jumlah JS Scripts dan Hydrate Time dengan versi Astro.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Kode yang Dikirim ke Browser</h2>
            <p>Perbedaan output antara Next.js dan Astro</p>
          </div>

          <div className="grid grid-2">
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--red)' }}>&#10008; Next.js (Full Hydration)</h3>
              <div className="code-block">
                <span className="comment">{'<!-- Next.js output -->'}</span><br />
                <span className="tag">{'<script>'}</span> React runtime ~42KB <span className="tag">{'</script>'}</span><br />
                <span className="tag">{'<script>'}</span> Next.js framework ~30KB <span className="tag">{'</script>'}</span><br />
                <span className="tag">{'<script>'}</span> Hydration code ~13KB <span className="tag">{'</script>'}</span><br />
                <br />
                <span className="comment">{'<!-- Total: ~85KB JavaScript -->'}</span>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--green)' }}>&#10004; Astro (Zero JS)</h3>
              <div className="code-block">
                <span className="comment">{'<!-- Astro output -->'}</span><br />
                <span className="tag">{'<h1>'}</span>Judul Statis<span className="tag">{'</h1>'}</span><br />
                <span className="tag">{'<p>'}</span>Teks ini HTML murni.<span className="tag">{'</p>'}</span><br />
                <br />
                <span className="comment">{'<!-- Total: 0KB JavaScript -->'}</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/benchmark" className="btn btn-primary">Lihat Benchmark &#8594;</a>
            <a href="/islands" className="btn btn-outline" style={{ marginLeft: '0.5rem' }}>Lihat Islands Comparison</a>
          </div>
        </div>
      </section>
    </>
  );
}
