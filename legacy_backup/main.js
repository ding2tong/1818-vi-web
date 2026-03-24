document.addEventListener('DOMContentLoaded', () => {
    // 捲動動畫：當元素進入視窗時淡入
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 套用動畫到所有含 .reveal 的元素
    document.querySelectorAll('.reveal').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        // 延遲一點點讓視覺更有層次
        setTimeout(() => {
            observer.observe(el);
        }, index * 50);
    });

    console.log('1818 VI Japanese Minimal Loaded');
});
