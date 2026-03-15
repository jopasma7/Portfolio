// Función global para cambiar idioma (placeholder, puedes expandir para traducir toda la web)
// Diccionario de traducciones ES/EN para los textos principales
const translations = {
  es: {
    sidebarName: "Alejandro Pastor",
    sidebarRole: "Ingeniero en Software | Especialista en Desarrollo de Soluciones Tecnológicas",
    navInicio: "Inicio",
    navExperiencia: "Experiencia",
    navFormacion: "Formación",
    mainTitle: "¡Hola! Soy Alejandro Pastor",
    mainSubtitle: "Creador de soluciones tecnológicas: frontend, backend, microservicios, bases de datos, APIs, automatización, integración y más. Apasionado por la innovación y la mejora continua.",
    mainIntro: `¡Hola! Gracias por visitar mi portafolio. Aquí comparto algunos de los proyectos y aprendizajes que más me han marcado en mi etapa universitaria y en mis primeros pasos en el mundo profesional.<br><br>
    Aunque mi camino en la tecnología acaba de empezar, cuento con una base sólida y experiencia práctica en desarrollo web, backend, microservicios y bases de datos. No soy un novato, pero tampoco lo sé todo: sigo aprendiendo y mejorando cada día, con muchas ganas de aportar y crecer en nuevos retos.<br><br>       
    Mi nombre es Alejandro, tengo 30 años y este año estoy finalizando mi Trabajo de Fin de Grado en Ingeniería Informática, especialidad en Tecnologías de la Información. Mi pasión por la tecnología y la programación comenzó desde muy pequeño, entre los 10 y 15 años, antes incluso de recibir clases de informática en el colegio, ya creaba mis propios plugins en Java para juegos como Minecraft, así como scripts en JavaScript y C para juegos en línea de navegador, desde títulos medievales de construcción hasta juegos de carreras.<br><br>
    Inicié mi carrera universitaria a una edad temprana, pero por motivos económicos tuve que interrumpirla temporalmente. Mi familia no podía apoyarme económicamente y tuve que trabajar en diversos sectores como hostelería, administración pública, construcción, gasolineras... para poder costear mis estudios y mantenerme. Esta etapa me enseñó el valor del esfuerzo, la resiliencia y la importancia de perseguir mis sueños.<br><br>
    A lo largo de estos años, nunca dejé de aprender ni de crear. He desarrollado proyectos personales tanto para mi propio uso como para seguir creciendo profesionalmente. Entre ellos destacan bots para Discord y Telegram utilizando Python, aplicaciones de escritorio con Electron (basado en Chromium y tecnologías web como HTML, CSS y JavaScript), y soluciones de gestión para negocios como floristerías y cafeterías, así como aplicaciones para la gestión de clientes, contactos y cementerios, primero como aplicaciones de escritorio y posteriormente migradas a aplicaciones web con frontend y backend. Para ello, he utilizado tecnologías como Node.js, React, bases de datos relacionales (SQL, PostgreSQL) y no relacionales (MongoDB, Redis).<br><br>
    Aunque aún no he tenido la oportunidad de aplicar todo este conocimiento en una empresa del sector tecnológico, mi experiencia es sólida y real. Estoy convencido de que puedo adaptarme rápidamente a cualquier entorno profesional, aportar valor desde el primer día y seguir aprendiendo y creciendo junto a mi equipo.<br><br>
    Mi camino apenas comienza, pero llego con una base firme, pasión por la tecnología y muchas ganas de afrontar nuevos retos.`,
    expTitle: "Experiencia y Proyectos Reales",
    expDesc: "Aunque aún no he trabajado en empresas del sector tecnológico, he desarrollado diversos proyectos y soluciones para clientes independientes y para mi propio aprendizaje. Mi experiencia se basa en la creación de aplicaciones reales, resolviendo necesidades concretas y colaborando en pequeños encargos, lo que me ha permitido adquirir habilidades prácticas y una visión profesional del desarrollo de software.",
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
    uni5Desc: "Plataforma web para la gestión de alojamientos turísticos, reservas y valoraciones. Creada inicialmente con microservicios independientes, que luego fueron integrados de forma separada. Incluye arquitectura MVC, control de versiones en GitHub y gestión de errores con logs detallados.",
    uni5Tech: "TypeScript, Node.js, Express, MongoDB, MySQL, SQLite, Bootstrap, Microservicios, Logs",
    expPersonalTitle: "Proyectos Personales",
    personal1Title: "Floristería",
    personal1Desc: "Aplicación de escritorio para la gestión integral de floristerías: control de ventas, inventario, proveedores, clientes y generación de reportes. Incluye panel de administración, dashboard visual y sistema de usuarios. Desarrollada con Electron y Node.js para entornos Windows y multiplataforma.",
    personal1Link: "Ver en GitHub",
    personal2Title: "Cementerio",
    personal2Desc: "Sistema de gestión de cementerios que permite registrar ubicaciones, gestionar concesiones, administrar pagos y mantener un histórico de movimientos. La aplicación facilita saber dónde están enterradas las personas, qué espacios hay libres y poder venderlos o reasignarlos fácilmente. Incluye búsqueda avanzada, generación de informes y copias de seguridad automáticas.",
    personal2Link: "Ver en GitHub",
    personal3Title: "Restaurante",
    personal3Desc: "Plantilla base para aplicaciones de gestión de menús y comidas en comedores, restaurantes o eventos. Permite crear menús, asignar platos, gestionar ingredientes y controlar el stock de alimentos. Estructura modular y personalizable.",
    personal3Link: "Ver en GitHub",
    personal4Title: "Pacientes (Nefrología)",
    personal4Desc: "Aplicación diseñada específicamente para la sección de Nefrología, orientada a la gestión integral de pacientes. Permite crear, editar y listar pacientes, visualizando de forma clara sus accesos vasculares y el estado médico de cada uno. Incluye sincronización robusta entre base de datos local y la nube (Turso), registro de historiales médicos, citas, tratamientos y exportación de datos. Ideal para clínicas y consultas especializadas.",
    personal4Link: "Ver en GitHub",
    personal5Title: "Pacientes (Nefrología) - Web",
    personal5Desc: "Continuación y evolución del proyecto anterior, migrando la aplicación de gestión de pacientes de una solución basada en Electron a una aplicación web moderna. Esta nueva versión cuenta con un frontend y backend más robustos, escalables y personalizables, permitiendo un acceso multiplataforma, mayor seguridad y nuevas funcionalidades adaptadas a las necesidades de la sección de Nefrología.<br><br><strong>Actualmente en producción:</strong> Backend alojado en Zeabur y Frontend en Vercel.",
    personal6Title: "Contactos",
    personal6Desc: "Aplicación de escritorio multiplataforma para la gestión de contactos, clientes y agenda. Este proyecto fue desarrollado para un cliente que solicitó una solución sencilla para gestionar sus clientes en su trabajo diario, quedando muy satisfecho con el resultado. Incluye CRUD avanzado, filtros de búsqueda, importación/exportación de datos y notificaciones. Interfaz intuitiva y soporte para múltiples usuarios.",
    personal6Link: "Ver en GitHub",
    skillsTitle: "Habilidades",
    skillJs: "JavaScript (ES6+)",
    skillReact: "React",
    skillNode: "Node.js",
    skillHtmlcss: "HTML & CSS",
    skillPython: "Python",
    skillJava: "Java",
    skillGit: "Git & GitHub",
    skillDb: "Bases de Datos",
    eduTitle: "Formación",
    eduDesc: "Mi recorrido universitario ha sido largo y lleno de aprendizajes, comenzando en 2013 y extendiéndose hasta 2026. No ha sido un camino lineal: por motivos económicos y personales, tuve que compaginar mis estudios con el trabajo y otras responsabilidades, lo que me obligó a pausar y retomar la carrera en varias ocasiones. Es importante destacar que este retraso nunca se debió a suspensos: todo lo que matriculé lo superé con esfuerzo y dedicación. Además, todos esos años me sirvieron para seguir aprendiendo y creciendo; no fueron en absoluto un descanso ni una pausa, sino una etapa activa de desarrollo personal y profesional. Sin embargo, nunca perdí la motivación ni las ganas de superarme. Cada año, cada reto y cada asignatura han forjado en mí una gran resiliencia, constancia y pasión por la informática. Hoy, a punto de finalizar el grado, miro atrás con orgullo por no haberme rendido y por haber convertido cada obstáculo en una oportunidad de crecimiento personal y profesional.",
    timelineDegreeTitle: "Grado en Ingeniería Informática",
    timelineDegreeDesc: "Universidad Politécnica de Valencia - Campus de Alcoy.<br>Formación integral en desarrollo de software, bases de datos, arquitectura de sistemas y gestión de proyectos tecnológicos.",
    timelineLangTitle: "Idiomas",
    timelineLangEs: "<strong>Español:</strong> Nativo",
    timelineLangVal: "<strong>Valenciano:</strong> Nativo",
    timelineLangEn: "<strong>Inglés:</strong> Intermedio / Avanzado (capacidad para trabajar y comunicarme en entornos internacionales)",
    timelineExtraTitle: "Información adicional",
    timelineExtraDrive: "Carnet de conducir y vehículo propio",
    timelineExtraMove: "Disponibilidad para viajar y cambio de residencia",
    timelineExtraCity: "Residente en Benilloba (Alicante)",
    footerText: "© 2026 Alejandro Pastor. Hecho con pasión y café ☕"
  },
  en: {
    sidebarName: "Alex Pastor",
    sidebarRole: "Software Engineer | Specialist in Technological Solutions Development",
    navInicio: "Home",
    navExperiencia: "Experience",
    navFormacion: "Education",
    mainTitle: "Hi! I'm Alex Pastor",
    mainSubtitle: "Creator of technological solutions: frontend, backend, microservices, databases, APIs, automation, integration and more. Passionate about innovation and continuous improvement.",
    mainIntro: `Hi! Thanks for visiting my portfolio. Here I share some of the projects and lessons that have most marked me in my university stage and in my first steps in the professional world.<br><br>
    Although my journey in technology is just beginning, I have a solid foundation and practical experience in web development, backend, microservices, and databases. I'm not a novice, but I don't know everything either: I keep learning and improving every day, eager to contribute and grow in new challenges.<br><br>
    My name is Alex, I'm 30 years old and this year I'm finishing my Bachelor's Thesis in Computer Engineering, specializing in Information Technologies. My passion for technology and programming began at a very young age, between 10 and 15 years old, even before taking computer classes at school, I was already creating my own Java plugins for games like Minecraft, as well as JavaScript and C scripts for online browser games, from medieval building titles to racing games.<br><br>
    I started my university career at an early age, but for economic reasons I had to interrupt it temporarily. My family couldn't support me financially and I had to work in various sectors such as hospitality, public administration, construction, gas stations... to pay for my studies and support myself. This stage taught me the value of effort, resilience, and the importance of pursuing my dreams.<br><br>
    Over the years, I never stopped learning or creating. I have developed personal projects both for my own use and to continue growing professionally. Among them are bots for Discord and Telegram using Python, desktop applications with Electron (based on Chromium and web technologies like HTML, CSS, and JavaScript), and management solutions for businesses such as flower shops and coffee shops, as well as applications for managing clients, contacts, and cemeteries, first as desktop applications and later migrated to web applications with frontend and backend. For this, I have used technologies such as Node.js, React, relational databases (SQL, PostgreSQL), and non-relational databases (MongoDB, Redis).<br><br>
    Although I have not yet had the opportunity to apply all this knowledge in a tech company, my experience is solid and real. I am convinced that I can quickly adapt to any professional environment, add value from day one, and continue learning and growing with my team.<br><br>
    My journey is just beginning, but I arrive with a strong foundation, a passion for technology, and a great desire to face new challenges.`,
    expTitle: "Experience and Real Projects",
    expDesc: "Although I haven't worked in tech companies yet, I have developed various projects and solutions for independent clients and for my own learning. My experience is based on creating real applications, solving concrete needs and collaborating on small assignments, which has allowed me to acquire practical skills and a professional vision of software development.",
    expUniTitle: "University Projects",
    uni1Title: "Smart Task Manager",
    uni1Desc: "Web application to organize personal and professional tasks, with smart reminders, cloud sync and intuitive interface. Allows project management, setting priorities and receiving automatic notifications.",
    uni1Tech: "React, Node.js, MongoDB",
    uni2Title: "Telegram Bot for Classroom Management",
    uni2Desc: "Telegram bot for managing and requesting classrooms at the university. Allows user CRUD via commands, role assignment and reservation management, all backed by an SQL database model.",
    uni2Tech: "Python, Telegram Bot API, SQL, User roles",
    uni3Title: "COVID Web App",
    uni3Desc: "Web app to detect infected users in the area, similar to Pokémon Go: includes an interactive map where the user moves and can see nearby infected people in real time.",
    uni3Tech: "JavaScript, Node.js, MySQL, Map APIs",
    uni4Title: "Twitter-like Messaging System (CLI)",
    uni4Desc: "Console application that simulates a social network, with account management, authentication, posts, likes and retweets. Business logic and data persistence implemented.",
    uni4Tech: "JavaScript, Node.js, MongoDB",
    uni5Title: "Vacation Rental Web App",
    uni5Desc: "Web platform for managing tourist accommodations, reservations and reviews. Initially created with independent microservices, later integrated separately. Includes MVC architecture, GitHub version control and error management with detailed logs.",
    uni5Tech: "TypeScript, Node.js, Express, MongoDB, MySQL, SQLite, Bootstrap, Microservices, Logs",
    expPersonalTitle: "Personal Projects",
    personal1Title: "Florist Shop",
    personal1Desc: "Desktop app for comprehensive management of florist shops: sales, inventory, suppliers, clients and report generation. Includes admin panel, visual dashboard and user system. Developed with Electron and Node.js for Windows and cross-platform.",
    personal1Link: "View on GitHub",
    personal2Title: "Cemetery",
    personal2Desc: "Cemetery management system to register locations, manage concessions, handle payments and keep a history of movements. The app makes it easy to know where people are buried, which spaces are free and to sell or reassign them easily. Includes advanced search, report generation and automatic backups.",
    personal2Link: "View on GitHub",
    personal3Title: "Restaurant",
    personal3Desc: "Base template for menu and meal management apps in canteens, restaurants or events. Allows menu creation, dish assignment, ingredient management and food stock control. Modular and customizable structure.",
    personal3Link: "View on GitHub",
    personal4Title: "Patients (Nephrology)",
    personal4Desc: "App designed specifically for the Nephrology section, focused on comprehensive patient management. Allows creating, editing and listing patients, clearly visualizing their vascular accesses and medical status. Includes robust sync between local and cloud DB (Turso), medical history, appointments, treatments and data export. Ideal for clinics and specialized practices.",
    personal4Link: "View on GitHub",
    personal5Title: "Patients (Nephrology) - Web",
    personal5Desc: "Continuation and evolution of the previous project, migrating the patient management app from an Electron-based solution to a modern web app. This new version features a more robust, scalable and customizable frontend and backend, enabling multiplatform access, greater security and new features tailored to the needs of the Nephrology section.<br><br><strong>Currently in production:</strong> Backend hosted on Zeabur and Frontend on Vercel.",
    personal6Title: "Contacts",
    personal6Desc: "Cross-platform desktop app for managing contacts, clients and agenda. This project was developed for a client who requested a simple solution to manage their clients in their daily work, being very satisfied with the result. Includes advanced CRUD, search filters, data import/export and notifications. Intuitive interface and support for multiple users.",
    personal6Link: "View on GitHub",
    skillsTitle: "Skills",
    skillJs: "JavaScript (ES6+)",
    skillReact: "React",
    skillNode: "Node.js",
    skillHtmlcss: "HTML & CSS",
    skillPython: "Python",
    skillJava: "Java",
    skillGit: "Git & GitHub",
    skillDb: "Databases",
    eduTitle: "Education",
    eduDesc: "My university journey has been long and full of learning, starting in 2013 and extending to 2026. It hasn't been a linear path: for economic and personal reasons, I had to combine my studies with work and other responsibilities, which forced me to pause and resume my degree several times. It's important to note that this delay was never due to failing: everything I enrolled in I passed with effort and dedication. Moreover, all those years helped me keep learning and growing; they were by no means a break or pause, but an active stage of personal and professional development. However, I never lost motivation or the desire to improve. Each year, each challenge and each subject have forged in me great resilience, perseverance and passion for computer science. Today, about to finish my degree, I look back with pride for not giving up and for turning every obstacle into an opportunity for personal and professional growth.",
    timelineDegreeTitle: "Bachelor's in Computer Engineering",
    timelineDegreeDesc: "Polytechnic University of Valencia - Alcoy Campus.<br>Comprehensive training in software development, databases, systems architecture and technology project management.",
    timelineLangTitle: "Languages",
    timelineLangEs: "<strong>Spanish:</strong> Native",
    timelineLangVal: "<strong>Valencian:</strong> Native",
    timelineLangEn: "<strong>English:</strong> Intermediate / Advanced (able to work and communicate in international environments)",
    timelineExtraTitle: "Additional information",
    timelineExtraDrive: "Driver's license and own vehicle",
    timelineExtraMove: "Willing to travel and relocate",
    timelineExtraCity: "Resident in Benilloba (Alicante)",
    footerText: "© 2026 Alex Pastor. Made with passion and coffee ☕"
  }
};

