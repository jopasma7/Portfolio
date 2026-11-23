// Diccionario de traducciones ES/EN.
// Los elementos con data-i18n="clave" reciben t[clave] como innerHTML.
const translations = {
  es: {
    sidebarRole: "Desarrollador Full-Stack · React · Node.js",
    navInicio: "Inicio",
    navExperiencia: "Experiencia",
    navFormacion: "Formación",
    navContacto: "Contacto",
    cvFile: "assets/cv/CV_Alejandro_Pastor_ES.pdf",
    heroBadge: "Disponible · 100% remoto · Incorporación inmediata",
    heroHello: "¡Hola! Soy",
    heroRole: "Desarrollador Full-Stack · React · Node.js · PostgreSQL",
    heroIntro: `Ingeniero Informático (UPV, TFG calificado con 9/10) que desarrolla software <strong>desde 2020</strong>. Construyo aplicaciones completas de principio a fin: frontend en React, APIs REST con Node.js/Express y bases de datos SQL y NoSQL, <strong>desplegadas en producción y usadas a diario por usuarios reales</strong>.<br><br>
        Me siento cómodo en todo el ciclo: análisis, diseño de base de datos, backend, frontend, despliegue y mantenimiento. Trabajo de forma autónoma y aprendo rápido lo que el equipo necesite.`,
    ctaCv: "Descargar CV",
    ctaContact: "Contactar",
    expTitle: "Experiencia y Proyectos",
    expDesc: "Aplicaciones reales, en producción y en uso diario. Todas diseñadas, desarrolladas y desplegadas por mí de principio a fin.",
    f1Title: "Plataforma web y TPV para restaurante",
    f1Tag: "En uso real · TFG calificado con 9/10",
    f1List: `<li>Plataforma completa (≈12.000 líneas): web pública con dominio propio, área de clientes, panel de administración y <strong>TPV</strong>.</li>
          <li>API REST con 14 módulos (pedidos, reservas, tickets, carta, menú del día, usuarios, reseñas…) y ~20 entidades en PostgreSQL con Prisma.</li>
          <li><strong>Pedidos y notificaciones en tiempo real</strong> con Socket.io, emails transaccionales, tareas programadas e imágenes en Cloudinary.</li>
          <li>Seguridad: JWT con roles, bcrypt, Helmet, rate limiting, validación de entradas y protección XSS.</li>`,
    f1Link: "Ver web en producción ↗",
    f2Title: "Gestión de pacientes para un servicio de Nefrología",
    f2Tag: "En uso real por personal sanitario",
    f2List: `<li>Aplicación a medida (≈9.000 líneas) que sustituye el registro en papel: pacientes, accesos vasculares, complicaciones, historial, agenda de citas y profesionales.</li>
          <li>API REST con autenticación JWT, estadísticas e informes PDF exportables; versionado automatizado con GitHub Actions.</li>
          <li>Migración de la primera versión de escritorio (Electron + sincronización local/nube con Turso) a una aplicación web accesible desde cualquier dispositivo.</li>`,
    f4Title: "Planificador táctico de ofensivas",
    f4Tag: "En uso real por una tribu de ~25 jugadores · Demo pública",
    f4List: `<li>Aplicación web para coordinar ataques masivos en un juego de estrategia online: planifica, asigna y sincroniza cientos de ofensivas de toda una tribu.</li>
          <li><strong>Motor de asignación</strong> que optimiza moral, distancia y franjas horarias de cada jugador; asistente de 8 pasos para bombardeo, conquista y demolición.</li>
          <li><strong>Mapa táctico</strong> en canvas con más de 10.000 pueblos y <strong>centro de operaciones en vivo</strong> donde controlador y jugadores marcan sus envíos.</li>
          <li>Backend FastAPI + MongoDB (23 módulos de API), JWT con roles y accesos temporales por jugador, avisos por WhatsApp y despliegue con Docker. ≈28.000 líneas, 300+ commits.</li>`,
    f4Demo: "Probar la demo",
    f4Private: "Código privado · disponible bajo petición",
    f3Title: "Pétalo y Memorix · Software de gestión propio",
    f3Tag: "Publicados bajo mi marca Lottus Company",
    f3List: `<li>Dos aplicaciones de escritorio para Windows: gestión de floristerías (Pétalo) y de cementerios (Memorix).</li>
          <li>Ciclo de producto completo: <strong>sistema de licencias y pagos</strong>, instalador, <strong>actualizaciones automáticas</strong>, interfaz bilingüe ES/EN, informes PDF y manuales de usuario.</li>
          <li>Web comercial propia con fichas de producto, precios, prueba gratuita, pasarela de pago y páginas legales.</li>`,
    otherTitle: "Otros proyectos",
    o1Title: "Gestión de clientes y agenda",
    o1Desc: "Aplicación de escritorio desarrollada para un cliente: CRUD avanzado, filtros, importación/exportación de datos y varios usuarios.",
    o2Title: "Alquiler vacacional (microservicios)",
    o2Desc: "Plataforma de alojamientos, reservas y valoraciones con microservicios independientes, arquitectura MVC y logs detallados.",
    o3Title: "Bot de Telegram para reserva de aulas",
    o3Desc: "Gestión y solicitud de aulas universitarias mediante comandos, con roles de usuario y base de datos SQL.",
    o4Title: "Red social tipo Twitter (CLI)",
    o4Desc: "Cuentas, autenticación, publicaciones, likes y retweets; lógica de negocio y persistencia de datos.",
    o5Title: "Mapa de contagios COVID",
    o5Desc: "Aplicación web con mapa interactivo en tiempo real que muestra a los usuarios contagiados cercanos.",
    o6Title: "Gestor de tareas",
    o6Desc: "Aplicación web para organizar tareas y proyectos con prioridades, recordatorios y sincronización en la nube.",
    laborTitle: "Otra experiencia laboral",
    laborSectors: "Hostelería · Administración pública · Construcción · Estaciones de servicio — compaginado con los estudios",
    skillsTitle: "Habilidades técnicas",
    skLang: "Lenguajes",
    skMicro: "Microservicios",
    skDb: "Bases de datos",
    skDesktop: "Escritorio",
    skDesktopX: "Instaladores, auto-update y licencias",
    skBasic: "Conocimientos básicos",
    eduTitle: "Formación",
    degreeTitle: "Grado en Ingeniería Informática",
    degreeDate: "Finalizado en 2026 · TFG: 9/10",
    degreeDesc: "Universidad Politécnica de Valencia — Campus de Alcoy.<br>Especialidad en Tecnologías de la Información. TFG: plataforma web y TPV full-stack para restaurante, hoy en uso real.",
    langTitle: "Idiomas",
    langList: `<li><strong>Español:</strong> nativo</li>
            <li><strong>Valenciano:</strong> nativo</li>
            <li><strong>Inglés:</strong> B2 (certificado)</li>`,
    availTitle: "Disponibilidad",
    availList: `<li>Incorporación inmediata</li>
            <li>Trabajo 100% remoto</li>
            <li>Horario flexible para Europa y América</li>`,
    contactTitle: "Contacto",
    contactDesc: "¿Buscas un desarrollador para tu equipo? Escríbeme y te respondo en menos de 24 horas.",
    contactPhone: "Teléfono / WhatsApp",
    footer: "© 2026 Alejandro Pastor. Hecho con pasión y café ☕",
    datePresent: "Actualidad",
    themeDark: "Modo Oscuro",
    themeLight: "Modo Claro"
  },
  en: {
    sidebarRole: "Full-Stack Developer · React · Node.js",
    navInicio: "Home",
    navExperiencia: "Experience",
    navFormacion: "Education",
    navContacto: "Contact",
    cvFile: "assets/cv/CV_Alejandro_Pastor_EN.pdf",
    heroBadge: "Available · Fully remote · Immediate start",
    heroHello: "Hi! I'm",
    heroRole: "Full-Stack Developer · React · Node.js · PostgreSQL",
    heroIntro: `Computer Engineer (Universitat Politècnica de València, final project graded 9/10) building software <strong>since 2020</strong>. I deliver complete applications end to end: React frontends, REST APIs with Node.js/Express and SQL/NoSQL databases, <strong>deployed to production and used daily by real users</strong>.<br><br>
        I'm comfortable across the whole lifecycle: analysis, database design, backend, frontend, deployment and maintenance. I work autonomously and quickly learn whatever the team needs.`,
    ctaCv: "Download CV",
    ctaContact: "Contact me",
    expTitle: "Experience & Projects",
    expDesc: "Real applications, in production and in daily use. All designed, built and deployed by me end to end.",
    f1Title: "Restaurant web platform & POS",
    f1Tag: "In real use · Final degree project graded 9/10",
    f1List: `<li>Complete platform (~12,000 lines): public website on a custom domain, customer area, admin panel and <strong>point of sale (POS)</strong>.</li>
          <li>REST API with 14 modules (orders, bookings, tickets, menus, daily menu, users, reviews…) and ~20 PostgreSQL entities with Prisma.</li>
          <li><strong>Real-time orders and notifications</strong> with Socket.io, transactional email, scheduled jobs and Cloudinary image uploads.</li>
          <li>Security: role-based JWT, bcrypt, Helmet, rate limiting, input validation and XSS protection.</li>`,
    f1Link: "See it live ↗",
    f2Title: "Patient management for a hospital Nephrology unit",
    f2Tag: "In real use by healthcare staff",
    f2List: `<li>Custom application (~9,000 lines) replacing paper records: patients, vascular accesses, complications, history, appointments and staff.</li>
          <li>REST API with JWT authentication, statistics and exportable PDF reports; automated versioning with GitHub Actions.</li>
          <li>Migrated the first desktop version (Electron + local/cloud sync with Turso) to a web app accessible from any device.</li>`,
    f4Title: "Tactical attack planner",
    f4Tag: "In real use by a ~25-player tribe · Public demo",
    f4List: `<li>Web app to coordinate large-scale attacks in an online strategy game: plans, assigns and synchronizes hundreds of offensives for a whole tribe.</li>
          <li><strong>Assignment engine</strong> optimizing morale, distance and each player's time windows; 8-step wizard for bombardment, conquest and demolition operations.</li>
          <li><strong>Tactical map</strong> on canvas with 10,000+ villages and a <strong>live operations center</strong> where the controller and players mark their sends.</li>
          <li>FastAPI + MongoDB backend (23 API modules), role-based JWT with temporary per-player access, WhatsApp alerts and Docker deployment. ~28,000 lines, 300+ commits.</li>`,
    f4Demo: "Try the demo",
    f4Private: "Private code · available on request",
    f3Title: "Pétalo & Memorix · Own management software",
    f3Tag: "Released under my own brand, Lottus Company",
    f3List: `<li>Two Windows desktop apps: flower shop management (Pétalo) and cemetery management (Memorix).</li>
          <li>Full product cycle: <strong>licensing and payments</strong>, installer, <strong>auto-updates</strong>, bilingual ES/EN interface, PDF reports and user manuals.</li>
          <li>Own sales website with product pages, pricing, free trial, payment checkout and legal pages.</li>`,
    otherTitle: "Other projects",
    o1Title: "Client & calendar management",
    o1Desc: "Desktop app built for a client: advanced CRUD, filters, data import/export and multi-user support.",
    o2Title: "Vacation rentals (microservices)",
    o2Desc: "Accommodation, booking and review platform built with independent microservices, MVC architecture and detailed logging.",
    o3Title: "Telegram bot for room booking",
    o3Desc: "University room management and booking through commands, with user roles and an SQL database.",
    o4Title: "Twitter-like social network (CLI)",
    o4Desc: "Accounts, authentication, posts, likes and retweets; business logic and data persistence.",
    o5Title: "COVID contagion map",
    o5Desc: "Web app with a real-time interactive map showing nearby infected users.",
    o6Title: "Task manager",
    o6Desc: "Web app to organize tasks and projects with priorities, reminders and cloud sync.",
    laborTitle: "Other work experience",
    laborSectors: "Hospitality · Public administration · Construction · Service stations — combined with my studies",
    skillsTitle: "Technical skills",
    skLang: "Languages",
    skMicro: "Microservices",
    skDb: "Databases",
    skDesktop: "Desktop",
    skDesktopX: "Installers, auto-update & licensing",
    skBasic: "Basic knowledge",
    eduTitle: "Education",
    degreeTitle: "BSc in Computer Engineering",
    degreeDate: "Completed 2026 · Final project: 9/10",
    degreeDesc: "Universitat Politècnica de València — Alcoy Campus.<br>Major in Information Technology. Final project: full-stack restaurant web platform and POS, now in real use.",
    langTitle: "Languages",
    langList: `<li><strong>Spanish:</strong> native</li>
            <li><strong>Valencian:</strong> native</li>
            <li><strong>English:</strong> B2 (certified)</li>`,
    availTitle: "Availability",
    availList: `<li>Immediate start</li>
            <li>Fully remote work</li>
            <li>Flexible hours for Europe and the Americas</li>`,
    contactTitle: "Contact",
    contactDesc: "Looking for a developer for your team? Write to me and I'll reply within 24 hours.",
    contactPhone: "Phone / WhatsApp",
    footer: "© 2026 Alejandro Pastor. Made with passion and coffee ☕",
    datePresent: "Present",
    themeDark: "Dark Mode",
    themeLight: "Light Mode"
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function setLang(lang) {
  const t = translations[lang] || translations.es;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  setLangSidebar && setLangSidebar._internalCall !== true && setLangSidebar(lang);
  setLangMobile && setLangMobile._internalCall !== true && setLangMobile(lang);

  // Barra lateral y navegación (escritorio y móvil)
  const idMap = {
    'sidebar-role': t.sidebarRole,
    'mobile-sidebar-role': t.sidebarRole,
    'nav-inicio': t.navInicio,
    'nav-experiencia': t.navExperiencia,
    'nav-formacion': t.navFormacion,
    'nav-contacto': t.navContacto,
    'mobile-nav-inicio': t.navInicio,
    'mobile-nav-experiencia': t.navExperiencia,
    'mobile-nav-formacion': t.navFormacion,
    'mobile-nav-contacto': t.navContacto
  };
  Object.entries(idMap).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // Textos marcados con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.getAttribute('data-i18n')];
    if (val !== undefined) el.innerHTML = val;
  });

  // "Actualidad / Present" en las fechas
  document.querySelectorAll('.date-present').forEach(el => { el.textContent = t.datePresent; });

  // Enlaces de descarga del CV en el idioma activo
  document.querySelectorAll('.cv-link').forEach(a => { a.setAttribute('href', t.cvFile); });

  updateThemeLabels();
}

