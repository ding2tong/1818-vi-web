import React from 'react';

// Using inline styles for specific layout adjustments similar to original CSS
const styles = {
  headerHero: {
    padding: '8rem 0 4rem',
    backgroundColor: 'white'
  },
  logoContainer: {
    display: 'flex', 
    alignItems: 'center', 
    gap: '2rem', 
    marginBottom: '2rem', 
    flexWrap: 'wrap'
  },
  logoImg: {
    height: '50px', 
    width: 'auto', 
    flexShrink: 0
  },
  h1: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)', 
    lineHeight: 1.1, 
    whiteSpace: 'nowrap', 
    margin: 0
  },
  desc: {
    color: 'var(--text-muted)',
    maxWidth: '520px',
    lineHeight: 2
  },
  titleLine: {
    height: '1px',
    width: '60px',
    background: 'var(--primary)',
    margin: '3rem 0'
  }
};

export default function Hero() {
  return (
    <header style={styles.headerHero}>
      <div className="container">
        <div className="reveal">
          <span className="badge-minimal">PORTFOLIO & DESIGN SYSTEM</span>
          
          <div style={styles.logoContainer}>
            <img src="/乙八乙八 工作區域 1.png" alt="Logo" style={styles.logoImg} />
            <h1 style={styles.h1}>乙八乙八平面設計工作室</h1>
          </div>
          
          <p style={styles.desc}>
            以極簡之道，打造品牌靈魂。透過精確的線條與平衡的佈局，為您的視覺識別與商業設計注入永恆的價值。
          </p>
          
          <div style={styles.titleLine}></div>
        </div>
      </div>
    </header>
  );
}
