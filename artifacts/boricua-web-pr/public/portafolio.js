/* ============================================================
   BORICUA WEB PR — Portfolio Slideshow & Lightbox
   ============================================================ */

const demos = [
  {
    title: "Restaurante Tropical",
    type: "Restaurante",
    pages: [
      { name: "Inicio",        img: "/demo-restaurant-1.png" },
      { name: "Sobre Nosotros",img: "/demo-restaurant-2.png" },
      { name: "Menú",          img: "/demo-restaurant-3.png" },
      { name: "Galería",       img: "/demo-restaurant-4.png" },
      { name: "Contacto",      img: "/demo-restaurant-5.png" },
    ]
  },
  {
    title: "Eco Aventuras PR",
    type: "Tour Company",
    pages: [
      { name: "Inicio",        img: "/demo-tour-1.png" },
      { name: "Sobre Nosotros",img: "/demo-tour-2.png" },
      { name: "Tours",         img: "/demo-tour-3.png" },
      { name: "Galería",       img: "/demo-tour-4.png" },
      { name: "Contacto",      img: "/demo-tour-5.png" },
    ]
  },
  {
    title: "Ocean View Stay",
    type: "Airbnb",
    pages: [
      { name: "Inicio",         img: "/demo-airbnb-1.png" },
      { name: "La Propiedad",   img: "/demo-airbnb-2.png" },
      { name: "Habitaciones",   img: "/demo-airbnb-3.png" },
      { name: "Galería",        img: "/demo-airbnb-4.png" },
      { name: "Reservaciones",  img: "/demo-airbnb-5.png" },
    ]
  },
  {
    title: "Estilo & Belleza",
    type: "Salón",
    pages: [
      { name: "Inicio",        img: "/demo-salon-1.png" },
      { name: "Sobre Nosotros",img: "/demo-salon-2.png" },
      { name: "Servicios",     img: "/demo-salon-3.png" },
      { name: "Galería",       img: "/demo-salon-4.png" },
      { name: "Contacto",      img: "/demo-salon-5.png" },
    ]
  },
  {
    title: "Fuerza PR Gym",
    type: "Gimnasio",
    pages: [
      { name: "Inicio",        img: "/demo-gym-1.png" },
      { name: "Sobre Nosotros",img: "/demo-gym-2.png" },
      { name: "Clases",        img: "/demo-gym-3.png" },
      { name: "Galería",       img: "/demo-gym-4.png" },
      { name: "Membresías",    img: "/demo-gym-5.png" },
    ]
  },
  {
    title: "Rutas Locales",
    type: "Transporte",
    pages: [
      { name: "Inicio",        img: "/demo-travel-1.png" },
      { name: "Sobre Nosotros",img: "/demo-travel-2.png" },
      { name: "Rutas",         img: "/demo-travel-3.png" },
      { name: "Galería",       img: "/demo-travel-4.png" },
      { name: "Reservaciones", img: "/demo-travel-5.png" },
    ]
  },
];

// Per-card current slide index
const cardSlides = demos.map(() => 0);
// Lightbox state
let lbDemo = 0;
let lbSlide = 0;

