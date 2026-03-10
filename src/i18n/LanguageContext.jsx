import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_language_label: "Language",

    // Hero
    hero_greeting: "Hi, I'm",
    hero_description:
      "Computer Science student and aspiring full-stack developer passionate about building modern web applications and innovative tech solutions. I work with the MERN stack and explore technologies like AI, IoT, and blockchain to create practical and impactful digital products.",
    hero_scroll: "Scroll",
    btn_view_my_work: "View My Work",

    // About
    about_title: "About Me",
    about_heading: "Passionate Full-Stack Developer",
    about_paragraph:
      "I’m a Computer Science student and aspiring full-stack developer who enjoys building practical and impactful digital solutions. My work focuses on modern technologies like the MERN stack while also exploring innovative areas such as AI-driven applications, IoT systems, and blockchain solutions. I enjoy turning ideas into real products — from developing intelligent interview platforms to building smart IoT systems — and I’m passionate about creating elegant solutions to complex problems while continuously learning new technologies to grow as a developer.",
    about_card_webdev_title: "Web Development",
    about_card_webdev_body:
      "Building modern, responsive, and scalable web applications using technologies like React, Node.js, Express, and MongoDB. I enjoy developing clean user interfaces and robust backend systems that work seamlessly together.",
    about_card_uiux_title: "UI/UX Design",
    about_card_uiux_body:
      "Designing intuitive and user-friendly interfaces that create smooth digital experiences. I focus on clean layouts, accessibility, and performance to make applications both functional and visually engaging.",
    about_card_innovative_title: "AI & Innovative Systems",
    about_card_innovative_body:
      "Exploring emerging technologies like AI, IoT, and blockchain to build innovative solutions. My projects include an AI-powered interview platform and an IoT-based herbal storage monitoring system with blockchain traceability.",
    btn_get_in_touch: "Get In Touch",
    btn_download_cv: "Download CV",

    // Skills
    skills_title: "My Skills",
    skills_category_all: "All",
    skills_category_frontend: "Frontend",
    skills_category_backend: "Backend",
    skills_category_tools: "Tools",
    skills_proficiency_level: "Proficiency Level",

    // Projects
    projects_title: "Featured Projects",
    projects_intro:
      "Here are some of the key projects I’ve built while exploring modern technologies like MERN, AI, IoT, and blockchain. Each project focuses on solving real-world problems with practical and scalable solutions.",
    project_1_title: "HerbTrace – Smart IoT Herb Storage System",
    project_1_desc:
      "A smart IoT-based storage system designed to monitor temperature and humidity conditions for medicinal herbs in real time. The project also integrates blockchain-based traceability to ensure transparency and reliability in the supply chain.",
    project_2_title: "InterviewIQ – AI Mock Interview Platform",
    project_2_desc:
      "An AI-powered mock interview platform that simulates real interview scenarios and provides intelligent feedback on responses. The platform includes ATS-style scoring, downloadable reports, and a credit-based SaaS model with secure authentication and payment integration.",
    project_3_title: "Crowdsourced Traffic Management System",
    project_3_desc:
      "A real-time traffic monitoring platform that uses the Google Maps API to visualize road conditions and traffic updates. The system allows users to contribute traffic reports, helping others identify congested routes and find better travel paths.",
    project_4_title: "AI Chat Application",
    project_4_desc:
      "Real-time chat application with AI-powered responses and voice integration.",
    projects_view_project: "View Project →",
    btn_check_github: "Check My GitHub",

    // Contact
    contact_title: "Get In Touch",
    contact_intro:
      "Have a project in mind or want to connect? Feel free to reach out. I’m always open to discussing new ideas, collaborations, and learning opportunities.",
    contact_information: "Contact Information",
    contact_connect_with_me: "Connect With Me",
    contact_label_email: "Email",
    contact_label_phone: "Phone",
    contact_label_location: "Location",
    contact_your_name: "Your Name",
    contact_your_email: "Your Email",
    contact_your_message: "Your Message",
    contact_placeholder_name: "Enter your name",
    contact_placeholder_email: "Enter your email address",
    contact_placeholder_message: "Hi Atharv, I’d like to discuss a project",
    contact_sending: "Sending...",
    contact_send_message: "Send Message",
    contact_toast_title: "Message Sent Successfully!",
    contact_toast_description:
      "Thanks for your message. I appreciate you reaching out and will respond as soon as possible.",

    // Footer
    footer_rights: "All rights reserved.",
    footer_made_with: "Crafted with",
    footer_by: "by Atharv.",
  },
  hi: {
    // Navbar
    nav_home: "होम",
    nav_about: "मेरे बारे में",
    nav_skills: "स्किल्स",
    nav_projects: "प्रोजेक्ट्स",
    nav_contact: "संपर्क",
    nav_language_label: "भाषा",

    // Hero
    hero_greeting: "नमस्ते, मैं हूँ",
    hero_description:
      "कंप्यूटर साइंस का छात्र और फुल-स्टैक डेवलपर बनने की तैयारी कर रहा हूँ। मुझे मॉडर्न वेब एप्लिकेशन और इनोवेटिव टेक सॉल्यूशन्स बनाना पसंद है। मैं MERN स्टैक के साथ काम करता हूँ और AI, IoT और ब्लॉकचेन जैसी टेक्नोलॉजीज़ के साथ प्रैक्टिकल और असरदार डिजिटल प्रोडक्ट बनाता हूँ।",
    hero_scroll: "स्क्रॉल करें",
    btn_view_my_work: "मेरा काम देखें",

    // About
    about_title: "मेरे बारे में",
    about_heading: "उत्साही फुल‑स्टैक डेवलपर",
    about_paragraph:
      "मैं एक कंप्यूटर साइंस छात्र और उभरता हुआ फुल‑स्टैक डेवलपर हूँ जिसे प्रैक्टिकल और इम्पैक्टफुल डिजिटल सॉल्यूशन्स बनाना पसंद है। मेरा काम MERN स्टैक जैसी मॉडर्न टेक्नोलॉजीज़ पर फोकस करता है, साथ ही मैं AI‑ड्रिवन एप्लिकेशन, IoT सिस्टम और ब्लॉकचेन सॉल्यूशन्स जैसे इनोवेटिव क्षेत्रों को भी एक्सप्लोर करता हूँ। मुझे आइडियाज़ को असली प्रोडक्ट में बदलना अच्छा लगता है और मैं लगातार नई टेक्नोलॉजीज़ सीखकर अपने आपको बेहतर बनाने की कोशिश करता रहता हूँ।",
    about_card_webdev_title: "वेब डेवलपमेंट",
    about_card_webdev_body:
      "React, Node.js, Express और MongoDB जैसी टेक्नोलॉजीज़ के साथ मॉडर्न, रिस्पॉन्सिव और स्केलेबल वेब एप्लिकेशन बनाना। मुझे क्लीन UI और मजबूत बैकएंड सिस्टम्स बनाना पसंद है जो एकसाथ अच्छी तरह काम करें।",
    about_card_uiux_title: "UI/UX डिज़ाइन",
    about_card_uiux_body:
      "इंट्यूटिव और यूज़र‑फ्रेंडली इंटरफेस डिज़ाइन करना जो स्मूद डिजिटल एक्सपीरियंस दें। मैं क्लीन लेआउट, एक्सेसिबिलिटी और परफॉर्मेंस पर ध्यान देता हूँ ताकि ऐप्लिकेशन खूबसूरत होने के साथ‑साथ उपयोग में आसान भी हों।",
    about_card_innovative_title: "AI और इनोवेटिव सिस्टम्स",
    about_card_innovative_body:
      "AI, IoT और ब्लॉकचेन जैसी नई टेक्नोलॉजीज़ के साथ इनोवेटिव सॉल्यूशन्स बनाना। मेरे प्रोजेक्ट्स में AI‑पावर्ड इंटरव्यू प्लेटफॉर्म और ब्लॉकचेन ट्रेसएबिलिटी के साथ IoT‑आधारित हर्बल स्टोरेज मॉनिटरिंग सिस्टम शामिल हैं।",
    btn_get_in_touch: "संपर्क करें",
    btn_download_cv: "CV डाउनलोड करें",

    // Skills
    skills_title: "मेरी स्किल्स",
    skills_category_all: "सभी",
    skills_category_frontend: "फ्रंटएंड",
    skills_category_backend: "बैकएंड",
    skills_category_tools: "टूल्स",
    skills_proficiency_level: "प्रोफिशिएंसी लेवल",

    // Projects
    projects_title: "फ़ीचर्ड प्रोजेक्ट्स",
    projects_intro:
      "यहाँ कुछ मुख्य प्रोजेक्ट्स हैं जो मैंने MERN, AI, IoT और ब्लॉकचेन जैसी टेक्नोलॉजीज़ के साथ बनाएं हैं। हर प्रोजेक्ट का फोकस रियल‑वर्ल्ड प्रॉब्लम्स को प्रैक्टिकल और स्केलेबल तरीके से सॉल्व करना है।",
    project_1_title: "HerbTrace – स्मार्ट IoT हर्ब स्टोरेज सिस्टम",
    project_1_desc:
      "एक स्मार्ट IoT‑आधारित स्टोरेज सिस्टम जो औषधीय जड़ी‑बूटियों के लिए तापमान और नमी की स्थिति को रियल‑टाइम में मॉनिटर करता है। यह सिस्टम सप्लाई‑चेन में ट्रांसपेरेंसी और भरोसे के लिए ब्लॉकचेन‑आधारित ट्रेसएबिलिटी भी प्रदान करता है।",
    project_2_title: "InterviewIQ – AI मॉक इंटरव्यू प्लेटफॉर्म",
    project_2_desc:
      "एक AI‑पावर्ड मॉक इंटरव्यू प्लेटफॉर्म जो रियल इंटरव्यू सीनारियो को सिम्युलेट करता है और आपके जवाबों पर इंटेलिजेंट फीडबैक देता है। प्लेटफॉर्म में ATS‑स्टाइल स्कोरिंग, डाउनलोडेबल रिपोर्ट्स और सिक्योर ऑथेंटिकेशन व पेमेंट इंटीग्रेशन के साथ क्रेडिट‑आधारित SaaS मॉडल शामिल है।",
    project_3_title: "क्राउडसोर्स्ड ट्रैफिक मैनेजमेंट सिस्टम",
    project_3_desc:
      "एक रियल‑टाइम ट्रैफिक मॉनिटरिंग प्लेटफॉर्म जो Google Maps API की मदद से रोड कंडीशन्स और ट्रैफिक अपडेट विज़ुअलाइज़ करता है। यूज़र ट्रैफिक रिपोर्ट्स सबमिट कर सकते हैं जिससे बाकी लोग जाम वाले रास्तों से बचकर बेहतर रूट चुन सकें।",
    projects_view_project: "प्रोजेक्ट देखें →",
    btn_check_github: "मेरा GitHub देखें",

    // Contact
    contact_title: "संपर्क करें",
    contact_intro:
      "कोई प्रोजेक्ट दिमाग में है या बस कनेक्ट होना चाहते हैं? बेझिझक संपर्क करें। मैं हमेशा नई आइडियाज़, कोलैबोरेशन और सीखने के मौकों के लिए तैयार हूँ।",
    contact_information: "संपर्क जानकारी",
    contact_connect_with_me: "मुझसे जुड़ें",
    contact_label_email: "ईमेल",
    contact_label_phone: "फ़ोन",
    contact_label_location: "स्थान",
    contact_your_name: "आपका नाम",
    contact_your_email: "आपका ईमेल",
    contact_your_message: "आपका संदेश",
    contact_placeholder_name: "अपना नाम लिखें",
    contact_placeholder_email: "अपना ईमेल पता लिखें",
    contact_placeholder_message: "नमस्ते अथर्व, मैं एक प्रोजेक्ट पर बात करना चाहता हूँ...",
    contact_sending: "भेजा जा रहा है...",
    contact_send_message: "संदेश भेजें",
    contact_toast_title: "संदेश सफलतापूर्वक भेजा गया!",
    contact_toast_description:
      "आपके संदेश के लिए धन्यवाद। मैं जल्द से जल्द आपसे संपर्क करूँगा।",

    // Footer
    footer_rights: "सभी अधिकार सुरक्षित।",
    footer_made_with: "प्यार से बनाया गया",
    footer_by: "अथर्व द्वारा",
  },
  es: {
    // Navbar
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    nav_language_label: "Idioma",

    // Hero
    hero_greeting: "Hola, soy",
    hero_description:
      "Estudiante de Ciencias de la Computación y futuro desarrollador full‑stack, apasionado por crear aplicaciones web modernas y soluciones tecnológicas innovadoras. Trabajo con el stack MERN y exploro tecnologías como IA, IoT y blockchain para crear productos digitales prácticos y útiles.",
    hero_scroll: "Desplazar",
    btn_view_my_work: "Ver mi trabajo",

    // About
    about_title: "Sobre mí",
    about_heading: "Desarrollador Full‑Stack Apasionado",
    about_paragraph:
      "Soy estudiante de Ciencias de la Computación y aspirante a desarrollador full‑stack al que le gusta crear soluciones digitales prácticas y con impacto. Mi trabajo se centra en tecnologías modernas como el stack MERN, mientras exploro áreas innovadoras como aplicaciones impulsadas por IA, sistemas IoT y soluciones con blockchain. Disfruto convertir ideas en productos reales y aprender constantemente nuevas tecnologías para crecer como desarrollador.",
    about_card_webdev_title: "Desarrollo Web",
    about_card_webdev_body:
      "Construyendo aplicaciones web modernas, responsivas y escalables usando tecnologías como React, Node.js, Express y MongoDB. Me gusta crear interfaces limpias y backends sólidos que funcionen bien juntos.",
    about_card_uiux_title: "Diseño UI/UX",
    about_card_uiux_body:
      "Diseñando interfaces intuitivas y fáciles de usar que ofrecen experiencias digitales fluidas. Me enfoco en maquetaciones limpias, accesibilidad y rendimiento para que las aplicaciones sean funcionales y atractivas.",
    about_card_innovative_title: "IA y Sistemas Innovadores",
    about_card_innovative_body:
      "Explorando tecnologías emergentes como IA, IoT y blockchain para crear soluciones innovadoras. Mis proyectos incluyen una plataforma de entrevistas con IA y un sistema IoT para monitoreo de almacenamiento de hierbas con trazabilidad en blockchain.",
    btn_get_in_touch: "Ponerse en contacto",
    btn_download_cv: "Descargar CV",

    // Skills
    skills_title: "Mis Habilidades",
    skills_category_all: "Todas",
    skills_category_frontend: "Frontend",
    skills_category_backend: "Backend",
    skills_category_tools: "Herramientas",
    skills_proficiency_level: "Nivel de dominio",

    // Projects
    projects_title: "Proyectos Destacados",
    projects_intro:
      "Estos son algunos de los proyectos clave que he creado explorando tecnologías modernas como MERN, IA, IoT y blockchain. Cada proyecto se centra en resolver problemas reales con soluciones prácticas y escalables.",
    project_1_title: "HerbTrace – Sistema IoT Inteligente de Almacenamiento de Hierbas",
    project_1_desc:
      "Un sistema de almacenamiento basado en IoT diseñado para monitorear en tiempo real la temperatura y la humedad de hierbas medicinales. El proyecto también integra trazabilidad basada en blockchain para garantizar transparencia y fiabilidad en la cadena de suministro.",
    project_2_title: "InterviewIQ – Plataforma de Entrevistas Simuladas con IA",
    project_2_desc:
      "Una plataforma de entrevistas simuladas impulsada por IA que recrea escenarios reales de entrevistas y ofrece retroalimentación inteligente sobre las respuestas. Incluye puntuación estilo ATS, informes descargables y un modelo SaaS basado en créditos con autenticación y pagos seguros.",
    project_3_title: "Sistema Colaborativo de Gestión de Tráfico",
    project_3_desc:
      "Una plataforma de monitoreo de tráfico en tiempo real que utiliza la API de Google Maps para visualizar el estado de las carreteras y las actualizaciones de tráfico. Los usuarios pueden enviar reportes de tráfico para ayudar a otros a evitar rutas congestionadas y encontrar mejores caminos.",
    projects_view_project: "Ver proyecto →",
    btn_check_github: "Ver mi GitHub",

    // Contact
    contact_title: "Contacto",
    contact_intro:
      "¿Tienes un proyecto en mente o simplemente quieres conectar? No dudes en escribirme. Siempre estoy abierto a nuevas ideas, colaboraciones y oportunidades para aprender.",
    contact_information: "Información de contacto",
    contact_connect_with_me: "Conecta conmigo",
    contact_label_email: "Correo",
    contact_label_phone: "Teléfono",
    contact_label_location: "Ubicación",
    contact_your_name: "Tu nombre",
    contact_your_email: "Tu correo",
    contact_your_message: "Tu mensaje",
    contact_placeholder_name: "Escribe tu nombre",
    contact_placeholder_email: "Escribe tu correo electrónico",
    contact_placeholder_message: "Hola Atharv, me gustaría hablar sobre un proyecto",
    contact_sending: "Enviando...",
    contact_send_message: "Enviar mensaje",
    contact_toast_title: "¡Mensaje enviado correctamente!",
    contact_toast_description:
      "Gracias por tu mensaje. Aprecio que te hayas puesto en contacto y te responderé lo antes posible.",

    // Footer
    footer_rights: "Todos los derechos reservados.",
    footer_made_with: "Creado con cariño",
    footer_by: "por Atharv",
  },
  ja: {
    // Navbar
    nav_home: "ホーム",
    nav_about: "私について",
    nav_skills: "スキル",
    nav_projects: "プロジェクト",
    nav_contact: "お問い合わせ",
    nav_language_label: "言語",

    // Hero
    hero_greeting: "こんにちは、",
    hero_description:
      "コンピュータサイエンス専攻の学生で、フルスタック開発者を目指しています。モダンな Web アプリケーションや革新的なテックソリューションを作ることが好きです。MERN スタックを中心に、AI・IoT・ブロックチェーンなどの技術を使って実用的で価値のあるプロダクトを開発しています。",
    hero_scroll: "スクロール",
    btn_view_my_work: "作品を見る",

    // About
    about_title: "私について",
    about_heading: "情熱的なフルスタック開発者",
    about_paragraph:
      "私はコンピュータサイエンスを学ぶ学生で、実用的でインパクトのあるデジタルソリューションを作ることが好きなフルスタック開発者の卵です。MERN スタックなどのモダンな技術に取り組みつつ、AI アプリケーション、IoT システム、ブロックチェーンソリューションといった分野も探求しています。アイデアを本物のプロダクトにすることが好きで、常に新しい技術を学びながら成長し続けています。",
    about_card_webdev_title: "Web 開発",
    about_card_webdev_body:
      "React、Node.js、Express、MongoDB などを用いて、モダンでレスポンシブ、かつスケーラブルな Web アプリケーションを構築します。クリーンな UI と堅牢なバックエンドを組み合わせることにこだわっています。",
    about_card_uiux_title: "UI/UX デザイン",
    about_card_uiux_body:
      "直感的で使いやすいインターフェースを設計し、スムーズなデジタル体験を実現します。シンプルなレイアウト、アクセシビリティ、パフォーマンスに重点を置き、機能的で見た目にも優れたアプリを目指しています。",
    about_card_innovative_title: "AI と革新的システム",
    about_card_innovative_body:
      "AI・IoT・ブロックチェーンなどの新しい技術を活用して革新的なソリューションを開発します。AI 面接プラットフォームやブロックチェーンによるトレーサビリティ機能付き IoT ハーブ保管モニタリングシステムなどのプロジェクトに取り組んでいます。",
    btn_get_in_touch: "お問い合わせ",
    btn_download_cv: "CV をダウンロード",

    // Skills
    skills_title: "スキル",
    skills_category_all: "すべて",
    skills_category_frontend: "フロントエンド",
    skills_category_backend: "バックエンド",
    skills_category_tools: "ツール",
    skills_proficiency_level: "習熟度",

    // Projects
    projects_title: "注目のプロジェクト",
    projects_intro:
      "ここでは、MERN、AI、IoT、Blockchain などのモダン技術を使って開発した代表的なプロジェクトを紹介します。どのプロジェクトも、実際の課題を実用的かつスケーラブルな形で解決することを目指しています。",
    project_1_title: "HerbTrace – スマート IoT ハーブ保管システム",
    project_1_desc:
      "薬用ハーブの温度と湿度をリアルタイムで監視するためのスマート IoT ストレージシステムです。サプライチェーンの透明性と信頼性を高めるために、ブロックチェーンベースのトレーサビリティも統合しています。",
    project_2_title: "InterviewIQ – AI モック面接プラットフォーム",
    project_2_desc:
      "実際の面接シナリオをシミュレートし、回答に対してインテリジェントなフィードバックを提供する AI 搭載モック面接プラットフォームです。ATS 風スコアリング、ダウンロード可能なレポート、セキュアな認証と決済連携を備えたクレジット制 SaaS モデルを採用しています。",
    project_3_title: "クラウドソース型トラフィック管理システム",
    project_3_desc:
      "Google Maps API を用いて道路状況や交通情報を可視化するリアルタイム交通モニタリングプラットフォームです。ユーザーが渋滞情報を投稿できるため、他の利用者は混雑したルートを避けてより良い経路を見つけられます。",
    projects_view_project: "プロジェクトを見る →",
    btn_check_github: "GitHub を見る",

    // Contact
    contact_title: "お問い合わせ",
    contact_intro:
      "話してみたいプロジェクトや、つながってみたいという気持ちがあれば、ぜひ気軽にご連絡ください。新しいアイデアやコラボレーション、学びの機会をいつでも歓迎しています。",
    contact_information: "連絡先情報",
    contact_connect_with_me: "SNS でつながる",
    contact_label_email: "メール",
    contact_label_phone: "電話",
    contact_label_location: "所在地",
    contact_your_name: "お名前",
    contact_your_email: "メールアドレス",
    contact_your_message: "メッセージ",
    contact_placeholder_name: "お名前を入力してください",
    contact_placeholder_email: "メールアドレスを入力してください",
    contact_placeholder_message: "こんにちは Atharv さん、プロジェクトについて相談したいです",
    contact_sending: "送信中...",
    contact_send_message: "メッセージを送信",
    contact_toast_title: "メッセージが送信されました！",
    contact_toast_description:
      "メッセージありがとうございます。できるだけ早くご連絡いたします。",

    // Footer
    footer_rights: "すべての権利を保有します。",
    footer_made_with: "心を込めて制作",
    footer_by: "Atharv より",
  },
  fr: {
    // Navbar
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_contact: "Contact",
    nav_language_label: "Langue",

    // Hero
    hero_greeting: "Salut, je suis",
    hero_description:
      "Étudiant en informatique et futur développeur full‑stack, passionné par la création d’applications web modernes et de solutions technologiques innovantes. Je travaille avec la stack MERN et j’explore des technologies comme l’IA, l’IoT et la blockchain pour créer des produits numériques pratiques et utiles.",
    hero_scroll: "Faire défiler",
    btn_view_my_work: "Voir mon travail",

    // About
    about_title: "À propos de moi",
    about_heading: "Développeur Full‑Stack Passionné",
    about_paragraph:
      "Je suis étudiant en informatique et aspirant développeur full‑stack. J’aime créer des solutions digitales pratiques et impactantes. Mon travail se concentre sur des technologies modernes comme la stack MERN tout en explorant des domaines innovants tels que les applications basées sur l’IA, les systèmes IoT et les solutions blockchain. J’adore transformer des idées en produits réels et j’apprends en continu de nouvelles technologies pour progresser en tant que développeur.",
    about_card_webdev_title: "Développement Web",
    about_card_webdev_body:
      "Création d’applications web modernes, responsives et évolutives avec des technologies comme React, Node.js, Express et MongoDB. J’aime concevoir des interfaces propres et des backends robustes qui fonctionnent parfaitement ensemble.",
    about_card_uiux_title: "Design UI/UX",
    about_card_uiux_body:
      "Conception d’interfaces intuitives et agréables à utiliser, offrant des expériences digitales fluides. Je me concentre sur des mises en page claires, l’accessibilité et les performances.",
    about_card_innovative_title: "IA & Systèmes Innovants",
    about_card_innovative_body:
      "Exploration de technologies émergentes comme l’IA, l’IoT et la blockchain pour créer des solutions innovantes. Mes projets incluent une plateforme d’entretien avec IA et un système IoT de suivi de stockage de plantes avec traçabilité blockchain.",
    btn_get_in_touch: "Me contacter",
    btn_download_cv: "Télécharger le CV",

    // Skills
    skills_title: "Mes compétences",
    skills_category_all: "Toutes",
    skills_category_frontend: "Frontend",
    skills_category_backend: "Backend",
    skills_category_tools: "Outils",
    skills_proficiency_level: "Niveau de maîtrise",

    // Projects
    projects_title: "Projets à la une",
    projects_intro:
      "Voici quelques-uns des projets clés que j’ai réalisés en explorant des technologies modernes comme MERN, l’IA, l’IoT et la blockchain. Chaque projet vise à résoudre des problèmes concrets avec des solutions pratiques et évolutives.",
    project_1_title: "HerbTrace – Système IoT intelligent de stockage d’herbes",
    project_1_desc:
      "Un système de stockage basé sur l’IoT conçu pour surveiller en temps réel la température et l’humidité des plantes médicinales. Le projet intègre également une traçabilité via blockchain pour garantir transparence et fiabilité dans la chaîne d’approvisionnement.",
    project_2_title: "InterviewIQ – Plateforme d’entretien simulé avec IA",
    project_2_desc:
      "Une plateforme d’entretien simulé alimentée par l’IA qui reproduit de vrais scénarios d’entretien et fournit un retour intelligent sur les réponses. Elle inclut un scoring de type ATS, des rapports téléchargeables et un modèle SaaS à crédits avec authentification et paiements sécurisés.",
    project_3_title: "Système de gestion du trafic collaboratif",
    project_3_desc:
      "Une plateforme de suivi du trafic en temps réel qui utilise l’API Google Maps pour visualiser l’état des routes et les mises à jour de circulation. Les utilisateurs peuvent contribuer des signalements afin d’aider les autres à éviter les zones encombrées et trouver de meilleurs itinéraires.",
    projects_view_project: "Voir le projet →",
    btn_check_github: "Voir mon GitHub",

    // Contact
    contact_title: "Contact",
    contact_intro:
      "Un projet en tête ou simplement envie d’échanger ? N’hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles idées, aux collaborations et aux occasions d’apprendre.",
    contact_information: "Informations de contact",
    contact_connect_with_me: "Réseaux sociaux",
    contact_label_email: "E‑mail",
    contact_label_phone: "Téléphone",
    contact_label_location: "Localisation",
    contact_your_name: "Votre nom",
    contact_your_email: "Votre e‑mail",
    contact_your_message: "Votre message",
    contact_placeholder_name: "Entrez votre nom",
    contact_placeholder_email: "Entrez votre adresse e-mail",
    contact_placeholder_message: "Bonjour Atharv, j’aimerais parler d’un projet",
    contact_sending: "Envoi...",
    contact_send_message: "Envoyer le message",
    contact_toast_title: "Message envoyé avec succès !",
    contact_toast_description:
      "Merci pour votre message. Je vous répondrai dès que possible.",

    // Footer
    footer_rights: "Tous droits réservés.",
    footer_made_with: "Conçu avec soin",
    footer_by: "par Atharv",
  },
  ar: {
    // Navbar
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_contact: "تواصل",
    nav_language_label: "اللغة",

    // Hero
    hero_greeting: "مرحباً، أنا",
    hero_description:
      "طالب علوم حاسوب وطموحي أن أصبح مطور فول ستاك. شغوفي بناء تطبيقات ويب حديثة وحلول تقنية مبتكرة. أعمل مع تقنية MERN وأستكشف تقنيات مثل الذكاء الاصطناعي، وإنترنت الأشياء، والبلوك تشين لإنشاء منتجات رقمية عملية وفعّالة.",
    hero_scroll: "التمرير",
    btn_view_my_work: "شاهد أعمالي",

    // About
    about_title: "نبذة عني",
    about_heading: "مطور فول ستاك شغوف",
    about_paragraph:
      "أنا طالب في علوم الحاسوب ومطور فول ستاك ناشئ يستمتع بإنشاء حلول رقمية عملية وذات تأثير. أركز في عملي على تقنيات حديثة مثل MERN، بالإضافة إلى استكشاف مجالات مبتكرة مثل تطبيقات الذكاء الاصطناعي وأنظمة إنترنت الأشياء وحلول البلوك تشين. أحب تحويل الأفكار إلى منتجات حقيقية وأحرص دائماً على تعلم تقنيات جديدة لتطوير نفسي كمطور.",
    about_card_webdev_title: "تطوير الويب",
    about_card_webdev_body:
      "بناء تطبيقات ويب حديثة وسريعة الاستجابة وقابلة للتوسع باستخدام React و Node.js و Express و MongoDB. أستمتع بإنشاء واجهات نظيفة وأنظمة خلفية قوية تعمل بتناغم.",
    about_card_uiux_title: "تصميم UI/UX",
    about_card_uiux_body:
      "تصميم واجهات بديهية وسهلة الاستخدام تقدم تجربة رقمية سلسة. أركز على البساطة وإمكانية الوصول والأداء لجعل التطبيقات عملية وجذابة بصرياً.",
    about_card_innovative_title: "الذكاء الاصطناعي والأنظمة المبتكرة",
    about_card_innovative_body:
      "استكشاف تقنيات ناشئة مثل الذكاء الاصطناعي وإنترنت الأشياء والبلوك تشين لبناء حلول مبتكرة. من مشاريعي منصة مقابلات مدعومة بالذكاء الاصطناعي ونظام مراقبة تخزين أعشاب يعتمد على إنترنت الأشياء مع تتبع عبر البلوك تشين.",
    btn_get_in_touch: "تواصل معي",
    btn_download_cv: "تحميل السيرة الذاتية",

    // Skills
    skills_title: "مهاراتي",
    skills_category_all: "الكل",
    skills_category_frontend: "الواجهة",
    skills_category_backend: "الخلفية",
    skills_category_tools: "الأدوات",
    skills_proficiency_level: "مستوى الإتقان",

    // Projects
    projects_title: "مشاريع مميزة",
    projects_intro:
      "هذه بعض أهم المشاريع التي عملت عليها مستخدماً تقنيات حديثة مثل MERN والذكاء الاصطناعي وإنترنت الأشياء والبلوك تشين. يهدف كل مشروع إلى حل مشكلات واقعية بحلول عملية وقابلة للتوسع.",
    project_1_title: "HerbTrace – نظام تخزين أعشاب ذكي مع إنترنت الأشياء",
    project_1_desc:
      "نظام تخزين يعتمد على إنترنت الأشياء لمراقبة درجة الحرارة والرطوبة للأعشاب الطبية في الوقت الفعلي. يتضمن المشروع أيضاً تتبعاً عبر البلوك تشين لضمان الشفافية والموثوقية في سلسلة التوريد.",
    project_2_title: "InterviewIQ – منصة مقابلات تجريبية بالذكاء الاصطناعي",
    project_2_desc:
      "منصة مقابلات تجريبية مدعومة بالذكاء الاصطناعي تحاكي سيناريوهات مقابلات حقيقية وتقدم ملاحظات ذكية على الإجابات. تتضمن المنصة نظام تقييم شبيه بـ ATS وتقارير قابلة للتنزيل ونموذج SaaS يعتمد على الرصيد مع مصادقة ومدفوعات آمنة.",
    project_3_title: "نظام إدارة حركة مرور جماعي",
    project_3_desc:
      "منصة لمراقبة حركة المرور في الوقت الفعلي تستخدم Google Maps API لعرض حالة الطرق وتحديثات الازدحام. يمكن للمستخدمين إرسال تقارير عن حركة المرور لمساعدة الآخرين على تجنب الطرق المزدحمة واختيار مسارات أفضل.",
    projects_view_project: "عرض المشروع →",
    btn_check_github: "عرض GitHub الخاص بي",

    // Contact
    contact_title: "تواصل معي",
    contact_intro:
      "هل لديك مشروع في بالك أو ترغب فقط في التواصل؟ لا تتردد في مراسلتي. أنا دائماً منفتح على الأفكار الجديدة وفرص التعاون والتعلم.",
    contact_information: "معلومات التواصل",
    contact_connect_with_me: "تواصل عبر الشبكات",
    contact_label_email: "البريد الإلكتروني",
    contact_label_phone: "الهاتف",
    contact_label_location: "الموقع",
    contact_your_name: "اسمك",
    contact_your_email: "بريدك الإلكتروني",
    contact_your_message: "رسالتك",
    contact_placeholder_name: "اكتب اسمك هنا",
    contact_placeholder_email: "اكتب بريدك الإلكتروني هنا",
    contact_placeholder_message: "مرحباً يا Atharv، أود مناقشة مشروع ما",
    contact_sending: "جارٍ الإرسال...",
    contact_send_message: "إرسال الرسالة",
    contact_toast_title: "تم إرسال الرسالة بنجاح!",
    contact_toast_description:
      "شكرًا على رسالتك، أقدّر تواصلك وسأرد عليك في أقرب وقت ممكن.",

    // Footer
    footer_rights: "جميع الحقوق محفوظة.",
    footer_made_with: "صُنع بحب",
    footer_by: "بواسطة Atharv",
  },
  de: {
    // Navbar
    nav_home: "Start",
    nav_about: "Über mich",
    nav_skills: "Skills",
    nav_projects: "Projekte",
    nav_contact: "Kontakt",
    nav_language_label: "Sprache",

    // Hero
    hero_greeting: "Hi, ich bin",
    hero_description:
      "Informatikstudent und angehender Full‑Stack‑Entwickler, der leidenschaftlich gerne moderne Webanwendungen und innovative Technologielösungen baut. Ich arbeite mit dem MERN‑Stack und experimentiere mit Technologien wie KI, IoT und Blockchain, um praktische und wirkungsvolle digitale Produkte zu erstellen.",
    hero_scroll: "Scrollen",
    btn_view_my_work: "Meine Arbeit ansehen",

    // About
    about_title: "Über mich",
    about_heading: "Leidenschaftlicher Full‑Stack‑Entwickler",
    about_paragraph:
      "Ich bin Informatikstudent und angehender Full‑Stack‑Entwickler, der gerne praktische und wirkungsvolle digitale Lösungen entwickelt. Mein Fokus liegt auf modernen Technologien wie dem MERN‑Stack, während ich gleichzeitig innovative Bereiche wie KI‑gestützte Anwendungen, IoT‑Systeme und Blockchain‑Lösungen erkunde. Ich liebe es, Ideen in echte Produkte zu verwandeln und lerne ständig neue Technologien, um mich als Entwickler weiterzuentwickeln.",
    about_card_webdev_title: "Webentwicklung",
    about_card_webdev_body:
      "Entwicklung moderner, responsiver und skalierbarer Webanwendungen mit Technologien wie React, Node.js, Express und MongoDB. Ich lege Wert auf saubere Benutzeroberflächen und robuste Backends, die nahtlos zusammenarbeiten.",
    about_card_uiux_title: "UI/UX‑Design",
    about_card_uiux_body:
      "Gestaltung intuitiver und benutzerfreundlicher Oberflächen, die ein flüssiges digitales Erlebnis bieten. Ich konzentriere mich auf klare Layouts, Barrierefreiheit und Performance.",
    about_card_innovative_title: "KI & Innovative Systeme",
    about_card_innovative_body:
      "Erforschung neuer Technologien wie KI, IoT und Blockchain, um innovative Lösungen zu erstellen. Zu meinen Projekten gehören eine KI‑gestützte Interviewplattform und ein IoT‑basiertes System zur Überwachung der Lagerung von Kräutern mit Blockchain‑Nachverfolgung.",
    btn_get_in_touch: "Kontakt aufnehmen",
    btn_download_cv: "Lebenslauf herunterladen",

    // Skills
    skills_title: "Meine Skills",
    skills_category_all: "Alle",
    skills_category_frontend: "Frontend",
    skills_category_backend: "Backend",
    skills_category_tools: "Tools",
    skills_proficiency_level: "Kenntnisstand",

    // Projects
    projects_title: "Ausgewählte Projekte",
    projects_intro:
      "Hier sind einige der wichtigsten Projekte, die ich mit modernen Technologien wie MERN, KI, IoT und Blockchain entwickelt habe. Jedes Projekt zielt darauf ab, reale Probleme mit praktischen und skalierbaren Lösungen zu lösen.",
    project_1_title: "HerbTrace – Intelligentes IoT-Kräuterlagersystem",
    project_1_desc:
      "Ein IoT-basiertes Lagersystem, das Temperatur und Luftfeuchtigkeit von Heilkräutern in Echtzeit überwacht. Zusätzlich sorgt eine Blockchain-basierte Nachverfolgung für Transparenz und Vertrauen in der Lieferkette.",
    project_2_title: "InterviewIQ – KI-gestützte Interviewplattform",
    project_2_desc:
      "Eine KI-gestützte Plattform für Probeinterviews, die reale Interviewsituationen simuliert und intelligentes Feedback zu Antworten gibt. Die Plattform bietet ATS-ähnliche Bewertungen, herunterladbare Berichte und ein kreditbasiertes SaaS-Modell mit sicherer Authentifizierung und Zahlungsabwicklung.",
    project_3_title: "Crowdsourcing-Verkehrsmanagementsystem",
    project_3_desc:
      "Eine Echtzeit-Plattform zur Verkehrsüberwachung, die die Google-Maps-API nutzt, um Straßenbedingungen und Verkehrsdaten zu visualisieren. Nutzer können Verkehrsmeldungen teilen, damit andere Staus vermeiden und bessere Routen finden können.",
    projects_view_project: "Projekt ansehen →",
    btn_check_github: "Mein GitHub ansehen",

    // Contact
    contact_title: "Kontakt",
    contact_intro:
      "Du hast ein Projekt im Kopf oder möchtest einfach in Kontakt treten? Schreib mir gerne. Ich freue mich immer über neue Ideen, Kooperationen und Lernmöglichkeiten.",
    contact_information: "Kontaktinformationen",
    contact_connect_with_me: "Vernetze dich mit mir",
    contact_label_email: "E‑Mail",
    contact_label_phone: "Telefon",
    contact_label_location: "Standort",
    contact_your_name: "Dein Name",
    contact_your_email: "Deine E‑Mail",
    contact_your_message: "Deine Nachricht",
    contact_placeholder_name: "Gib deinen Namen ein",
    contact_placeholder_email: "Gib deine E-Mail-Adresse ein",
    contact_placeholder_message: "Hi Atharv, ich würde gerne über ein Projekt sprechen",
    contact_sending: "Wird gesendet...",
    contact_send_message: "Nachricht senden",
    contact_toast_title: "Nachricht erfolgreich gesendet!",
    contact_toast_description:
      "Vielen Dank für deine Nachricht. Ich melde mich so schnell wie möglich.",

    // Footer
    footer_rights: "Alle Rechte vorbehalten.",
    footer_made_with: "Mit Liebe gemacht",
    footer_by: "von Atharv",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language]?.[key] ?? translations.en[key] ?? key,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};

