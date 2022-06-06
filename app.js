(() => {

    ham.addEventListener('click', () => {
        document.getElementById('ham').classList.toggle('open');
        document.getElementById('nav').classList.toggle('visible');
        document.getElementById('hone').classList.toggle('hidden');
        document.getElementById('grid').classList.toggle('hidden');
        document.getElementById('links').classList.toggle('hidden');
    });

    const observerOptions = {
        rootMargin: '1000px 0px 0px 0px',
        threshold: 0.5
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, observerOptions);
    document.querySelectorAll('#grid>div').forEach(el => obs.observe(el));

})();