function setLangSidebar(lang) {
  setLangSidebar._internalCall = true;
  setLang(lang);
  setLangSidebar._internalCall = false;
  const flag = document.getElementById('lang-selected-flag-sidebar');
  const label = document.getElementById('lang-selected-label-sidebar');
  if (flag && label) {
    if (lang === 'es') { flag.src = 'https://flagcdn.com/w20/es.png'; flag.alt = 'Español'; label.textContent = 'Español'; }
    else { flag.src = 'https://flagcdn.com/w20/gb.png'; flag.alt = 'English'; label.textContent = 'English'; }
  }
}

function setupDropdownSidebar() {
  const dropdown = document.getElementById('lang-dropdown-sidebar');
  const selected = document.getElementById('lang-selected-sidebar');
  const options = document.getElementById('lang-options-sidebar');
  if (selected && options) {
    selected.addEventListener('click', () => { options.classList.toggle('hidden'); });
    document.querySelectorAll('.lang-option-sidebar').forEach(opt => {
      opt.addEventListener('click', function() {
        setLangSidebar(this.getAttribute('data-lang'));
        options.classList.add('hidden');
      });
    });
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) options.classList.add('hidden');
    });
  }
}

// Aplica el tema guardado (también en <head> inline para evitar FOUC)
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light-theme');
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light-theme');
  }
})();

