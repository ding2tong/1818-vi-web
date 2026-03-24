import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '8rem 0 4rem', borderTop: '1px solid var(--border-thin)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Desktop format simulation handling */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem' }}>
          <div>
            <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>1818 DESIGN STUDIO</h3>
            <p className="text-sm" style={{ opacity: 0.6 }}>乙八乙八平面設計工作室</p>
            <p className="text-sm" style={{ opacity: 0.6, marginTop: '0.2rem' }}>Purity in Design, Power in Identity.</p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            <div>
              <p>© 2026 1818 DESIGN STUDIO</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>TAIPEI / TAIWAN</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