/* ---------- Build the card HTML ---------- */
function buildCards() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;

  demos.forEach((demo, di) => {
    const card = document.createElement('div');
    card.className = 'demo-card reveal';
    card.style.setProperty('transition-delay', `${di * 0.08}s`);

    /* Slideshow */
    const slideshow = document.createElement('div');
    slideshow.className = 'slideshow';

    demo.pages.forEach((page, pi) => {
      const img = document.createElement('img');
      img.src = page.img;
      img.alt = `${demo.title} – ${page.name}`;
      if (pi === 0) img.classList.add('active');
      slideshow.appendChild(img);
    });

    /* Badge */
    const badge = document.createElement('div');
    badge.className = 'slide-badge';
    badge.id = `badge-${di}`;
    badge.textContent = demo.pages[0].name;
    slideshow.appendChild(badge);

    /* Prev arrow */
    const prev = document.createElement('button');
    prev.className = 'slide-arrow prev';
    prev.setAttribute('aria-label', 'Anterior');
    prev.innerHTML = '&#8249;';
    prev.addEventListener('click', (e) => { e.stopPropagation(); goSlide(di, -1); });
    slideshow.appendChild(prev);

    /* Next arrow */
    const next = document.createElement('button');
    next.className = 'slide-arrow next';
    next.setAttribute('aria-label', 'Siguiente');
    next.innerHTML = '&#8250;';
    next.addEventListener('click', (e) => { e.stopPropagation(); goSlide(di, 1); });
    slideshow.appendChild(next);

    /* Dots */
    const dots = document.createElement('div');
    dots.className = 'slide-dots';
    dots.id = `dots-${di}`;
    demo.pages.forEach((_, pi) => {
      const dot = document.createElement('button');
      dot.className = 'slide-dot' + (pi === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${pi + 1}`);
      dot.addEventListener('click', (e) => { e.stopPropagation(); setSlide(di, pi); });
      dots.appendChild(dot);
    });
    slideshow.appendChild(dots);

    card.appendChild(slideshow);

    /* Info */
    const info = document.createElement('div');
    info.className = 'demo-info';
    info.innerHTML = `
      <div class="demo-type">${demo.type}</div>
      <div class="demo-title">${demo.title}</div>
      <button class="btn-demo" data-demo="${di}">
        <span>&#x25A1;</span> Ver Demo
      </button>
    `;
    card.appendChild(info);
    grid.appendChild(card);
  });

  /* Open lightbox on "Ver Demo" click */
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-demo');
    if (btn) {
      const di = parseInt(btn.dataset.demo, 10);
      openLightbox(di, cardSlides[di]);
    }
  });

  /* Trigger scroll reveal for cards */
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.demo-card.reveal').forEach(el => observer.observe(el));
  });
}

/* ---------- Slideshow navigation ---------- */
function goSlide(di, dir) {
  const n = demos[di].pages.length;
  setSlide(di, (cardSlides[di] + dir + n) % n);
}

function setSlide(di, pi) {
  cardSlides[di] = pi;
  const cards = document.querySelectorAll('.demo-card');
  const card = cards[di];
  if (!card) return;

  card.querySelectorAll('.slideshow img').forEach((img, i) => {
    img.classList.toggle('active', i === pi);
  });
  card.querySelectorAll('.slide-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === pi);
  });
  const badge = document.getElementById(`badge-${di}`);
  if (badge) badge.textContent = demos[di].pages[pi].name;
}

/* ---------- Lightbox ---------- */
function buildLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  const stage = lb.querySelector('.lightbox-stage');
  demos.forEach((demo, di) => {
    demo.pages.forEach((page, pi) => {
      const img = document.createElement('img');
      img.src = page.img;
      img.alt = page.name;
      img.dataset.demo = di;
      img.dataset.page = pi;
      stage.appendChild(img);
    });
  });

  /* Dots container */
  const dotsEl = lb.querySelector('.lightbox-dots');

  /* Prev/Next buttons */
  lb.querySelector('.lb-arrow.prev').addEventListener('click', () => lbGo(-1));
  lb.querySelector('.lb-arrow.next').addEventListener('click', () => lbGo(1));

  /* Close */
  lb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

  /* Keyboard */
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowRight') lbGo(1);
    else if (e.key === 'ArrowLeft') lbGo(-1);
    else if (e.key === 'Escape') closeLightbox();
  });
}

function openLightbox(di, pi) {
  lbDemo = di;
  lbSlide = pi;
  lbRender();
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function lbGo(dir) {
  const n = demos[lbDemo].pages.length;
  lbSlide = (lbSlide + dir + n) % n;
  lbRender();
}

function lbRender() {
  const lb = document.getElementById('lightbox');
  const demo = demos[lbDemo];

  /* title & sub */
  lb.querySelector('.lightbox-title').textContent = demo.title;
  lb.querySelector('.lightbox-sub').textContent = `${demo.pages[lbSlide].name} (${lbSlide + 1} de ${demo.pages.length})`;

  /* images */
  lb.querySelectorAll('.lightbox-stage img').forEach(img => {
    const match = parseInt(img.dataset.demo) === lbDemo && parseInt(img.dataset.page) === lbSlide;
    img.classList.toggle('active', match);
  });

  /* dots */
  const dotsEl = lb.querySelector('.lightbox-dots');
  dotsEl.innerHTML = '';
  demo.pages.forEach((_, pi) => {
    const dot = document.createElement('button');
    dot.className = 'lb-dot' + (pi === lbSlide ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${pi + 1}`);
    dot.addEventListener('click', () => { lbSlide = pi; lbRender(); });
    dotsEl.appendChild(dot);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildCards();
  buildLightbox();
});