function setLang(lang) {
  // Traducción dinámica de todos los textos y enlaces
  const t = translations[lang] || translations.es;
  // Párrafo de introducción principal
  const elMainIntro = document.getElementById('main-intro');
  if (elMainIntro) elMainIntro.innerHTML = t.mainIntro;
  // Actualizar controles visuales
  setLangSidebar && setLangSidebar._internalCall !== true && setLangSidebar(lang);
  setLangMobile && setLangMobile._internalCall !== true && setLangMobile(lang);
  // Sidebar y navegación
  const elSidebarName = document.getElementById('sidebar-name');
  const elSidebarRole = document.getElementById('sidebar-role');
  const elNavInicio = document.getElementById('nav-inicio');
  const elNavExperiencia = document.getElementById('nav-experiencia');
  const elNavFormacion = document.getElementById('nav-formacion');
  if (elSidebarName) elSidebarName.textContent = t.sidebarName;
  if (elSidebarRole) elSidebarRole.textContent = t.sidebarRole;
  if (elNavInicio) elNavInicio.textContent = t.navInicio;
  if (elNavExperiencia) elNavExperiencia.textContent = t.navExperiencia;
  if (elNavFormacion) elNavFormacion.textContent = t.navFormacion;
  // Main
  const elMainTitle = document.getElementById('main-title');
  const elMainSubtitle = document.getElementById('main-subtitle');
  if (elMainTitle) elMainTitle.innerHTML = t.mainTitle;
  if (elMainSubtitle) {
    elMainSubtitle.innerHTML = t.mainSubtitle;
    // No tocar el color para mantener el color azul de Tailwind
  }
  // Experiencia y proyectos
  const elExpTitle = document.getElementById('exp-title');
  const elExpDesc = document.getElementById('exp-desc');
  const elExpUniTitle = document.getElementById('exp-uni-title');
  if (elExpTitle) elExpTitle.textContent = t.expTitle;
  if (elExpDesc) elExpDesc.textContent = t.expDesc;
  if (elExpUniTitle) elExpUniTitle.textContent = t.expUniTitle;
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
    if (desc) desc.textContent = t[`personal${i}Desc`];
    if (link) link.textContent = t[`personal${i}Link`];
  }
  // Habilidades
  const elSkillsTitle = document.getElementById('skills-title');
  if (elSkillsTitle) elSkillsTitle.textContent = t.skillsTitle;
  const skillIds = ['js', 'react', 'node', 'htmlcss', 'python', 'java', 'git', 'db'];
  skillIds.forEach(id => {
    const el = document.getElementById(`skill-${id}`);
    if (el) el.innerHTML = t[`skill${id.charAt(0).toUpperCase() + id.slice(1)}`];
  });
  // Formación y timeline
  const elEduTitle = document.getElementById('edu-title');
  const elEduDesc = document.getElementById('edu-desc');
  if (elEduTitle) elEduTitle.textContent = t.eduTitle;
  if (elEduDesc) elEduDesc.textContent = t.eduDesc;
  const elTimelineDegreeTitle = document.getElementById('timeline-degree-title');
  const elTimelineDegreeDesc = document.getElementById('timeline-degree-desc');
  if (elTimelineDegreeTitle) elTimelineDegreeTitle.textContent = t.timelineDegreeTitle;
  if (elTimelineDegreeDesc) elTimelineDegreeDesc.innerHTML = t.timelineDegreeDesc;
  const elTimelineLangTitle = document.getElementById('timeline-lang-title');
  if (elTimelineLangTitle) elTimelineLangTitle.textContent = t.timelineLangTitle;
  const elTimelineLangEs = document.getElementById('timeline-lang-es');
  const elTimelineLangVal = document.getElementById('timeline-lang-val');
  const elTimelineLangEn = document.getElementById('timeline-lang-en');
  if (elTimelineLangEs) elTimelineLangEs.innerHTML = t.timelineLangEs;
  if (elTimelineLangVal) elTimelineLangVal.innerHTML = t.timelineLangVal;
  if (elTimelineLangEn) elTimelineLangEn.innerHTML = t.timelineLangEn;
  const elTimelineExtraTitle = document.getElementById('timeline-extra-title');
  if (elTimelineExtraTitle) elTimelineExtraTitle.textContent = t.timelineExtraTitle;
  const elTimelineExtraDrive = document.getElementById('timeline-extra-drive');
  const elTimelineExtraMove = document.getElementById('timeline-extra-move');
  const elTimelineExtraCity = document.getElementById('timeline-extra-city');
  if (elTimelineExtraDrive) elTimelineExtraDrive.textContent = t.timelineExtraDrive;
  if (elTimelineExtraMove) elTimelineExtraMove.textContent = t.timelineExtraMove;
  if (elTimelineExtraCity) elTimelineExtraCity.textContent = t.timelineExtraCity;
  // Footer
  const elFooterText = document.getElementById('footer-text');
  if (elFooterText) elFooterText.innerHTML = t.footerText;
}

