export default function ContactForm() {
  return (
    <section style={{ backgroundColor: 'var(--bg-sub)' }}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>開啟專案</h2>
          <p className="text-xs">START A PROJECT</p>
        </div>

        <div className="reveal contact-card">
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>您的稱呼 Name</label>
              <input type="text" style={{ width: '100%', padding: '0.8rem', border: 'none', borderBottom: '1px solid var(--border-thin)', backgroundColor: 'transparent', outline: 'none', transition: 'border-color 0.3s' }} placeholder="請輸入姓名 / 公司名稱" />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>聯絡信箱 Email</label>
              <input type="email" style={{ width: '100%', padding: '0.8rem', border: 'none', borderBottom: '1px solid var(--border-thin)', backgroundColor: 'transparent', outline: 'none', transition: 'border-color 0.3s' }} placeholder="your@email.com" />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>需求簡述 Project Details</label>
              <textarea style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-thin)', backgroundColor: 'transparent', outline: 'none', transition: 'border-color 0.3s', minHeight: '120px', resize: 'vertical' }} placeholder="請簡短描述您的專案需求與設計項目..."></textarea>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button type="submit" className="btn-line" style={{ width: '100%' }}>傳送訊息 Send Message</button>
            </div>
          </form>

          <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.05em', opacity: 0.8 }}>
            或者透過 Calendly <a href="#" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>預約一對一免費諮詢</a>
          </p>
        </div>
      </div>
    </section>
  );
}
