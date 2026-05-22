// Diccionario de traducciones ES/EN
const translations = {
  es: {
    sidebarName: "Alejandro Pastor",
    sidebarRole: "Ingeniero en Software | Especialista en Desarrollo de Soluciones Tecnológicas",
    navInicio: "Inicio",
    navExperiencia: "Experiencia",
    navFormacion: "Formación",
    navContacto: "Contacto",
    mainTitle: '¡Hola! Soy <span class="gradient-title" style="font-size:2.8rem;line-height:1.05;vertical-align:middle;display:inline-block;">Alejandro Pastor</span>',
    mainSubtitle: "Ingeniero en Software · Fundador de Lottus Company · Full-Stack, Backend, Microservicios y Bases de Datos",
    mainIntro: `Ingeniero en Software con experiencia práctica <strong>desde 2020</strong>, especializado en desarrollo web full-stack, backend, microservicios y bases de datos. Fundador y desarrollador principal de <a href="https://lottuscompany.com/" target="_blank" rel="noopener noreferrer" style="color:#003380;text-decoration:underline;" class="dark-link-teal">Lottus Company</a>, empresa de software con productos SaaS en producción.<br><br>
    A punto de finalizar el Grado en Ingeniería Informática (UPV, Campus Alcoy). Mi pasión por la tecnología comenzó a los 10 años: creaba plugins en Java para Minecraft y scripts en JavaScript y C para juegos de navegador, antes de recibir ninguna clase de informática.<br><br>
    He compaginado mis estudios con trabajo en hostelería, administración pública, construcción y otros sectores durante más de 8 años, lo que me ha forjado una gran resiliencia y disciplina. Nunca dejé de aprender ni de crear: bots en Python, aplicaciones de escritorio con Electron y soluciones web con Node.js, React, SQL y NoSQL.<br><br>
    <strong>Listo para aportar valor desde el primer día en cualquier equipo tecnológico.</strong>`,
    expTitle: "Experiencia y Proyectos",
    expDesc: "Desarrollador freelance desde 2020, con proyectos reales en producción para clientes y uso propio. Fundador de Lottus Company (2024), empresa de software especializada en soluciones SaaS para gestión empresarial.",
    expUniTitle: "Proyectos Universitarios",
    uni1Title: "Gestor de Tareas Inteligente",
    uni1Desc: "Aplicación web para organizar tareas personales y profesionales, con recordatorios inteligentes, sincronización en la nube e interfaz intuitiva. Permite gestionar proyectos, establecer prioridades y recibir notificaciones automáticas.",
    uni1Tech: "React, Node.js, MongoDB",
    uni2Title: "Bot Telegram para gestión de Aulas",
    uni2Desc: "Bot de Telegram para la gestión y solicitud de aulas en la universidad. Permite CRUD de usuarios mediante comandos, asignación de roles y gestión de reservas, todo respaldado por un modelo de base de datos SQL.",
    uni2Tech: "Python, Telegram Bot API, SQL, Roles de usuario",
    uni3Title: "Aplicación Web COVID",
    uni3Desc: "Aplicación web para detectar usuarios infectados en la zona, similar a Pokémon Go: incluye un mapa interactivo donde el usuario se mueve y puede visualizar a las personas contagiadas cercanas en tiempo real.",
    uni3Tech: "JavaScript, Node.js, MySQL, APIs de mapas",
    uni4Title: "Sistema de mensajería tipo Twitter (CLI)",
    uni4Desc: "Aplicación de consola que simula una red social, con gestión de cuentas, autenticación, publicaciones, likes y retweets. Implementación de lógica de negocio y persistencia de datos.",
    uni4Tech: "JavaScript, Node.js, MongoDB",
    uni5Title: "Aplicación web de alquiler vacacional",
    uni5Desc: "Plataforma web para la gestión de alojamientos turísticos, reservas y valoraciones. Creada con microservicios independientes integrados de forma separada. Incluye arquitectura MVC, control de versiones en GitHub y gestión de errores con logs detallados.",
    uni5Tech: "TypeScript, Node.js, Express, MongoDB, MySQL, SQLite, Bootstrap, Microservicios, Logs",
    expPersonalTitle: "Proyectos Personales",
    lottusRole: "Fundador & Desarrollador Principal",
    lottusDate: "2024 — Presente",
    lottusDesc: "Empresa de software que fundé y donde soy el principal desarrollador. Especializados en desarrollo y comercialización de soluciones SaaS para gestión empresarial. Actualmente con dos productos en producción y nuevas soluciones en desarrollo. Herramientas potentes, accesibles y fáciles de usar para autónomos y pequeños negocios.",
    personal1Title: "Pétalo",
    personal1Desc: "Aplicación de escritorio para la gestión integral de floristerías: control de ventas, inventario, proveedores, clientes y generación de reportes. Incluye panel de administración, dashboard visual y sistema de usuarios. Desarrollada con Electron y Node.js.",
    personal1Link: "Ver en GitHub",
    personal1LottusLink: "Ver en Lottus",
    personal2Title: "Memorix",
    personal2Desc: "Sistema de gestión de cementerios para registrar ubicaciones, gestionar concesiones, administrar pagos y mantener un histórico de movimientos. Facilita saber dónde están enterradas las personas, qué espacios hay libres y poder venderlos o reasignarlos. Incluye búsqueda avanzada, generación de informes y copias de seguridad automáticas.",
    personal2Link: "Ver en GitHub",
    personal2LottusLink: "Ver en Lottus",
    personal3Title: "Restaurante",
    personal3Desc: "Plantilla base para aplicaciones de gestión de menús y comidas en comedores, restaurantes o eventos. Permite crear menús, asignar platos, gestionar ingredientes y controlar el stock de alimentos. Estructura modular y personalizable.",
    personal3Link: "Ver en GitHub",
    personal4Title: "Pacientes (Nefrología)",
    personal4Desc: "Aplicación de escritorio diseñada para la sección de Nefrología: gestión integral de pacientes, accesos vasculares y estado médico. Incluye sincronización entre base de datos local y la nube (Turso), historial médico, citas, tratamientos y exportación de datos.",
    personal4Link: "Ver en GitHub",
    personal5Title: "Pacientes (Nefrología) — Web",
    personal5Desc: "Evolución del proyecto anterior a aplicación web moderna. Frontend y backend más robustos, escalables y multiplataforma. Mayor seguridad y nuevas funcionalidades adaptadas a Nefrología.<br><br><strong>En producción:</strong> Backend en Zeabur · Frontend en Vercel.",
    personal6Title: "Contactos",
    personal6Desc: "Aplicación de escritorio multiplataforma para gestión de contactos, clientes y agenda, desarrollada para un cliente. Incluye CRUD avanzado, filtros de búsqueda, importación/exportación de datos y notificaciones. Interfaz intuitiva con soporte para múltiples usuarios.",
    personal6Link: "Ver en GitHub",
    expLaborTitle: "Experiencia Laboral Previa",
    expLaborDesc: "Durante más de 8 años (2018–2026) compaginé mis estudios universitarios con trabajo en diversos sectores para poder costearlos. Esta etapa me forjó disciplina, resiliencia y capacidad de adaptación.",
    expLaborSectors: "Hostelería · Administración Pública · Construcción · Gasolineras",
    skillsTitle: "Habilidades Técnicas",
    skillJs: "JavaScript / TypeScript",
    skillReact: "React",
    skillNode: "Node.js",
    skillHtmlcss: "HTML & CSS",
    skillPython: "Python",
    skillJava: "Java",
    skillC: "C / C# / C++",
    skillGit: "Git & GitHub",
    skillDb: "Bases de Datos (SQL + NoSQL)",
    eduTitle: "Formación",
    eduDesc: "Mi recorrido universitario comenzó en 2013 y se extiende hasta 2026. Un camino no lineal, compaginando estudios con trabajo y responsabilidades personales. Todo lo matriculado fue superado con esfuerzo y dedicación. Una etapa de crecimiento constante que me ha dado resiliencia, constancia y pasión por la informática.",
    timelineDegreeTitle: "Grado en Ingeniería Informática",
    timelineDegreeDate: "2013 — 2026",
    timelineDegreeDesc: "Universidad Politécnica de Valencia — Campus de Alcoy.<br>Especialidad en Tecnologías de la Información. Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos.",
    timelineLangTitle: "Idiomas",
    timelineLangEs: "<strong>Español:</strong> Nativo",
    timelineLangVal: "<strong>Valenciano:</strong> Nativo",
    timelineLangEn: "<strong>Inglés:</strong> Intermedio / Avanzado (capacidad para trabajar y comunicarme en entornos internacionales)",
    timelineExtraTitle: "Información adicional",
    timelineExtraDrive: "Carnet de conducir y vehículo propio",
    timelineExtraMove: "Disponibilidad para viajar y cambio de residencia",
    timelineExtraCity: "Residente en Benilloba (Alicante)",
    contactTitle: "Contacto",
    contactDesc: "¿Tienes un proyecto en mente o quieres hablar? Estoy disponible para nuevas oportunidades.",
    contactLocation: "Santo Tomás nº8, Benilloba, Alicante",
    footerText: "© 2026 Alejandro Pastor. Hecho con pasión y café ☕",
    themeDark: "Modo Oscuro",
    themeLight: "Modo Claro"
  },
  en: {
    sidebarName: "Alex Pastor",
    sidebarRole: "Software Engineer | Specialist in Technological Solutions Development",
    navInicio: "Home",
    navExperiencia: "Experience",
    navFormacion: "Education",
    navContacto: "Contact",
    mainTitle: 'Hi! I\'m <span class="gradient-title" style="font-size:2.8rem;line-height:1.05;vertical-align:middle;display:inline-block;">Alex Pastor</span>',
    mainSubtitle: "Software Engineer · Founder of Lottus Company · Full-Stack, Backend, Microservices & Databases",
    mainIntro: `Software Engineer with hands-on experience <strong>since 2020</strong>, specializing in full-stack web development, backend, microservices and databases. Founder and Lead Developer of <a href="https://lottuscompany.com/" target="_blank" rel="noopener noreferrer" style="color:#003380;text-decoration:underline;" class="dark-link-teal">Lottus Company</a>, a software company with SaaS products in production.<br><br>
    About to complete my Bachelor's in Computer Engineering (UPV, Alcoy Campus). My passion for technology started at age 10: I was building Java plugins for Minecraft and JavaScript/C scripts for browser games before ever taking a CS class.<br><br>
    I balanced my studies with 8+ years of work in hospitality, public administration, construction and other sectors — building resilience and discipline along the way. I never stopped learning: Python bots, Electron desktop apps, and web solutions with Node.js, React, SQL and NoSQL.<br><br>
    <strong>Ready to add value from day one in any tech team.</strong>`,
    expTitle: "Experience & Projects",
    expDesc: "Freelance developer since 2020, with real projects in production for clients and personal use. Founder of Lottus Company (2024), a software company specializing in SaaS solutions for business management.",
    expUniTitle: "University Projects",
    uni1Title: "Smart Task Manager",
    uni1Desc: "Web application to organize personal and professional tasks, with smart reminders, cloud sync and intuitive interface. Allows project management, priority setting and automatic notifications.",
    uni1Tech: "React, Node.js, MongoDB",
    uni2Title: "Telegram Bot for Classroom Management",
    uni2Desc: "Telegram bot for managing and requesting classrooms at the university. Allows user CRUD via commands, role assignment and reservation management, all backed by an SQL database.",
    uni2Tech: "Python, Telegram Bot API, SQL, User roles",
    uni3Title: "COVID Web App",
    uni3Desc: "Web app to detect infected users nearby, similar to Pokémon Go: interactive map where the user moves and can see nearby infected people in real time.",
    uni3Tech: "JavaScript, Node.js, MySQL, Map APIs",
    uni4Title: "Twitter-like Messaging System (CLI)",
    uni4Desc: "Console app simulating a social network, with account management, authentication, posts, likes and retweets. Business logic and data persistence implemented.",
    uni4Tech: "JavaScript, Node.js, MongoDB",
    uni5Title: "Vacation Rental Web App",
    uni5Desc: "Web platform for managing tourist accommodations, reservations and reviews. Built with independent microservices integrated separately. MVC architecture, GitHub version control and error management with detailed logs.",
    uni5Tech: "TypeScript, Node.js, Express, MongoDB, MySQL, SQLite, Bootstrap, Microservices, Logs",
    expPersonalTitle: "Personal Projects",
    lottusRole: "Founder & Lead Developer",
    lottusDate: "2024 — Present",
    lottusDesc: "Software company I founded where I am the lead developer. Specialized in developing and selling SaaS solutions for business management. Two products in production with new solutions in development. Powerful, accessible tools for freelancers and small businesses.",
    personal1Title: "Pétalo",
    personal1Desc: "Desktop app for comprehensive florist shop management: sales, inventory, suppliers, clients and reports. Includes admin panel, visual dashboard and user system. Built with Electron and Node.js.",
    personal1Link: "View on GitHub",
    personal1LottusLink: "View on Lottus",
    personal2Title: "Memorix",
    personal2Desc: "Cemetery management system for registering locations, managing concessions, handling payments and keeping movement history. Makes it easy to know where people are buried, which spaces are free and to sell or reassign them. Includes advanced search, report generation and automatic backups.",
    personal2Link: "View on GitHub",
    personal2LottusLink: "View on Lottus",
    personal3Title: "Restaurant",
    personal3Desc: "Base template for menu and meal management apps in canteens, restaurants or events. Allows menu creation, dish assignment, ingredient management and food stock control. Modular and customizable structure.",
    personal3Link: "View on GitHub",
    personal4Title: "Patients (Nephrology)",
    personal4Desc: "Desktop app designed for the Nephrology section: comprehensive patient management, vascular accesses and medical status. Includes local-to-cloud sync (Turso), medical history, appointments, treatments and data export.",
    personal4Link: "View on GitHub",
    personal5Title: "Patients (Nephrology) — Web",
    personal5Desc: "Evolution of the previous project to a modern web app. More robust, scalable and multiplatform frontend and backend. Enhanced security and new features tailored to Nephrology.<br><br><strong>In production:</strong> Backend on Zeabur · Frontend on Vercel.",
    personal6Title: "Contacts",
    personal6Desc: "Cross-platform desktop app for managing contacts, clients and agenda, built for a client. Includes advanced CRUD, search filters, data import/export and notifications. Intuitive interface with multi-user support.",
    personal6Link: "View on GitHub",
    expLaborTitle: "Previous Work Experience",
    expLaborDesc: "Over 8 years (2018–2026) I combined my university studies with work in various sectors to fund them. This period built my discipline, resilience and adaptability.",
    expLaborSectors: "Hospitality · Public Administration · Construction · Gas Stations",
    skillsTitle: "Technical Skills",
    skillJs: "JavaScript / TypeScript",
    skillReact: "React",
    skillNode: "Node.js",
    skillHtmlcss: "HTML & CSS",
    skillPython: "Python",
    skillJava: "Java",
    skillC: "C / C# / C++",
    skillGit: "Git & GitHub",
    skillDb: "Databases (SQL + NoSQL)",
    eduTitle: "Education",
    eduDesc: "My university journey started in 2013 and runs through 2026. A non-linear path, balancing studies with work and personal responsibilities. Everything I enrolled in, I passed with effort and dedication. A period of constant growth that built resilience, perseverance and passion for computer science.",
    timelineDegreeTitle: "Bachelor's in Computer Engineering",
    timelineDegreeDate: "2013 — 2026",
    timelineDegreeDesc: "Polytechnic University of Valencia — Alcoy Campus.<br>Specialization in Information Technologies. Comprehensive training in software development, databases, systems architecture and technology project management.",
    timelineLangTitle: "Languages",
    timelineLangEs: "<strong>Spanish:</strong> Native",
    timelineLangVal: "<strong>Valencian:</strong> Native",
    timelineLangEn: "<strong>English:</strong> Intermediate / Advanced (able to work and communicate in international environments)",
    timelineExtraTitle: "Additional Information",
    timelineExtraDrive: "Driver's license and own vehicle",
    timelineExtraMove: "Willing to travel and relocate",
    timelineExtraCity: "Resident in Benilloba (Alicante)",
    contactTitle: "Contact",
    contactDesc: "Have a project in mind or want to talk? I'm available for new opportunities.",
    contactLocation: "Santo Tomás nº8, Benilloba, Alicante",
    footerText: "© 2026 Alex Pastor. Made with passion and coffee ☕",
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

  const elMainIntro = document.getElementById('main-intro');
  if (elMainIntro) elMainIntro.innerHTML = t.mainIntro;

  setLangSidebar && setLangSidebar._internalCall !== true && setLangSidebar(lang);
  setLangMobile && setLangMobile._internalCall !== true && setLangMobile(lang);

  // Sidebar y navegación
  ['sidebar-name','sidebar-role','nav-inicio','nav-experiencia','nav-formacion','nav-contacto'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const map = {
      'sidebar-name': t.sidebarName,
      'sidebar-role': t.sidebarRole,
      'nav-inicio': t.navInicio,
      'nav-experiencia': t.navExperiencia,
      'nav-formacion': t.navFormacion,
      'nav-contacto': t.navContacto
    };
    el.textContent = map[id];
  });

  // Mobile sidebar
  const mobileMap = {
    'mobile-sidebar-name': t.sidebarName,
    'mobile-sidebar-role': t.sidebarRole,
    'mobile-nav-inicio': t.navInicio,
    'mobile-nav-experiencia': t.navExperiencia,
    'mobile-nav-formacion': t.navFormacion,
    'mobile-nav-contacto': t.navContacto
  };
  Object.entries(mobileMap).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // Main
  const elMainTitle = document.getElementById('main-title');
  const elMainSubtitle = document.getElementById('main-subtitle');
  if (elMainTitle) elMainTitle.innerHTML = t.mainTitle;
  if (elMainSubtitle) elMainSubtitle.innerHTML = t.mainSubtitle;

  // Experiencia
  const textIds = {
    'exp-title': t.expTitle,
    'exp-desc': t.expDesc,
    'exp-uni-title': t.expUniTitle,
    'exp-personal-title': t.expPersonalTitle,
    'exp-labor-title': t.expLaborTitle,
    'exp-labor-desc': t.expLaborDesc,
    'exp-labor-sectors': t.expLaborSectors,
    'skills-title': t.skillsTitle,
    'edu-title': t.eduTitle,
    'edu-desc': t.eduDesc,
    'timeline-degree-title': t.timelineDegreeTitle,
    'timeline-degree-date': t.timelineDegreeDate,
    'timeline-lang-title': t.timelineLangTitle,
    'timeline-extra-title': t.timelineExtraTitle,
    'timeline-extra-drive': t.timelineExtraDrive,
    'timeline-extra-move': t.timelineExtraMove,
    'timeline-extra-city': t.timelineExtraCity,
    'contact-title': t.contactTitle,
    'contact-desc': t.contactDesc,
    'contact-location': t.contactLocation,
    'footer-text': t.footerText
  };
  Object.entries(textIds).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });

  // innerHTML elements
  const htmlIds = {
    'timeline-degree-desc': t.timelineDegreeDesc,
    'timeline-lang-es': t.timelineLangEs,
    'timeline-lang-val': t.timelineLangVal,
    'timeline-lang-en': t.timelineLangEn
  };
  Object.entries(htmlIds).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = val;
  });

  // Lottus
  const elLottusRole = document.getElementById('lottus-role');
  const elLottusDate = document.getElementById('lottus-date');
  const elLottusDesc = document.getElementById('lottus-desc');
  if (elLottusRole) elLottusRole.textContent = t.lottusRole;
  if (elLottusDate) elLottusDate.textContent = t.lottusDate;
  if (elLottusDesc) elLottusDesc.textContent = t.lottusDesc;

  // Proyectos universitarios
  for (let i = 1; i <= 5; i++) {
    const title = document.getElementById(`uni${i}-title`);
    const desc = document.getElementById(`uni${i}-desc`);
    const tech = document.getElementById(`uni${i}-tech`);
    if (title) title.textContent = t[`uni${i}Title`];
    if (desc) desc.textContent = t[`uni${i}Desc`];
    if (tech) tech.textContent = t[`uni${i}Tech`];
  }

  // Proyectos personales
  const elExpPersonalTitle = document.getElementById('exp-personal-title');
  if (elExpPersonalTitle) elExpPersonalTitle.textContent = t.expPersonalTitle;
  for (let i = 1; i <= 6; i++) {
    const title = document.getElementById(`personal${i}-title`);
    const desc = document.getElementById(`personal${i}-desc`);
    const link = document.getElementById(`personal${i}-link`);
    if (title) title.textContent = t[`personal${i}Title`];
    if (desc) desc.innerHTML = t[`personal${i}Desc`];
    if (link) link.textContent = t[`personal${i}Link`];
  }
  const elP1Lottus = document.getElementById('personal1-lottus-link');
  const elP2Lottus = document.getElementById('personal2-lottus-link');
  if (elP1Lottus) elP1Lottus.textContent = t.personal1LottusLink;
  if (elP2Lottus) elP2Lottus.textContent = t.personal2LottusLink;

  // Habilidades
  const skillMap = {
    'js': 'skillJs', 'react': 'skillReact', 'node': 'skillNode',
    'htmlcss': 'skillHtmlcss', 'python': 'skillPython', 'java': 'skillJava',
    'c': 'skillC', 'git': 'skillGit', 'db': 'skillDb'
  };
  Object.entries(skillMap).forEach(([id, key]) => {
    const el = document.getElementById(`skill-${id}`);
    if (el) {
      const labelSpan = el.querySelector('.skill-label');
      if (labelSpan) labelSpan.textContent = t[key];
    }
  });

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
