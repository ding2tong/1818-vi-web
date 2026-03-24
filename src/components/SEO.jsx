import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      {/* Title & Meta */}
      <title>乙八乙八平面設計工作室 | 高質感品牌與視覺設計</title>
      <meta name="description" content="乙八乙八平面設計工作室 (1818 DESIGN STUDIO) 提供企業 VI、UI/UX、包裝設計與插畫等全方位視覺解決方案。以日系極簡美學，打造品牌核心靈魂。" />
      <meta name="keywords" content="1818, 乙八乙八, 平面設計, VI設計, 品牌識別, 標誌設計, 企業識別系統, 網頁設計, UI設計, 包裝設計, 插畫" />
      <meta name="author" content="1818 DESIGN STUDIO" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://1818design.tw" /> {/* Placeholder URL */}
      <meta property="og:title" content="乙八乙八平面設計工作室 | 1818 DESIGN STUDIO" />
      <meta property="og:description" content="專業的品牌視覺與平面設計。以極致極簡展現品牌力。" />
      <meta property="og:image" content="/乙八乙八 工作區域 1.png" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "ProfessionalService",
            "name": "乙八乙八平面設計工作室",
            "description": "提供包含企業標誌、UI/UX 網頁設計、產品包裝與各種文宣設計之完整服務。",
            "provider": {
              "@type": "LocalBusiness",
              "name": "1818 DESIGN STUDIO",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Taipei",
                "addressCountry": "TW"
              }
            }
          }
        `}
      </script>
    </Helmet>
  );
}
