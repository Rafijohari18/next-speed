export default function Benchmark() {
  return (
    <section className="section" style={{ paddingTop: '7rem' }}>
      <div className="container">
        <div className="section-title">
          <h2>Framework Benchmark</h2>
          <p>Perbandingan ukuran bundle dan kecepatan load antar framework</p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Framework</th>
                <th>JS Bundle</th>
                <th>Time to Interactive</th>
                <th>Lighthouse Perf</th>
                <th>Hydration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style={{ color: 'var(--accent-light)' }}>&#9883; Astro</strong></td>
                <td className="winner">~0KB</td>
                <td className="winner">~200ms</td>
                <td className="winner">98-100</td>
                <td>Partial (Islands)</td>
              </tr>
              <tr>
                <td><strong style={{ color: 'var(--text-primary)' }}>Next.js (Anda di sini)</strong></td>
                <td className="loser">~85KB</td>
                <td className="loser">~800ms</td>
                <td>85-95</td>
                <td>Full page</td>
              </tr>
              <tr>
                <td>Remix</td>
                <td className="loser">~50KB</td>
                <td className="loser">~600ms</td>
                <td>88-96</td>
                <td>Full page</td>
              </tr>
              <tr>
                <td>Gatsby</td>
                <td className="loser">~120KB</td>
                <td className="loser">~1000ms</td>
                <td>80-92</td>
                <td>Full page</td>
              </tr>
              <tr>
                <td>Nuxt</td>
                <td className="loser">~65KB</td>
                <td className="loser">~700ms</td>
                <td>85-94</td>
                <td>Full page</td>
              </tr>
              <tr>
                <td>SvelteKit</td>
                <td className="loser">~15KB</td>
                <td className="loser">~400ms</td>
                <td>92-98</td>
                <td>Full page</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            * Angka bersifat estimasi rata-rata. Hasil aktual bervariasi tergantung konten dan hosting.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Visual: Ukuran Bundle</h2>
            <p>Semakin pendah bar, semakin sedikit JavaScript yang dikirim ke browser</p>
          </div>

          <div className="perf-panel">
            <div className="perf-bar-container">
              <div className="perf-bar-label">
                <span>&#9883; Astro</span>
                <span style={{ color: 'var(--green)' }}>~0KB (hanya islands)</span>
              </div>
              <div className="perf-bar">
                <div className="perf-bar-fill green" style={{ width: '2%' }}></div>
              </div>
            </div>

            <div className="perf-bar-container">
              <div className="perf-bar-label">
                <span>SvelteKit</span>
                <span style={{ color: 'var(--yellow)' }}>~15KB</span>
              </div>
              <div className="perf-bar">
                <div className="perf-bar-fill yellow" style={{ width: '12%' }}></div>
              </div>
            </div>

            <div className="perf-bar-container">
              <div className="perf-bar-label">
                <span>Remix</span>
                <span style={{ color: 'var(--yellow)' }}>~50KB</span>
              </div>
              <div className="perf-bar">
                <div className="perf-bar-fill yellow" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div className="perf-bar-container">
              <div className="perf-bar-label">
                <span>Nuxt</span>
                <span style={{ color: 'var(--yellow)' }}>~65KB</span>
              </div>
              <div className="perf-bar">
                <div className="perf-bar-fill yellow" style={{ width: '52%' }}></div>
              </div>
            </div>

            <div className="perf-bar-container">
              <div className="perf-bar-label">
                <span>Next.js (Halaman ini)</span>
                <span style={{ color: 'var(--red)' }}>~85KB</span>
              </div>
              <div className="perf-bar">
                <div className="perf-bar-fill red" style={{ width: '68%' }}></div>
              </div>
            </div>

            <div className="perf-bar-container">
              <div className="perf-bar-label">
                <span>Gatsby</span>
                <span style={{ color: 'var(--red)' }}>~120KB</span>
              </div>
              <div className="perf-bar">
                <div className="perf-bar-fill red" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="/islands" className="btn btn-primary">Lihat Islands Comparison &#8594;</a>
      </div>
    </section>
  );
}