function setLangMobile(lang) {
  setLangMobile._internalCall = true;
  setLang(lang);
  setLangMobile._internalCall = false;
  const flag = document.getElementById('lang-selected-flag-mobile');
  const label = document.getElementById('lang-selected-label-mobile');
  if (flag && label) {
    if (lang === 'es') { flag.src = 'https://flagcdn.com/w20/es.png'; flag.alt = 'Español'; label.textContent = 'Español'; }
    else { flag.src = 'https://flagcdn.com/w20/gb.png'; flag.alt = 'English'; label.textContent = 'English'; }
  }
}

function setupDropdownMobile() {
  const dropdown = document.getElementById('lang-dropdown-mobile');
  const selected = document.getElementById('lang-selected-mobile');
  const options = document.getElementById('lang-options-mobile');
  if (selected && options) {
    selected.addEventListener('click', () => {
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
    document.querySelectorAll('.lang-option-mobile').forEach(opt => {
      opt.addEventListener('click', function() {
        setLangMobile(this.getAttribute('data-lang'));
        options.style.display = 'none';
      });
    });
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) options.style.display = 'none';
    });
  }
}

function updateThemeLabels() {
  const root = document.documentElement;
  const body = document.body;
  const btnMobile = document.getElementById('theme-toggle-mobile');
  const labelMobile = document.getElementById('theme-label-mobile');
  const btnSidebar = document.getElementById('theme-toggle-sidebar');
  const labelSidebar = document.getElementById('theme-label-sidebar');
  const isLight = root.classList.contains('light-theme');
  const t = translations[currentLang] || translations.es;
  const label = isLight ? t.themeLight : t.themeDark;
  if (labelMobile && btnMobile) {
    labelMobile.textContent = label;
    btnMobile.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  }
  if (labelSidebar && btnSidebar) {
    labelSidebar.textContent = label;
    btnSidebar.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  }
  if (isLight) {
    body.classList.remove('dark'); body.classList.add('light-theme');
    root.classList.remove('dark'); root.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme'); body.classList.add('dark');
    root.classList.remove('light-theme'); root.classList.add('dark');
  }
}

