import InteractiveCounter from '../../components/InteractiveCounter';

export default function Islands() {
  return (
    <div className="section" style={{ paddingTop: '7rem' }}>
      <div className="container">
        <div className="section-title">
          <h2>Hydration Comparison</h2>
          <p>
            Next.js melakukan <strong>full page hydration</strong> &mdash; seluruh halaman diproses oleh React.
            Bandingkan dengan Astro yang hanya meng-hydrate komponen interaktif.
          </p>
        </div>

        <div className="island" style={{ borderColor: 'var(--red)', marginBottom: '2rem' }}>
          <div className="island-label" style={{ background: 'var(--red)' }}>Full Hydration - React Runtime Aktif</div>
          <h3 style={{ marginBottom: '1rem' }}>Konten Ini Tetap Diproses React</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Di Next.js, teks ini TIDAK pure HTML statis. Browser tetap menjalankan React untuk
            memproses seluruh halaman ini &mdash; termasuk teks yang tidak interaktif.
            Setiap elemen div, p, h3 di bawah ini melewati React hydration.
          </p>
          <ul style={{ color: 'var(--text-secondary)', marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 2 }}>
            <li>React runtime harus load dulu (~42KB)</li>
            <li>Seluruh DOM diproses ulang oleh React</li>
            <li>Delay sebelum halaman bisa interaktif</li>
            <li>Tidak ada pilihan client:visible atau client:idle</li>
          </ul>
        </div>

        <div className="island" style={{ marginBottom: '2rem' }}>
          <div className="island-label">Interactive Component</div>
          <InteractiveCounter label="Counter (Full React Hydration)" />
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '1rem' }}>
            Komponen ini butuh React. Tapi di Next.js, React SUDAH load untuk seluruh halaman.
          </p>
        </div>

        <div className="island island-static" style={{ marginBottom: '2rem' }}>
          <div className="island-label">Perbandingan</div>
          <h3 style={{ marginBottom: '1rem' }}>Astro vs Next.js: Hydration Strategy</h3>
          <div className="code-block" style={{ marginTop: '1rem' }}>
            <p className="comment">ASTRO: Pilih hydration per komponen</p>
            <p>&lt;Counter client:visible /&gt; ← JS hanya untuk ini</p>
            <p>&lt;Header /&gt; ← HTML murni, 0 JS</p>
            <p>&lt;Footer /&gt; ← HTML murni, 0 JS</p>
            <br />
            <p className="comment">NEXT.JS: Full hydration, tidak bisa pilih</p>
            <p>&lt;Counter /&gt; ← React hydration</p>
            <p>&lt;Header /&gt; ← React hydration JUGA</p>
            <p>&lt;Footer /&gt; ← React hydration JUGA</p>
            <br />
            <p className="comment">Semua komponen = React runtime wajib</p>
          </div>
        </div>

        <div className="island" style={{ marginBottom: '2rem' }}>
          <div className="island-label">Interactive Component #2</div>
          <InteractiveCounter label="Counter #2 (Full React Hydration)" />
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '1rem' }}>
            Di Next.js tidak ada client:idle. React sudah load untuk semua dari awal.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Buka DevTools Network tab. Bandingkan jumlah file JS dengan versi Astro.
          </p>
          <a href="/benchmark" className="btn btn-primary">Lihat Benchmark</a>
          <a href="/about" className="btn btn-outline" style={{ marginLeft: '0.5rem' }}>About</a>
        </div>
      </div>
    </div>
  );
}
