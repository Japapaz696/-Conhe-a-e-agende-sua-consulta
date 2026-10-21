/* ==========================================================
   BIO VERONICA — Interações
   O itinerário: a rota se desenha uma vez; as paradas respondem ao toque.
   ========================================================== */

(function () {
    'use strict';

    var trajeto = document.querySelector('.trajeto');

    // ---------- A ROTA SE DESENHA ----------
    // Um único momento de movimento: o traço cresce do topo até o destino.
    // A linha é criada aqui para que o conteúdo nunca dependa de JS.
    if (trajeto && !trajeto.querySelector('.rota-linha')) {
        var linha = document.createElement('span');
        linha.className = 'rota-linha';
        linha.setAttribute('aria-hidden', 'true');
        trajeto.insertBefore(linha, trajeto.firstChild);
    }

    // ---------- ENTRADA ESCALONADA ----------
    // Aplicada só depois do carregamento, para o conteúdo nunca depender de JS.
    var semMovimento = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!semMovimento) {
        var origem = document.querySelector('.origem');
        if (origem) origem.setAttribute('data-entra', '1');

        var paradas = document.querySelectorAll('.parada');
        paradas.forEach(function (p, i) {
            p.setAttribute('data-entra', String(Math.min(i + 2, 4)));
        });

        var chegada = document.querySelector('.chegada');
        if (chegada) chegada.setAttribute('data-entra', '4');
    }

    // ---------- FEEDBACK AO TOQUE ----------
    var alvos = document.querySelectorAll('.parada');

    alvos.forEach(function (el) {
        el.addEventListener('touchstart', function () {
            el.classList.add('pressionado');
        }, { passive: true });

        el.addEventListener('touchend', function () {
            setTimeout(function () { el.classList.remove('pressionado'); }, 150);
        }, { passive: true });

        el.addEventListener('touchcancel', function () {
            el.classList.remove('pressionado');
        }, { passive: true });

        el.addEventListener('click', function () {
            if (navigator.vibrate) navigator.vibrate(8); // discreto
        });
    });

    // ---------- ZOOM DUPLO-TOQUE (iOS) ----------
    var ultimoToque = 0;
    document.addEventListener('touchend', function (e) {
        var agora = Date.now();
        if (agora - ultimoToque <= 300) e.preventDefault();
        ultimoToque = agora;
    }, { passive: false });

    // ---------- CONFIRMAÇÃO EM DESENVOLVIMENTO ----------
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Bio Veronica — itinerário carregado (desenvolvimento).');
    }
})();