// Dropdown de idioma en sidebar (escritorio)
function setLangSidebar(lang) {
  setLangSidebar._internalCall = true;
  setLang(lang);
  setLangSidebar._internalCall = false;
  // Actualizar controles sidebar
  const flag = document.getElementById('lang-selected-flag-sidebar');
  const label = document.getElementById('lang-selected-label-sidebar');
  if (flag && label) {
    if (lang === 'es') {
      flag.src = 'https://flagcdn.com/w20/es.png';
      flag.alt = 'Español';
      label.textContent = 'Español';
    } else {
      flag.src = 'https://flagcdn.com/w20/gb.png';
      flag.alt = 'English';
      label.textContent = 'English';
    }
  }
}

function setupDropdownSidebar() {
  const dropdown = document.getElementById('lang-dropdown-sidebar');
  const selected = document.getElementById('lang-selected-sidebar');
  const options = document.getElementById('lang-options-sidebar');
  if (selected && options) {
    selected.addEventListener('click', () => {
      options.classList.toggle('hidden');
    });
    document.querySelectorAll('.lang-option-sidebar').forEach(opt => {
      opt.addEventListener('click', function() {
        setLangSidebar(this.getAttribute('data-lang'));
        options.classList.add('hidden');
      });
    });
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        options.classList.add('hidden');
      }
    });
  }
}
// main.js
// JavaScript extraído de index.html para optimización de rendimiento