function setThemeBtns() {
  const root = document.documentElement;
  function toggleTheme() {
    root.classList.toggle('light-theme');
    localStorage.setItem('theme', root.classList.contains('light-theme') ? 'light' : 'dark');
    updateThemeLabels();
  }
  const btnMobile = document.getElementById('theme-toggle-mobile');
  const btnSidebar = document.getElementById('theme-toggle-sidebar');
  if (btnMobile) btnMobile.addEventListener('click', toggleTheme);
  if (btnSidebar) btnSidebar.addEventListener('click', toggleTheme);
  updateThemeLabels();
}

setupDropdownMobile();
setupDropdownSidebar();
setThemeBtns();

// Mobile sidebar
const hamburger = document.getElementById('hamburger-menu');
const mobileSidebar = document.getElementById('mobile-sidebar');
const closeMobileSidebar = document.getElementById('close-mobile-sidebar');

function closeMobileSidebarFn() {
  if (!mobileSidebar) return;
  mobileSidebar.style.transform = 'translateX(-100%)';
  setTimeout(() => { mobileSidebar.style.display = 'none'; }, 250);
}

function updateHamburgerVisibility() {
  if (window.innerWidth <= 700) {
    if (hamburger) hamburger.style.display = 'flex';
  } else {
    if (hamburger) hamburger.style.display = 'none';
    if (mobileSidebar) { mobileSidebar.style.display = 'none'; mobileSidebar.style.transform = 'translateX(-100%)'; }
  }
}
window.addEventListener('resize', updateHamburgerVisibility);
window.addEventListener('DOMContentLoaded', updateHamburgerVisibility);

