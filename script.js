/* ==========================================================
   BIO VERONICA — Interações
   - Animações de entrada com IntersectionObserver
   - Feedback tátil em dispositivos touch
   - Pequenos refinamentos
   ========================================================== */

(function () {
    'use strict';

    // ---------- Animações de entrada ----------
    const animatedElements = document.querySelectorAll('[data-animate]');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const delay = parseInt(el.dataset.delay || '0', 10);
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, delay * 90); // 90ms entre cada item
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );

        animatedElements.forEach((el) => observer.observe(el));
    } else {
        // Fallback: mostrar tudo de uma vez
        animatedElements.forEach((el) => el.classList.add('visible'));
    }

    // ---------- Feedback tátil no toque ----------
    // Adiciona classe "pressed" ao tocar para feedback visual imediato
    const links = document.querySelectorAll('.bio-link');

    links.forEach((link) => {
        link.addEventListener(
            'touchstart',
            () => {
                link.classList.add('pressed');
            },
            { passive: true }
        );

        link.addEventListener(
            'touchend',
            () => {
                setTimeout(() => link.classList.remove('pressed'), 150);
            },
            { passive: true }
        );

        // Cancela estado se o usuário arrastar para fora
        link.addEventListener(
            'touchcancel',
            () => {
                link.classList.remove('pressed');
            },
            { passive: true }
        );
    });

    // ---------- Vibração suave ao clicar (quando suportado) ----------
    links.forEach((link) => {
        link.addEventListener('click', () => {
            if (navigator.vibrate) {
                navigator.vibrate(8); // 8ms — discreto
            }
        });
    });

    // ---------- Previne zoom duplo-toque no iOS ----------
    let lastTouchEnd = 0;
    document.addEventListener(
        'touchend',
        (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        },
        { passive: false }
    );

    // ---------- Log de confirmação em ambiente de desenvolvimento ----------
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Bio Veronica carregada. Ambiente de desenvolvimento.');
    }
})();