// Tema oscuro/claro y lógica de controles
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light-theme');
}

// Hamburguesa móvil y controles en menú móvil
function setLangMobile(lang) {
  setLangMobile._internalCall = true;
  setLang(lang);
  setLangMobile._internalCall = false;
  // Actualizar controles móviles
  const flag = document.getElementById('lang-selected-flag-mobile');
  const label = document.getElementById('lang-selected-label-mobile');
  if (flag && label) {
    if (lang === 'es') {
      flag.src = 'https://flagcdn.com/w20/es.png';
      flag.alt = 'Español';
      label.textContent = 'Español';
    } else {
      flag.src = 'https://flagcdn.com/w20/gb.png';
      flag.alt = 'English';
      label.textContent = 'English';
    }
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
      if (!dropdown.contains(e.target)) {
        options.style.display = 'none';
      }
    });
  }
}

function setThemeBtns() {
  const btnMobile = document.getElementById('theme-toggle-mobile');
  const labelMobile = document.getElementById('theme-label-mobile');
  const btnSidebar = document.getElementById('theme-toggle-sidebar');
  const labelSidebar = document.getElementById('theme-label-sidebar');
  const root = document.documentElement;
  const body = document.body;
  function updateThemeLabels() {
    const isLight = root.classList.contains('light-theme');
    if (labelMobile && btnMobile) {
      labelMobile.textContent = isLight ? 'Modo Claro' : 'Modo Oscuro';
      btnMobile.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (labelSidebar && btnSidebar) {
      labelSidebar.textContent = isLight ? 'Modo Claro' : 'Modo Oscuro';
      btnSidebar.querySelector('i').className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
    // Manejar clases para Tailwind dark mode
    if (isLight) {
      body.classList.remove('dark');
      body.classList.add('light-theme');
      root.classList.remove('dark');
      root.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark');
      root.classList.remove('light-theme');
      root.classList.add('dark');
    }
  }
  function toggleTheme() {
    root.classList.toggle('light-theme');
    if(root.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    updateThemeLabels();
  }
  if (btnMobile) btnMobile.addEventListener('click', toggleTheme);
  if (btnSidebar) btnSidebar.addEventListener('click', toggleTheme);
  updateThemeLabels();
}
setupDropdownMobile();
setupDropdownSidebar();
setThemeBtns();

const hamburger = document.getElementById('hamburger-menu');
const mobileSidebar = document.getElementById('mobile-sidebar');
const closeMobileSidebar = document.getElementById('close-mobile-sidebar');
function updateHamburgerVisibility() {
  if (window.innerWidth <= 700) {
    if (hamburger) hamburger.style.display = 'flex';
  } else {
    if (hamburger) hamburger.style.display = 'none';
    if (mobileSidebar) {
      mobileSidebar.style.display = 'none';
      mobileSidebar.style.transform = 'translateX(-100%)';
    }
  }
}
window.addEventListener('resize', updateHamburgerVisibility);
window.addEventListener('DOMContentLoaded', updateHamburgerVisibility);
if (hamburger && mobileSidebar && closeMobileSidebar) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent document click from firing
    mobileSidebar.style.display = 'flex';
    setTimeout(() => { mobileSidebar.style.transform = 'translateX(0)'; }, 10);
  });
  closeMobileSidebar.addEventListener('click', () => {
    mobileSidebar.style.transform = 'translateX(-100%)';
    setTimeout(() => { mobileSidebar.style.display = 'none'; }, 250);
  });
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 700 && mobileSidebar.style.display === 'flex' && !mobileSidebar.contains(e.target) && e.target !== hamburger) {
      mobileSidebar.style.transform = 'translateX(-100%)';
      setTimeout(() => { mobileSidebar.style.display = 'none'; }, 250);
    }
  });
}

// Traducción completa ES/EN para todas las secciones
// ... (puedes seguir moviendo el resto del JS aquí, por espacio lo corto)

// Mostrar controles arriba solo en móvil, en sidebar solo en escritorio
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

// Animación de entrada moderna: fade-in y slide-up en secciones
function fadeInSections() {
  document.querySelectorAll('.section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      sec.classList.add('fade-in');
    }
  });
}
window.addEventListener('DOMContentLoaded', fadeInSections);
window.addEventListener('scroll', fadeInSections);

// Formulario contacto (simulado)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = '¡Mensaje enviado! (Simulado)';
    contactForm.reset();
  });
}