if (hamburger && mobileSidebar && closeMobileSidebar) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileSidebar.style.display = 'flex';
    setTimeout(() => { mobileSidebar.style.transform = 'translateX(0)'; }, 10);
  });
  closeMobileSidebar.addEventListener('click', closeMobileSidebarFn);
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 700 && mobileSidebar.style.display === 'flex' && !mobileSidebar.contains(e.target) && e.target !== hamburger) {
      closeMobileSidebarFn();
    }
  });
  // Auto-cerrar al pulsar un enlace de navegación en móvil
  mobileSidebar.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => setTimeout(closeMobileSidebarFn, 100));
  });
}

function updateControlsVisibility() {
  const sidebarControls = document.getElementById('sidebar-controls');
  const topControls = document.getElementById('top-controls');
  if (window.innerWidth <= 700) {
    if (topControls) topControls.style.display = 'flex';
    if (sidebarControls) sidebarControls.style.display = 'none';
  } else {
    if (topControls) topControls.style.display = 'none';
    if (sidebarControls) sidebarControls.style.display = 'flex';
  }
}
window.addEventListener('resize', updateControlsVisibility);
window.addEventListener('DOMContentLoaded', updateControlsVisibility);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    }
  });
});

// Inicializar iconos Lucide
window.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
});

// Fade-in sections on scroll
function fadeInSections() {
  document.querySelectorAll('.section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) sec.classList.add('fade-in');
  });
}
window.addEventListener('DOMContentLoaded', fadeInSections);
window.addEventListener('scroll', fadeInSections);

// Active nav indicator via IntersectionObserver
window.addEventListener('DOMContentLoaded', () => {
  const sections = ['inicio', 'experiencia', 'formacion', 'contacto'];
  const navLinks = {};
  sections.forEach(id => {
    navLinks[id] = [document.getElementById(`nav-${id}`), document.getElementById(`mobile-nav-${id}`)];
  });

  function setActive(id) {
    sections.forEach(sid => {
      navLinks[sid].forEach(link => {
        if (!link) return;
        if (sid === id) {
          link.style.color = '#64ffda';
          link.style.fontWeight = '800';
        } else {
          link.style.color = '';
          link.style.fontWeight = '';
        }
      });
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { threshold: 0.25 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});

// Restaurar idioma guardado
(function() {
  const savedLang = localStorage.getItem('lang') || 'es';
  if (savedLang === 'en') { setLangSidebar('en'); setLangMobile('en'); }
})();

// Formulario contacto (simulado)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = '¡Mensaje enviado! (Simulado)';
    contactForm.reset();
  });
}
