async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) return false;
    try {
        const res = await fetch(file, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        element.innerHTML = await res.text();
        return true;
    } catch (err) {
        console.error(`Error loading ${file}:`, err);
        return false;
    }
}

function initializeNavbar() {
    const nav = document.querySelector('.portfolio-nav');
    if (!nav) return;

    const toggle = nav.querySelector('.portfolio-nav-toggle');
    const links = nav.querySelector('.portfolio-nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Load components when the DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    const navbarLoaded = await loadComponent('navbar', 'components/navbar.html');
    if (navbarLoaded) initializeNavbar();
    loadComponent('background', 'components/background.html');
});