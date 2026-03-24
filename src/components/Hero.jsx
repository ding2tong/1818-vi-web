export default function Hero() {
  return (
    <header className="header-hero">
      <div className="container">
        <div className="reveal">
          <span className="badge-minimal">PORTFOLIO & DESIGN SYSTEM</span>
          
          <div className="logo-container">
            <img src="/乙八乙八 工作區域 1.png" alt="Logo" className="logo-img" />
            <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, whiteSpace: 'nowrap', margin: 0 }}>
              乙八乙八平面設計工作室
            </h1>
          </div>
          
          <p>
            以極簡之道，打造品牌靈魂。透過精確的線條與平衡的佈局，為您的視覺識別與商業設計注入永恆的價值。
          </p>
          
          <div className="title-line"></div>
        </div>
      </div>
    </header>
  );
}
