// script.js
class PortfolioApp {
    constructor() {
        this.currentLanguage = 'es';
        this.translations = {
            es: {
                'nav-home': 'Inicio',
                'nav-about': 'Sobre Mí',
                'nav-projects': 'Proyectos',
                'nav-skills': 'Habilidades',
                'nav-contact': 'Contacto',
                'hero-name': 'Alejandro Obando Zapata',
                'hero-great': 'Hola, soy',
                'hero-title': 'Desarrollador Web FullStack',
                'hero-desc': 'Creando experiencias digitales con tecnologías de vanguardia y soluciones innovadoras',
                'view-work': 'Ver Mi Trabajo',
                'get-in-touch': 'Contáctame',
                'about-title': 'Sobre Mí',
                'about-p1': 'Soy un desarrollador fullstack apasionado especializado en crear aplicaciones web robustas usando tecnologías modernas como React, Node.js y sistemas de bases de datos avanzados.',
                'about-p2': 'Con extensa experiencia en la construcción de aplicaciones escalables, me enfoco en entregar experiencias de usuario excepcionales con código limpio y eficiente.',
                'years-exp': 'Año Experiencia',
                'projects-completed': 'Proyectos Completados',
                'happy-clients': 'Clientes Felices',
                'education': 'Educación',
                'degree': 'Tecnología en Análisis y Desarrollo de Sistemas de Software',
                'certification': 'Desarrollo Personal G4 - ONE - Desarrollar Frontend',
                'projects-title': 'Proyectos Destacados',
                'inventrack-desc': 'Sistema avanzado de gestión de inventarios con acceso multi-rol y capacidades de seguimiento en tiempo real.',
                'ecommerce-desc': 'Plataforma completa de gestión de citas médicas y procesos medicos multi rol con integración en diferentes programas terceros.',
                'analytics-desc': 'Plataforma de visualización de datos en tiempo real con gráficos interactivos y reportes.',
                'view-project': 'Ver Proyecto',
                'skills-title': 'Habilidades',
                'frontend': 'Desarrollo Frontend',
                'backend': 'Desarrollo Backend',
                'development-tools': 'Herramientas de desarrollo',
                'level': 'Intermedio',
                'level-sec': 'Avanzado',
                'contact-title': 'Contáctame',
                'name': 'Nombre',
                'email': 'Email',
                'message': 'Mensaje',
                'send-message': 'Enviar Mensaje',
                'footer-desc': 'Creando experiencias digitales con pasión y precisión',
                'quick-links': 'Enlaces Rápidos',
                'contact': 'Contacto',
                'all-rights': 'Todos los derechos reservados',
                'services-title': 'Servicios Profesionales',
                'service-web-dev': 'Desarrollo Web FullStack',
                'service-web-desc': 'Aplicaciones completas con backend y frontend integrados',
                'service-responsive': 'Aplicaciones Responsivas',
                'service-responsive-desc': 'Diseños que se adaptan a cualquier dispositivo',
                'service-database': 'Integración de Bases de Datos',
                'service-database-desc': 'Sistemas robustos con MySQL.',
                'cta-title': '¿Listo para tu próximo proyecto?',
                'cta-subtitle': 'Trabajemos juntos para crear algo increíble',
                'cta-button': 'Comenzar Proyecto',
                'service-data': 'Análisis de datos',
                'service-data-desc': 'Analisis de datos de manera profesional y optima, utilizando las mejores herramientas del sector.',


            },
            en: {
                'nav-home': 'Home',
                'nav-about': 'About me',
                'nav-projects': 'Projects',
                'nav-skills': 'Skills',
                'nav-contact': 'Contact',
                'hero-name': 'Alejandro Obando Zapata',
                'hero-great': 'Hello, I\'m',
                'hero-title': 'FullStack Web Developer',
                'hero-desc': 'Crafting digital experiences with cutting-edge technologies and innovative solutions',
                'view-work': 'View My Work',
                'get-in-touch': 'Get In Touch',
                'about-title': 'About Me',
                'about-p1': 'I\'m a passionate fullstack developer specializing in creating robust web applications using modern technologies like React, Node.js, and advanced database systems.',
                'about-p2': 'With extensive experience in building scalable applications, I focus on delivering exceptional user experiences with clean, efficient code and innovative solutions.',
                'years-exp': 'Year Experience',
                'projects-completed': 'Projects Completed',
                'happy-clients': 'Happy Clients',
                'education': 'Education',
                'degree': 'Tecnologys in Software Analysis and Development',
                'certification': 'Personal Development G4 - ONE - Frontend Development',
                'projects-title': 'Featured Projects',
                'inventrack-desc': 'Advanced inventory management system with multi-role access and real-time tracking capabilities.',
                'ecommerce-desc': 'Comprehensive platform for managing medical appointments and multi-role medical processes with integration into various third-party programs.',
                'analytics-desc': 'Real-time data visualization platform with interactive charts and reports.',
                'view-project': 'View Project',
                'skills-title': 'Skills',
                'frontend': 'Frontend Development',
                'backend': 'backend Development',
                'development-tools': 'Development Tools',
                'level': 'Intermediate',
                'level-sec': 'Expert',
                'contact-title': 'Get In Touch',
                'name': 'Name',
                'email': 'Email',
                'message': 'Message',
                'send-message': 'Send Message',
                'footer-desc': 'Crafting digital experiences with passion and precision',
                'quick-links': 'Quick Links',
                'contact': 'Contact',
                'all-rights': 'All rights reserved',
                'services-title': 'Professional Services',
                'service-web-dev': 'FullStack Web Development',
                'service-web-desc': 'Complete applications with integrated backend and frontend',
                'service-responsive': 'Responsive Applications',
                'service-responsive-desc': 'Designs that adapt to any device',
                'service-database': 'Database Integration',
                'service-database-desc': 'Robust systems with MySQL.',
                'cta-title': 'Ready for your next project?',
                'cta-subtitle': "Let's work together to create something amazing",
                'cta-button': 'Start Project',
                'service-data': 'Data analysis',
                'service-data-desc': 'Professional and optimal data analysis, using the best tools in the industry.',
            }
            /*
            de: {
                'nav-home': 'Startseite',
                'nav-about': 'Über Mich',
                'nav-projects': 'Projekte',
                'nav-skills': 'Fähigkeiten',
                'nav-contact': 'Kontakt',
                'hero-name': 'Alejandro Obando Zapata',
                'hero-great': 'Hallo, Ich bin',
                'hero-title': 'FullStack Entwickler',
                'hero-desc': 'Digitale Erlebnisse mit modernster Technologie und innovativen Lösungen gestalten',
                'view-work': 'Meine Arbeit ansehen',
                'get-in-touch': 'Kontakt aufnehmen',
                'about-title': 'Über mich',
                'about-p1': 'Ich bin ein leidenschaftlicher Fullstack-Entwickler, der sich auf die Erstellung robuster Webanwendungen mit modernen Technologien wie React, Node.js und fortschrittlichen Datenbanksystemen spezialisiert hat.',
                'about-p2': 'Mit umfangreicher Erfahrung im Aufbau skalierbarer Anwendungen konzentriere ich mich darauf, außergewöhnliche Benutzererlebnisse mit sauberem, effizientem Code und innovativen Lösungen zu liefern.',
                'years-exp': 'Jahre Erfahrung',
                'projects-completed': 'Abgeschlossene Projekte',
                'happy-clients': 'Zufriedene Kunden',
                'education': 'Bildung',
                'degree': 'Informatik Ingenieur',
                'certification': 'FullStack Entwicklung',
                'projects-title': 'Ausgewählte Projekte',
                'inventrack-desc': 'Fortgeschrittenes Bestandsverwaltungssystem mit Multi-Rollen-Zugriff und Echtzeit-Tracking-Funktionen.',
                'ecommerce-desc': 'Komplette Online-Shopping-Plattform mit Zahlungsintegration und Bestandsverwaltung.',
                'analytics-desc': 'Echtzeit-Datenvisualisierungsplattform mit interaktiven Diagrammen und Berichten.',
                'view-project': 'Projekt ansehen',
                'skills-title': 'Technische Fähigkeiten',
                'frontend': 'Frontend',
                'backend': 'Backend',
                'contact-title': 'Kontakt aufnehmen',
                'name': 'Name',
                'email': 'E-Mail',
                'message': 'Nachricht',
                'send-message': 'Nachricht senden',
                'footer-desc': 'Digitale Erlebnisse mit Leidenschaft und Präzision gestalten',
                'quick-links': 'Schnelllinks',
                'contact': 'Kontakt',
                'all-rights': 'Alle Rechte vorbehalten',
                'services-title': 'Professionelle Dienstleistungen',
                'service-web-dev': 'FullStack Webentwicklung',
                'service-web-desc': 'Komplette Anwendungen mit integriertem Backend und Frontend',
                'service-responsive': 'Responsive Anwendungen',
                'service-responsive-desc': 'Designs, die sich an jedes Gerät anpassen',
                'service-database': 'Datenbankintegration',
                'service-database-desc': 'Robuste Systeme mit MySQL, MongoDB usw.',
                'cta-title': 'Bereit für Ihr nächstes Projekt?',
                'cta-subtitle': 'Arbeiten wir zusammen, um etwas Großartiges zu schaffen',
                'cta-button': 'Projekt starten'
            },
            fr: {
                'nav-home': 'Accueil',
                'nav-about': 'À propos',
                'nav-projects': 'Projets',
                'nav-skills': 'Compétences',
                'nav-contact': 'Contact',
                'hero-name': 'Alejandro Obando Zapata',
                'hero-great': 'Bonjour, Je suis',
                'hero-title': 'Développeur FullStack',
                'hero-desc': 'Création d\'expériences numériques avec les technologies de pointe et des solutions innovantes',
                'view-work': 'Voir Mon Travail',
                'get-in-touch': 'Me Contacter',
                'about-title': 'À propos de moi',
                'about-p1': 'Je suis un développeur fullstack passionné spécialisé dans la création d\'applications web robustes utilisant des technologies modernes comme React, Node.js et des systèmes de bases de données avancés.',
                'about-p2': 'Avec une expérience approfondie dans la construction d\'applications évolutives, je me concentre sur la livraison d\'expériences utilisateur exceptionnelles avec du code propre, efficace et des solutions innovantes.',
                'years-exp': 'Années d\'expérience',
                'projects-completed': 'Projets Terminés',
                'happy-clients': 'Clients Satisfaits',
                'education': 'Éducation',
                'degree': 'Ingénierie Informatique',
                'certification': 'Développement FullStack',
                'projects-title': 'Projets Phares',
                'inventrack-desc': 'Système de gestion d\'inventaire avancé avec accès multi-rôles et capacités de suivi en temps réel.',
                'ecommerce-desc': 'Plateforme complète de commerce électronique avec intégration de paiement et gestion des stocks.',
                'analytics-desc': 'Plateforme de visualisation de données en temps réel avec des graphiques interactifs et des rapports.',
                'view-project': 'Voir le projet',
                'skills-title': 'Compétences techniques',
                'frontend': 'Frontend',
                'backend': 'Backend',
                'contact-title': 'Me contacter',
                'name': 'Nom',
                'email': 'Email',
                'message': 'Message',
                'send-message': 'Envoyer le message',
                'footer-desc': 'Création d\'expériences numériques avec passion et précision',
                'quick-links': 'Liens rapides',
                'contact': 'Contact',
                'all-rights': 'Tous droits réservés',
                'services-title': 'Services Professionnels',
                'service-web-dev': 'Développement Web FullStack',
                'service-web-desc': 'Applications complètes avec backend et frontend intégrés',
                'service-responsive': 'Applications Réactives',
                'service-responsive-desc': 'Designs qui s\'adaptent à tout appareil',
                'service-database': 'Intégration de Base de Données',
                'service-database-desc': 'Systèmes robustes avec MySQL, MongoDB, etc.',
                'cta-title': 'Prêt pour votre prochain projet ?',
                'cta-subtitle': 'Travaillons ensemble pour créer quelque chose d\'incroyable',
                'cta-button': 'Commencer le projet'
            },
            ru: {
                'nav-home': 'Главная',
                'nav-about': 'Обо мне',
                'nav-projects': 'Проекты',
                'nav-skills': 'Навыки',
                'nav-contact': 'Контакты',
                'hero-name': 'Алехандро Обандо',
                'hero-great': 'Привет, Я',
                'hero-title': 'FullStack Разработчик',
                'hero-desc': 'Создание цифровых решений с использованием передовых технологий и инновационных подходов',
                'view-work': 'Посмотреть Работы',
                'get-in-touch': 'Связаться',
                'about-title': 'Обо мне',
                'about-p1': 'Я страстный fullstack-разработчик, специализирующийся на создании надежных веб-приложений с использованием современных технологий, таких как React, Node.js и продвинутые системы баз данных.',
                'about-p2': 'Благодаря обширному опыту создания масштабируемых приложений, я сосредоточен на предоставлении исключительного пользовательского опыта с чистым, эффективным кодом и инновационными решениями.',
                'years-exp': 'Лет Опыта',
                'projects-completed': 'Завершенные Проекты',
                'happy-clients': 'Довольные Клиенты',
                'education': 'Образование',
                'degree': 'Инженерия Программного Обеспечения',
                'certification': 'FullStack Разработка',
                'projects-title': 'Избранные Проекты',
                'inventrack-desc': 'Передовая система управления запасами с многоуровневым доступом и возможностями отслеживания в реальном времени.',
                'ecommerce-desc': 'Полнофункциональная платформа электронной коммерции с интеграцией платежей и управлением запасами.',
                'analytics-desc': 'Платформа визуализации данных в реальном времени с интерактивными диаграммами и отчетами.',
                'view-project': 'Просмотр проекта',
                'skills-title': 'Технические навыки',
                'frontend': 'Фронтенд',
                'backend': 'Бэкенд',
                'contact-title': 'Связаться',
                'name': 'Имя',
                'email': 'Электронная почта',
                'message': 'Сообщение',
                'send-message': 'Отправить сообщение',
                'footer-desc': 'Создание цифровых решений с страстью и точностью',
                'quick-links': 'Быстрые ссылки',
                'contact': 'Контакты',
                'all-rights': 'Все права защищены',
                'services-title': 'Профессиональные услуги',
                'service-web-dev': 'FullStack веб-разработка',
                'service-web-desc': 'Полные приложения с интегрированным бэкендом и фронтендом',
                'service-responsive': 'Адаптивные приложения',
                'service-responsive-desc': 'Дизайн, адаптирующийся под любое устройство',
                'service-database': 'Интеграция баз данных',
                'service-database-desc': 'Надежные системы с MySQL, MongoDB и т.д.',
                'cta-title': 'Готовы к следующему проекту?',
                'cta-subtitle': 'Давайте работать вместе, чтобы создать что-то потрясающее',
                'cta-button': 'Начать проект'
            },
            zh: {
                'nav-home': '首页',
                'nav-about': '关于我',
                'nav-projects': '项目',
                'nav-skills': '技能',
                'nav-contact': '联系',
                'hero-name': '亚历杭德罗·奥班多',
                'hero-great': '你好，我是',
                'hero-title': '全栈开发工程师',
                'hero-desc': '使用前沿技术和创新解决方案打造数字体验',
                'view-work': '查看我的作品',
                'get-in-touch': '联系我',
                'about-title': '关于我',
                'about-p1': '我是一名充满激情的全栈开发人员，专门从事使用现代技术（如React、Node.js和高级数据库系统）创建健壮的Web应用程序。',
                'about-p2': '凭借构建可扩展应用程序的丰富经验，我专注于提供具有干净、高效代码和创新解决方案的卓越用户体验。',
                'years-exp': '年经验',
                'projects-completed': '完成项目',
                'happy-clients': '满意客户',
                'education': '教育背景',
                'degree': '计算机工程',
                'certification': '全栈开发',
                'projects-title': '精选项目',
                'inventrack-desc': '具有多角色访问权限和实时跟踪功能的高级库存管理系统。',
                'ecommerce-desc': '具有支付集成和库存管理的完整在线购物平台。',
                'analytics-desc': '具有交互式图表和报告的实时数据可视化平台。',
                'view-project': '查看项目',
                'skills-title': '技术技能',
                'frontend': '前端',
                'backend': '后端',
                'contact-title': '联系我',
                'name': '姓名',
                'email': '邮箱',
                'message': '消息',
                'send-message': '发送消息',
                'footer-desc': '用热情和精确创造数字体验',
                'quick-links': '快速链接',
                'contact': '联系',
                'all-rights': '保留所有权利',
                'services-title': '专业服务',
                'service-web-dev': '全栈网页开发',
                'service-web-desc': '具有集成后端和前端的完整应用程序',
                'service-responsive': '响应式应用',
                'service-responsive-desc': '适应任何设备的设计',
                'service-database': '数据库集成',
                'service-database-desc': '使用MySQL、MongoDB等的稳健系统',
                'cta-title': '准备好您的下一个项目了吗？',
                'cta-subtitle': '让我们一起合作创造令人惊叹的东西',
                'cta-button': '开始项目'
            },
            it: {
                'nav-home': 'Home',
                'nav-about': 'Chi Sono',
                'nav-projects': 'Progetti',
                'nav-skills': 'Competenze',
                'nav-contact': 'Contatti',
                'hero-name': 'Alejandro Obando Zapata',
                'hero-great': 'Ciao, Sono',
                'hero-title': 'Sviluppatore FullStack',
                'hero-desc': 'Creazione di esperienze digitali con tecnologie all\'avanguardia e soluzioni innovative',
                'view-work': 'Vedi Il Mio Lavoro',
                'get-in-touch': 'Contattami',
                'about-title': 'Chi sono',
                'about-p1': 'Sono uno sviluppatore fullstack appassionato specializzato nella creazione di applicazioni web robuste utilizzando tecnologie moderne come React, Node.js e sistemi di database avanzati.',
                'about-p2': 'Con vasta esperienza nella costruzione di applicazioni scalabili, mi concentro sulla consegna di eccezionali esperienze utente con codice pulito, efficiente e soluzioni innovative.',
                'years-exp': 'Anni Esperienza',
                'projects-completed': 'Progetti Completati',
                'happy-clients': 'Clienti Soddisfatti',
                'education': 'Educazione',
                'degree': 'Ingegneria Informatica',
                'certification': 'Sviluppo FullStack',
                'projects-title': 'Progetti in Evidenza',
                'inventrack-desc': 'Sistema avanzato di gestione dell\'inventario con accesso multiplo e capacità di tracciamento in tempo reale.',
                'ecommerce-desc': 'Piattaforma completa di e-commerce con integrazione dei pagamenti e gestione dell\'inventario.',
                'analytics-desc': 'Piattaforma di visualizzazione dati in tempo reale con grafici interattivi e report.',
                'view-project': 'Vedi progetto',
                'skills-title': 'Competenze tecniche',
                'frontend': 'Frontend',
                'backend': 'Backend',
                'contact-title': 'Contattami',
                'name': 'Nome',
                'email': 'Email',
                'message': 'Messaggio',
                'send-message': 'Invia messaggio',
                'footer-desc': 'Creazione di esperienze digitali con passione e precisione',
                'quick-links': 'Link rapidi',
                'contact': 'Contatti',
                'all-rights': 'Tutti i diritti riservati',
                'services-title': 'Servizi Professionali',
                'service-web-dev': 'Sviluppo Web FullStack',
                'service-web-desc': 'Applicazioni complete con backend e frontend integrati',
                'service-responsive': 'Applicazioni Reattive',
                'service-responsive-desc': 'Design che si adattano a qualsiasi dispositivo',
                'service-database': 'Integrazione del Database',
                'service-database-desc': 'Sistemi robusti con MySQL, MongoDB, ecc.',
                'cta-title': 'Pronto per il tuo prossimo progetto?',
                'cta-subtitle': 'Lavoriamo insieme per creare qualcosa di straordinario',
                'cta-button': 'Inizia Progetto'
            },
            hi: {
                'nav-home': 'होम',
                'nav-about': 'मेरे बारे में',
                'nav-projects': 'प्रोजेक्ट्स',
                'nav-skills': 'कौशल',
                'nav-contact': 'संपर्क',
                'hero-name': 'एलेजेंड्रो ओबांडो',
                'hero-great': 'नमस्ते, मैं हूँ',
                'hero-title': 'फुलस्टैक डेवलपर',
                'hero-desc': 'अत्याधुनिक प्रौद्योगिकियों और नवीन समाधानों के साथ डिजिटल अनुभव बनाना',
                'view-work': 'मेरा काम देखें',
                'get-in-touch': 'संपर्क करें',
                'about-title': 'मेरे बारे में',
                'about-p1': 'मैं एक उत्साही फुलस्टैक डेवलपर हूं जो रिएक्ट, नोड.जेएस और उन्नत डेटाबेस सिस्टम जैसी आधुनिक प्रौद्योगिकियों का उपयोग करके मजबूत वेब एप्लिकेशन बनाने में विशेषज्ञता रखता हूं।',
                'about-p2': 'स्केलेबल एप्लिकेशन बनाने में विस्तृत अनुभव के साथ, मैं साफ, कुशल कोड और नवाचारी समाधानों के साथ असाधारण उपयोगकर्ता अनुभव प्रदान करने पर ध्यान केंद्रित करता हूं।',
                'years-exp': 'वर्षों का अनुभव',
                'projects-completed': 'पूर्ण प्रोजेक्ट',
                'happy-clients': 'खुश ग्राहक',
                'education': 'शिक्षा',
                'degree': 'कंप्यूटर इंजीनियरिंग',
                'certification': 'फुलस्टैक डेवलपमेंट',
                'projects-title': 'प्रमुख प्रोजेक्ट',
                'inventrack-desc': 'मल्टी-रोल एक्सेस और रीयल-टाइम ट्रैकिंग क्षमताओं के साथ उन्नत स्टॉक प्रबंधन प्रणाली।',
                'ecommerce-desc': 'भुगतान एकीकरण और स्टॉक प्रबंधन के साथ पूर्ण ऑनलाइन शॉपिंग प्लेटफ़ॉर्म।',
                'analytics-desc': 'इंटरैक्टिव चार्ट और रिपोर्ट के साथ रीयल-टाइम डेटा विज़ुअलाइज़ेशन प्लेटफ़ॉर्म।',
                'view-project': 'प्रोजेक्ट देखें',
                'skills-title': 'तकनीकी कौशल',
                'frontend': 'फ्रंटएंड',
                'backend': 'बैकएंड',
                'contact-title': 'संपर्क करें',
                'name': 'नाम',
                'email': 'ईमेल',
                'message': 'संदेश',
                'send-message': 'संदेश भेजें',
                'footer-desc': 'जुनून और सटीकता के साथ डिजिटल अनुभव बनाना',
                'quick-links': 'त्वरित लिंक',
                'contact': 'संपर्क',
                'all-rights': 'सर्वाधिकार सुरक्षित',
                'services-title': 'पेशेवर सेवाएं',
                'service-web-dev': 'फुलस्टैक वेब विकास',
                'service-web-desc': 'एकीकृत बैकेंड और फ्रंटेंड के साथ पूर्ण एप्लिकेशन',
                'service-responsive': 'प्रतिक्रियाशील एप्लिकेशन',
                'service-responsive-desc': 'किसी भी डिवाइस के अनुकूल डिज़ाइन',
                'service-database': 'डेटाबेस एकीकरण',
                'service-database-desc': 'MySQL, MongoDB आदि के साथ मजबूत सिस्टम',
                'cta-title': 'अपने अगले प्रोजेक्ट के लिए तैयार हैं?',
                'cta-subtitle': 'कुछ शानदार बनाने के लिए एक साथ काम करें',
                'cta-button': 'प्रोजेक्ट शुरू करें'
            },
            ja: {
                'nav-home': 'ホーム',
                'nav-about': '私について',
                'nav-projects': 'プロジェクト',
                'nav-skills': 'スキル',
                'nav-contact': '連絡先',
                'hero-name': 'アレハンドロ・オバンド',
                'hero-great': 'こんにちは、私は',
                'hero-title': 'フルスタック開発者',
                'hero-desc': '最先端の技術と革新的なソリューションでデジタル体験を創り出す',
                'view-work': '私の作品を見る',
                'get-in-touch': '連絡する',
                'about-title': '私について',
                'about-p1': '私はReact、Node.js、高度なデータベースシステムなどの最新技術を使用して堅牢なWebアプリケーションを作成することに特化した情熱的なフルスタック開発者です。',
                'about-p2': 'スケーラブルなアプリケーション構築に関する豊富な経験を持つ私は、クリーンで効率的なコードと革新的なソリューションで例外的なユーザー体験を提供することに焦点を当てています。',
                'years-exp': '年間経験',
                'projects-completed': '完了したプロジェクト',
                'happy-clients': '満足したクライアント',
                'education': '教育',
                'degree': 'コンピュータ工学',
                'certification': 'フルスタック開発',
                'projects-title': '注目プロジェクト',
                'inventrack-desc': 'マルチロールアクセスとリアルタイム追跡機能を備えた高度な在庫管理システム。',
                'ecommerce-desc': '支払い統合と在庫管理を備えた完全なオンラインショッピングプラットフォーム。',
                'analytics-desc': 'インタラクティブチャートとレポートを備えたリアルタイムデータ可視化プラットフォーム。',
                'view-project': 'プロジェクトを見る',
                'skills-title': '技術スキル',
                'frontend': 'フロントエンド',
                'backend': 'バックエンド',
                'contact-title': '連絡する',
                'name': '名前',
                'email': 'メール',
                'message': 'メッセージ',
                'send-message': 'メッセージ送信',
                'footer-desc': '情熱と正確さでデジタル体験を創り出す',
                'quick-links': 'クイックリンク',
                'contact': '連絡先',
                'all-rights': '全著作権所有',
                'services-title': 'プロフェッショナルサービス',
                'service-web-dev': 'フルスタックウェブ開発',
                'service-web-desc': '統合されたバックエンドとフロントエンドを持つ完全なアプリケーション',
                'service-responsive': 'レスポンシブアプリケーション',
                'service-responsive-desc': 'あらゆるデバイスに対応するデザイン',
                'service-database': 'データベース統合',
                'service-database-desc': 'MySQL、MongoDBなどを使用した堅牢なシステム',
                'cta-title': '次のプロジェクトの準備はできていますか？',
                'cta-subtitle': '素晴らしいものを作るために一緒に働きましょう',
                'cta-button': 'プロジェクト開始'
            }
                */
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupBackgroundAnimation();
        this.setupLanguageSelector();
        this.setupScreenshotCarousel();
        this.setupScrollAnimations();
        this.setupFormValidation();
        this.setupScrollToTop();
        this.updateContent();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    navMenu?.classList.remove('active');
                    hamburger?.classList.remove('active');
                }
            });
        });
    }

    setupBackgroundAnimation() {
        const canvas = document.getElementById('backgroundCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw connections between close particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        initParticles();
        animate();
    }

    setupLanguageSelector() {
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.currentLanguage = e.target.value;
                this.updateContent();
                localStorage.setItem('preferredLanguage', this.currentLanguage);
            });

            // Load saved language preference
            const savedLanguage = localStorage.getItem('preferredLanguage');
            if (savedLanguage && this.translations[savedLanguage]) {
                this.currentLanguage = savedLanguage;
                languageSelect.value = savedLanguage;
            }
        }
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = this.translations[this.currentLanguage]?.[key];
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update section indicator position based on current section
        this.updateCurrentSectionIndicator();
    }

    setupScreenshotCarousel() {
        const carousels = document.querySelectorAll('.screenshot-carousel');
        carousels.forEach(carousel => {
            const slides = carousel.querySelectorAll('.carousel-slide');
            if (slides.length <= 1) return;

            let currentIndex = 0;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }

            // Start automatic rotation
            setInterval(nextSlide, 3000);
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Elements to animate
        const animateElements = document.querySelectorAll(`
            .project-card, 
            .skill-category, 
            .info-item, 
            .stat-item, 
            .timeline-item,
            .hero-content,
            .about-text
        `);

        animateElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });

        // Update current section indicator on scroll
        window.addEventListener('scroll', () => {
            this.updateCurrentSectionIndicator();
        });
    }

    updateCurrentSectionIndicator() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-list a');
        const indicator = document.querySelector('.current-section-indicator');

        if (!indicator) return;

        const scrollPos = window.scrollY + 100; // Ajusta este valor según necesites

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            // Calcula el rango donde la sección está activa
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const link = document.querySelector(`.nav-list a[data-section="${sectionId}"]`);
                if (link) {
                    // Remueve la clase active de todos los links
                    navLinks.forEach(l => l.classList.remove('active'));
                    // Agrega la clase active al link correspondiente
                    link.classList.add('active');

                    // Actualiza la posición del indicador
                    const linkRect = link.getBoundingClientRect();
                    const navContainer = document.querySelector('.nav-container');
                    const navRect = navContainer.getBoundingClientRect();

                    // Calcula la posición relativa al contenedor del navbar
                    indicator.style.width = `${linkRect.width}px`;
                    indicator.style.left = `${linkRect.left - navRect.left}px`;
                }
            }
        });
    }

    setupFormValidation() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Simple validation
            if (data.name && data.email && data.message) {
                // Show success message
                alert(this.translations[this.currentLanguage]['send-message'] + ' ' + this.translations[this.currentLanguage]['success']);
                form.reset();
            } else {
                alert(this.translations[this.currentLanguage]['fill-all-fields']);
            }
        });
    }

    setupScrollToTop() {
        const scrollTopBtn = document.getElementById('scrollTop');
        if (!scrollTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    scrollToSection(sectionId) {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Additional utility functions
function changeLanguage() {
    // This function is called from the HTML select onchange event
    // The main logic is handled in the PortfolioApp class
}

function scrollToSection(sectionId) {
    // Global function for smooth scrolling
    const element = document.querySelector(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}