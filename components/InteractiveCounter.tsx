'use client';

import { useState } from 'react';

export default function InteractiveCounter({ label = 'Counter' }: { label?: string }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{label}</p>
      <div style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-light)', margin: '0.5rem 0' }}>
        {count}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button className="btn btn-primary" onClick={() => setCount(c => c - 1)}>-</button>
        <button className="btn btn-outline" onClick={() => setCount(0)}>Reset</button>
        <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}
