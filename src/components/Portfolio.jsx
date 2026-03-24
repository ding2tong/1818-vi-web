import React from 'react';
import { Link } from 'react-router-dom';

export const portfolioData = [
  { id: 1, slug: 'corporate-vi', title: '企業精神 | Logo VI', description: '打造品牌核心價值與專屬識別系統。' },
  { id: 2, slug: 'dm-materials', title: 'DM．產品．衛教單 | 文宣說明', description: '清晰傳遞產品與專業資訊的宣傳物。' },
  { id: 3, slug: 'books-manuals', title: '書籍手冊 | 設計排版．印刷', description: '講究細節與閱讀體驗的編輯與排版。' },
  { id: 4, slug: 'ui-design', title: 'UI 設計', description: '流暢且直覺的數位產品使用者介面。' },
  { id: 5, slug: 'web-banner', title: '網頁．粉專 | Banner', description: '吸引目光、提升轉換率的社群行銷視覺。' },
  { id: 6, slug: 'events-promo', title: '活動．商品 | 宣傳', description: '營造氛圍與帶動話題的宣傳視覺企劃。' },
  { id: 7, slug: 'illustration-wallpaper', title: '插畫．貼圖．背景桌布', description: '具有溫度與風格的客製化專屬插畫。' },
  { id: 8, slug: 'print-design', title: '印刷設計', description: '完美呈現紙材與加工質感的實體印刷。' },
  { id: 9, slug: 'packaging', title: '包裝 | 產品設計', description: '提升產品價值與拆箱體驗的外觀設計。' },
];

export default function Portfolio() {
  return (
    <section style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>專業服務項目</h2>
          <div style={{ height: '2px', width: '40px', background: 'var(--primary)', margin: '0 auto 1.5rem' }}></div>
          <p className="text-xs">SERVICES & EXPERTISE</p>
        </div>

        <div className="grid-2">
          {portfolioData.map((item, index) => (
            <Link 
              key={item.id} 
              to={`/work/${item.slug}`}
              className="line-card reveal" 
              style={{ transitionDelay: `${index * 0.05}s`, textDecoration: 'none', color: 'inherit' }}
            >
              <h3 className="serif">{item.title}</h3>
              <ul className="text-sm">
                <li>{item.description}</li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
