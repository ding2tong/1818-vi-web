import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { portfolioData } from '../components/Portfolio';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function WorkDetail() {
  const { slug } = useParams();
  const work = portfolioData.find(item => item.slug === slug);

  // Fallback if not found
  if (!work) {
    return (
      <div style={{ padding: '10rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h1 className="serif">找不到此專案</h1>
        <Link to="/" className="btn-line" style={{ marginTop: '2rem' }}>返回首頁</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{work.title} | 1818 DESIGN STUDIO</title>
        <meta name="description" content={work.description} />
      </Helmet>

      {/* Detail Hero Section */}
      <header className="header-hero">
        <div className="container">
          <div className="reveal">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', fontSize: '0.875rem' }}>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>←</span> 返回作品集
            </Link>
            
            <span className="badge-minimal">PORTFOLIO DETAIL</span>
            
            <h1 className="serif" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.2, margin: '0 0 1.25rem' }}>
              {work.title}
            </h1>
            
            <p className="desc">
              {work.description}
            </p>
            
            <div className="title-line"></div>
          </div>
        </div>
      </header>

      {/* Work Content */}
      {slug === 'corporate-vi' ? (
        <section style={{ backgroundColor: 'var(--bg-main)', padding: '4rem 0 8rem' }}>
          <div className="container" style={{ textAlign: 'left' }}>
            
            <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h2 className="serif" style={{ fontSize: 'clamp(1.75rem, 5vw, 2rem)', marginBottom: '1rem', whiteSpace: 'nowrap' }}>方案內容包含</h2>
                <div style={{ height: '2px', width: '40px', background: 'var(--primary)', margin: '0 auto 1.5rem' }}></div>
                <p className="text-xs">WHAT WE DO</p>
            </div>

            <div className="grid-2" style={{ marginBottom: '8rem' }}>
                <div className="line-card reveal">
                    <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-thin)' }}>企業標誌設計</h3>
                    <ul className="text-sm">
                        <li style={{ marginBottom: '0.75rem' }}>專屬 Logo 設計</li>
                    </ul>
                </div>
                <div className="line-card reveal">
                    <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-thin)' }}>專業專用字體</h3>
                    <ul className="text-sm">
                        <li style={{ marginBottom: '0.75rem' }}>品牌專用的中英文文字設計</li>
                        <li style={{ marginBottom: '0.75rem' }}>文字與 Logo 的多種擺放組合</li>
                    </ul>
                </div>
                <div className="line-card reveal">
                    <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-thin)' }}>企業標準要素</h3>
                    <ul className="text-sm">
                        <li style={{ marginBottom: '0.75rem' }}>挑選最適合品牌的代表色</li>
                        <li style={{ marginBottom: '0.75rem' }}>整套視覺色彩的運用原則</li>
                    </ul>
                </div>
                <div className="line-card reveal">
                    <h3 className="serif" style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-thin)' }}>識別系統應用</h3>
                    <ul className="text-sm">
                        <li style={{ marginBottom: '0.75rem' }}>品牌公司 | 個人名片設計</li>
                        <li style={{ marginBottom: '0.75rem' }}>電子郵件簽名檔設計</li>
                    </ul>
                </div>
            </div>

            <div className="reveal" style={{ backgroundColor: 'var(--bg-sub)', padding: '4rem', borderRadius: '4px' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>設計方案費用</h2>
                    <p className="text-xs">DESIGN FEES</p>
                </div>

                <div className="pricing-summary">
                    <div className="pricing-item"><span className="pricing-label">企業標誌設計</span></div>
                    <div className="pricing-item"><span className="pricing-label">專業專用字體</span></div>
                    <div className="pricing-item"><span className="pricing-label">企業標準色 & 標準要素色彩計劃</span></div>
                    <div className="pricing-item"><span className="pricing-label">企業識別系統設計</span></div>

                    <div className="total-card">
                        <div className="total-title">合計總額<br/><span style={{ fontSize: '0.6rem', opacity: 0.6, textTransform: 'none' }}>Total Amount</span></div>
                        <div className="total-price">$32,000</div>
                    </div>

                    <p style={{ marginTop: '3rem', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right', letterSpacing: '0.05em', opacity: 0.8 }}>
                        註：上述費用不含稅。
                    </p>
                </div>
            </div>

          </div>
        </section>
      ) : (
        <section style={styles.detailSection}>
          <div className="container">
            <div className="reveal" style={{ 
              backgroundColor: 'var(--bg-sub)', 
              padding: '4rem', 
              borderRadius: '4px',
              border: '1px solid var(--border-thin)',
              textAlign: 'center'
            }}>
              <p className="text-sm" style={{ opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Project Overview
              </p>
              <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>專案內容建置中</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                此區域可以放置未來實際執行的作品圖檔、設計理念解說與細節展示。
                保持極簡的留白，讓作品自己說話。
              </p>
            </div>
          </div>
        </section>
      )}

      <ContactForm />
      <Footer />
    </>
  );
}
