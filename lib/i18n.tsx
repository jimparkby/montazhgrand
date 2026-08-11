"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "en";

export const shared = {
  phones: ["+375 17 352-23-80", "+375 17 379-42-41", "+375 44 766-94-88"],
  email: "info@m-grand.by",
  website: "m-grand.by",
  founded: 2011,
};

type NavItem = { href: string; label: string };
type Service = {
  slug: string;
  image: string;
  title: string;
  short: string;
  description: string;
};
type ProjectItem = { title: string; site: string; contractor: string };
type Vacancy = {
  title: string;
  education: string;
  experience: string;
  skills: string;
  offer: string;
  link: string;
  phone: string;
};

export type Dictionary = {
  lang: Lang;
  htmlLang: string;
  company: {
    name: string;
    shortName: string;
    slogan: string;
    sloganSub: string;
    legalAddress: string;
    mailAddress: string;
    iso: string;
  };
  nav: NavItem[];
  services: Service[];
  projects: ProjectItem[];
  vacancies: Vacancy[];
  ui: {
    langToggle: string;
    header: { topBarSubmit: string };
    footer: {
      about: string;
      navTitle: string;
      contactsTitle: string;
      addressTitle: string;
      legalAddressLabel: string;
      mailAddressLabel: string;
      isoLine: string;
      rights: string;
    };
    home: {
      heroCtaServices: string;
      heroCtaContacts: string;
      aboutEyebrow: string;
      aboutTitle: string;
      aboutP1: string;
      aboutP2: string;
      aboutLink: string;
      servicesEyebrow: string;
      servicesTitle: string;
      servicesAll: string;
      projectsEyebrow: string;
      projectsTitle: string;
      projectsText: string;
      projectsLink: string;
      ctaTitle: string;
      ctaText: string;
      ctaButton: string;
    };
    about: {
      eyebrow: string;
      title: string;
      missionTitle: string;
      missionText: string;
      activityTitle: string;
      activityP1: string;
      activityP2: string;
      activityP3: string;
      isoBig: string;
      isoText: string;
      sinceBig: string;
      sinceText: string;
    };
    services: {
      eyebrow: string;
      title: string;
      subtitle: string;
      serviceLabel: string;
      contactTitle: string;
      contactText: string;
      orWrite: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      subtitle: string;
      intro: string;
      siteLabel: string;
      contractorLabel: string;
    };
    career: {
      eyebrow: string;
      title: string;
      subtitle: string;
      vacanciesTitle: string;
      educationLabel: string;
      experienceLabel: string;
      skillsLabel: string;
      offerLabel: string;
      linkText: string;
    };
    contacts: {
      eyebrow: string;
      title: string;
      legalAddressLabel: string;
      mailAddressLabel: string;
      phonesLabel: string;
      emailLabel: string;
      formTitle: string;
      formText: string;
    };
    form: {
      firstName: string;
      lastName: string;
      email: string;
      subject: string;
      message: string;
      attach: string;
      attachHint: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successText: string;
      sendAnother: string;
      errorDefault: string;
    };
  };
};

const ruServicesMeta = [
  { slug: "montazh-oborudovaniya", image: "/images/hero-refinery-night.jpg" },
  { slug: "montazh-truboprovodov", image: "/images/pipe-rack.jpg" },
  { slug: "metallokonstruktsii", image: "/images/steel-structures.jpg" },
  {
    slug: "nasosnoe-kompressornoe-oborudovanie",
    image: "/images/pumps-compressor.jpg",
  },
  { slug: "izolyatsiya-truboprovodov", image: "/images/pipe-insulation.jpg" },
];

const ru: Dictionary = {
  lang: "ru",
  htmlLang: "ru",
  company: {
    name: "ООО «Монтажгранд»",
    shortName: "Монтажгранд",
    slogan: "Строим надёжность для промышленности",
    sloganSub:
      "Монтаж технологического оборудования, трубопроводов и металлоконструкций на нефтехимических и промышленных предприятиях Беларуси, России и за рубежом.",
    legalAddress: "220083, г. Минск, пр-т Дзержинского, д. 104, офис 1101",
    mailAddress: "220030, г. Минск, ул. Мясникова, д. 39, офис 355",
    iso: "Система менеджмента качества СТБ ISO 9001-2015",
  },
  nav: [
    { href: "/", label: "Главная" },
    { href: "/about", label: "О компании" },
    { href: "/services", label: "Услуги" },
    { href: "/projects", label: "Реализованные проекты" },
    { href: "/career", label: "Карьера" },
    { href: "/contacts", label: "Контакты" },
  ],
  services: [
    {
      ...ruServicesMeta[0],
      title: "Монтаж технологического оборудования",
      short: "Монтаж оборудования квалифицированными аттестованными специалистами.",
      description:
        "Монтаж технологического оборудования осуществляется квалифицированными специалистами с необходимыми аттестатами. Работаем на объектах любой сложности — от установки отдельных узлов до полной сборки технологических линий.",
    },
    {
      ...ruServicesMeta[1],
      title: "Монтаж технологических трубопроводов",
      short: "Качественная и надёжная сборка трубопроводов на объектах любой сложности.",
      description:
        "ООО «Монтажгранд» занимается монтажом технологических трубопроводов, осуществляя качественную и надёжную сборку трубопроводов на объектах любой сложности — от подготовки трассы до испытаний под давлением.",
    },
    {
      ...ruServicesMeta[2],
      title: "Металлоконструкции",
      short: "Сборка промышленных металлоконструкций любой сложности.",
      description:
        "Одно из основных направлений деятельности — сборка любых промышленных металлоконструкций. Выполнение монтажных работ достигается за счёт наличия собственного оборудования, техники и штата высококвалифицированных специалистов.",
    },
    {
      ...ruServicesMeta[3],
      title: "Насосное и компрессорное оборудование",
      short: "Монтаж насосов и компрессоров от фундамента до пуско-наладки.",
      description:
        "Установка насосного оборудования требует особой квалификации. Наши специалисты производят монтаж насосов и компрессоров — от установки на фундамент до комплексного опробования агрегатов.",
    },
    {
      ...ruServicesMeta[4],
      title: "Изоляция трубопроводов",
      short: "Теплоизоляция, сохраняющая тепло и защищающая персонал.",
      description:
        "Теплоизоляция трубопроводов значительно снижает потери тепла, сберегает объект от воздействия низких температур, защищает персонал от ожогов и нейтрализует образование конденсата.",
    },
  ],
  projects: [
    {
      title:
        "«Увеличение производительности комбинированной установки каталитического крекинга MSCC», III очередь строительства",
      site: "ОАО «Мозырский НПЗ»",
      contractor: "ЧП «Полесье-Промжилстрой»",
    },
    {
      title: "«Трубопровод вывода бензина КУКК на гидрогенизационные процессы»",
      site: "ОАО «Мозырский НПЗ»",
      contractor: "ЧП «Полесье-Промжилстрой»",
    },
    {
      title:
        "«Комплекс гидрокрекинга тяжёлых нефтяных остатков. Установка производства серы»",
      site: "ОАО «Мозырский НПЗ»",
      contractor: "ООО «Лотос»",
    },
    {
      title: "«Строительство установки замедленного коксования нефтяных остатков»",
      site: "ОАО «Нафтан»",
      contractor: "ОАО «Нефтезаводмонтаж»",
    },
    {
      title: "«Комплекс гидрокрекинга тяжёлых нефтяных остатков»",
      site: "ОАО «Мозырский НПЗ»",
      contractor: "ОАО «Промтехмонтаж»",
    },
    {
      title:
        "«Реконструкция комплекса «Гидрокрекинг» (увеличение производительности)», 2 очередь, г. Новополоцк, Витебская обл.",
      site: "ОАО «Нафтан»",
      contractor: "ОАО «Центроэнергомонтаж»",
    },
    {
      title:
        "«Перевод установки Г34-107 на прямое питание», проект ТП-МН3-01/2022-ТК1, ТК2, ТК3. Монтаж насосов и трубопроводов на реконструкции установки каталитического крекинга Г34-107 для транспортирования дизельного топлива, бензина, вакуумного газойля, пара низкого и среднего давления, технического воздуха, воздуха КИП, азота низкого и высокого давления",
      site: "АО «Газпромнефть МНЗ», Московский НПЗ",
      contractor: "АО «Промфинстрой»",
    },
  ],
  vacancies: [
    {
      title: "Монтажник технологических трубопроводов и связанных с ним конструкций",
      education: "Профессионально-техническое",
      experience: "От 1 года",
      skills:
        "Монтаж технологических трубопроводов, металлоконструкций, чтение технологических чертежей",
      offer: "Полный социальный пакет",
      link: "https://gsz.gov.by/registration/employer/vacancy/1390162/detail-public/",
      phone: "+375 44 766-94-88",
    },
    {
      title: "Электрогазосварщик",
      education: "Профессионально-техническое",
      experience: "От 1 года",
      skills:
        "Выполнение сварных соединений трубных узлов, металлоконструкций, технологических трубопроводов",
      offer: "Полный социальный пакет",
      link: "https://gsz.gov.by/registration/employer/vacancy/1390156/detail-public/",
      phone: "+375 44 766-94-88",
    },
    {
      title: "Производитель работ",
      education: "Высшее, профессионально-техническое",
      experience: "От 3 лет",
      skills:
        "Опыт работы на предприятиях химической, нефтехимической промышленности. Организация выполнения работ по монтажу технологических трубопроводов, технологического оборудования, металлоконструкций. Подготовка исполнительной документации",
      offer: "Полный социальный пакет",
      link: "https://gsz.gov.by/registration/employer/vacancy/1499831/detail-public/",
      phone: "+375 44 766-94-88",
    },
  ],
  ui: {
    langToggle: "EN",
    header: { topBarSubmit: "Оставить заявку" },
    footer: {
      about:
        "Монтаж технологического оборудования, трубопроводов и металлоконструкций на предприятиях нефтехимической и промышленной отрасли.",
      navTitle: "Навигация",
      contactsTitle: "Контакты",
      addressTitle: "Адрес",
      legalAddressLabel: "Юридический адрес:",
      mailAddressLabel: "Почтовый адрес:",
      isoLine: "Система менеджмента качества СТБ ISO 9001-2015",
      rights: "Все права защищены.",
    },
    home: {
      heroCtaServices: "Наши услуги",
      heroCtaContacts: "Связаться с нами",
      aboutEyebrow: "О компании",
      aboutTitle: "Надёжный партнёр в промышленном монтаже",
      aboutP1:
        "ООО «Монтажгранд» — организация, основным видом деятельности которой является выполнение монтажных работ технологического оборудования, технологических трубопроводов и металлоконструкций на нефтехимических и промышленных предприятиях Республики Беларусь, Российской Федерации и за рубежом.",
      aboutP2:
        "За годы работы компания зарекомендовала себя как надёжный и ответственный партнёр благодаря качественному выполнению сложнейших работ. Единая команда преданных своему делу профессионалов — главное достояние организации.",
      aboutLink: "Подробнее о компании →",
      servicesEyebrow: "Услуги",
      servicesTitle: "Что мы делаем",
      servicesAll: "Все услуги →",
      projectsEyebrow: "Реализованные проекты",
      projectsTitle: "Объекты на «Мозырском НПЗ» и «Нафтане»",
      projectsText:
        "С 2011 по 2026 год мы выполнили монтажные работы на комплексах каталитического крекинга, гидрокрекинга и коксования для крупнейших нефтеперерабатывающих заводов Беларуси и России — в партнёрстве с ведущими генеральными подрядчиками отрасли.",
      projectsLink: "Смотреть все проекты →",
      ctaTitle: "Готовы обсудить проект?",
      ctaText: "Расскажите о задаче — мы предложим решение и рассчитаем сроки.",
      ctaButton: "Оставить заявку",
    },
    about: {
      eyebrow: "О компании",
      title: "Надёжность, проверенная объектами",
      missionTitle: "Наша миссия",
      missionText:
        "Содействие в решении комплексных задач на предприятиях химической и нефтяной промышленности.",
      activityTitle: "Наша деятельность",
      activityP1:
        "ООО «Монтажгранд» — организация, основными видами деятельности которой является выполнение монтажных работ в части монтажа технологического оборудования, технологических трубопроводов, металлоконструкций на нефтехимических и промышленных предприятиях Республики Беларусь, Российской Федерации и за рубежом.",
      activityP2:
        "За годы работы ООО «Монтажгранд» зарекомендовал себя как надёжный и ответственный партнёр благодаря качественному выполнению сложнейших работ.",
      activityP3:
        "Единая команда преданных своему делу профессионалов — главное достояние организации. Результат работы — проекты, увеличивающие производственные мощности предприятий, смонтированное оборудование, резервуары, сотни километров труб.",
      isoBig: "ISO 9001-2015",
      isoText:
        "В ООО «Монтажгранд» внедрена система менеджмента качества СТБ ISO 9001-2015.",
      sinceBig: "С 2011 года",
      sinceText:
        "Выполняем монтажные работы на объектах нефтехимической и промышленной отрасли Беларуси, России и за рубежом.",
    },
    services: {
      eyebrow: "Услуги",
      title: "Монтажные работы полного цикла",
      subtitle:
        "От монтажа технологического оборудования и трубопроводов до сборки металлоконструкций и изоляции — выполняем работы любой сложности.",
      serviceLabel: "Услуга",
      contactTitle: "Готовы обсудить проект?",
      contactText:
        "Для получения обратной связи заполните форму — мы свяжемся с вами в ближайшее время.",
      orWrite: "Или напишите напрямую:",
    },
    projects: {
      eyebrow: "Реализованные проекты",
      title: "Объекты, которые говорят за нас",
      subtitle:
        "С 2011 по 2026 год мы участвовали в строительстве ключевых технологических комплексов на крупнейших нефтеперерабатывающих заводах региона.",
      intro:
        "За период с 2011 по 2026 год ООО «Монтажгранд» выполнило договоры на ОАО «Мозырский НПЗ» и ОАО «Нафтан» — от увеличения производительности установок каталитического крекинга до строительства комплексов гидрокрекинга и замедленного коксования. Каждый проект — это совместная работа с ведущими генеральными подрядчиками отрасли и точное соблюдение технологических требований заказчика.",
      siteLabel: "Объект:",
      contractorLabel: "Генеральный подрядчик:",
    },
    career: {
      eyebrow: "Карьера",
      title: "Строим карьеру в «Монтажгранд»",
      subtitle:
        "Приглашаем в команду специалистов, готовых работать на крупных объектах нефтехимической промышленности.",
      vacanciesTitle: "Вакансии",
      educationLabel: "Образование",
      experienceLabel: "Опыт работы",
      skillsLabel: "Навыки",
      offerLabel: "Компания предлагает",
      linkText: "Вакансия на gsz.gov.by →",
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами",
      legalAddressLabel: "Юридический адрес",
      mailAddressLabel: "Почтовый адрес",
      phonesLabel: "Телефоны",
      emailLabel: "Email",
      formTitle: "Напишите нам",
      formText: "Заполните форму — мы свяжемся с вами в ближайшее время.",
    },
    form: {
      firstName: "Ваше имя (обязательно)",
      lastName: "Ваша фамилия (обязательно)",
      email: "Ваш e-mail (обязательно)",
      subject: "Тема",
      message: "Сообщение",
      attach: "Прикрепить файл",
      attachHint: "До 5 МБ",
      submit: "Отправить заявку",
      submitting: "Отправка...",
      successTitle: "Заявка отправлена",
      successText: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      sendAnother: "Отправить ещё одну заявку",
      errorDefault: "Не удалось отправить заявку",
    },
  },
};

const enServicesMeta = ruServicesMeta;

const en: Dictionary = {
  lang: "en",
  htmlLang: "en",
  company: {
    name: "Montazhgrand LLC",
    shortName: "Montazhgrand",
    slogan: "Building reliability for industry",
    sloganSub:
      "Installation of process equipment, pipelines and steel structures at petrochemical and industrial plants in Belarus, Russia and abroad.",
    legalAddress: "104 Dzerzhinskogo Ave., office 1101, 220083 Minsk, Belarus",
    mailAddress: "39 Myasnikova St., office 355, 220030 Minsk, Belarus",
    iso: "Quality management system STB ISO 9001-2015",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/career", label: "Careers" },
    { href: "/contacts", label: "Contacts" },
  ],
  services: [
    {
      ...enServicesMeta[0],
      title: "Process equipment installation",
      short: "Equipment installation by qualified, certified specialists.",
      description:
        "Process equipment installation is carried out by qualified specialists holding all required certifications. We work on sites of any complexity — from installing individual units to assembling complete process lines.",
    },
    {
      ...enServicesMeta[1],
      title: "Process pipeline installation",
      short: "Reliable, high-quality pipeline assembly on sites of any complexity.",
      description:
        "Montazhgrand LLC installs process pipelines, delivering reliable, high-quality assembly on sites of any complexity — from route preparation to pressure testing.",
    },
    {
      ...enServicesMeta[2],
      title: "Steel structures",
      short: "Assembly of industrial steel structures of any complexity.",
      description:
        "One of our core areas is the assembly of industrial steel structures of any kind. Installation work is backed by our own equipment, machinery and a team of highly qualified specialists.",
    },
    {
      ...enServicesMeta[3],
      title: "Pumping and compressor equipment",
      short: "Pump and compressor installation, from foundation to commissioning.",
      description:
        "Installing pumping equipment requires particular expertise. Our specialists install pumps and compressors — from mounting on the foundation to full commissioning trials of the units.",
    },
    {
      ...enServicesMeta[4],
      title: "Pipeline insulation",
      short: "Thermal insulation that retains heat and protects personnel.",
      description:
        "Pipeline thermal insulation significantly reduces heat loss, protects the facility from low temperatures, shields personnel from burns and prevents condensation.",
    },
  ],
  projects: [
    {
      title:
        "“Capacity increase of the MSCC combined catalytic cracking unit”, construction stage III",
      site: "Mozyr Oil Refinery OJSC",
      contractor: "Polesie-Promzhilstroy PE",
    },
    {
      title: "“Pipeline for MSCC gasoline output to hydrotreating processes”",
      site: "Mozyr Oil Refinery OJSC",
      contractor: "Polesie-Promzhilstroy PE",
    },
    {
      title:
        "“Heavy oil residue hydrocracking complex. Sulfur production unit”",
      site: "Mozyr Oil Refinery OJSC",
      contractor: "Lotos LLC",
    },
    {
      title: "“Construction of a delayed coking unit for oil residues”",
      site: "Naftan OJSC",
      contractor: "Neftezavodmontazh OJSC",
    },
    {
      title: "“Heavy oil residue hydrocracking complex”",
      site: "Mozyr Oil Refinery OJSC",
      contractor: "Promtekhmontazh OJSC",
    },
    {
      title:
        "“Reconstruction of the Hydrocracking complex (capacity increase)”, stage 2, Novopolotsk, Vitebsk region",
      site: "Naftan OJSC",
      contractor: "Centroenergomontazh OJSC",
    },
    {
      title:
        "“Conversion of unit G34-107 to direct feed”, project TP-MN3-01/2022-TK1, TK2, TK3. Installation of pumps and pipelines during reconstruction of the G34-107 catalytic cracking unit for conveying diesel fuel, gasoline, vacuum gas oil, low- and medium-pressure steam, plant air, instrument air, and low- and high-pressure nitrogen",
      site: "Gazpromneft MNZ JSC, Moscow Refinery",
      contractor: "Promfinstroy JSC",
    },
  ],
  vacancies: [
    {
      title: "Process pipeline and structural steel fitter",
      education: "Vocational",
      experience: "1+ years",
      skills:
        "Installation of process pipelines and steel structures, reading process drawings",
      offer: "Full benefits package",
      link: "https://gsz.gov.by/registration/employer/vacancy/1390162/detail-public/",
      phone: "+375 44 766-94-88",
    },
    {
      title: "Electric and gas welder",
      education: "Vocational",
      experience: "1+ years",
      skills:
        "Welding of pipe assemblies, steel structures and process pipelines",
      offer: "Full benefits package",
      link: "https://gsz.gov.by/registration/employer/vacancy/1390156/detail-public/",
      phone: "+375 44 766-94-88",
    },
    {
      title: "Site works supervisor",
      education: "Higher / vocational",
      experience: "3+ years",
      skills:
        "Experience in the chemical / petrochemical industry. Organizing installation of process pipelines, process equipment and steel structures. Preparing as-built documentation",
      offer: "Full benefits package",
      link: "https://gsz.gov.by/registration/employer/vacancy/1499831/detail-public/",
      phone: "+375 44 766-94-88",
    },
  ],
  ui: {
    langToggle: "RU",
    header: { topBarSubmit: "Request a call" },
    footer: {
      about:
        "Installation of process equipment, pipelines and steel structures at petrochemical and industrial plants.",
      navTitle: "Navigation",
      contactsTitle: "Contacts",
      addressTitle: "Address",
      legalAddressLabel: "Legal address:",
      mailAddressLabel: "Mailing address:",
      isoLine: "Quality management system STB ISO 9001-2015",
      rights: "All rights reserved.",
    },
    home: {
      heroCtaServices: "Our services",
      heroCtaContacts: "Get in touch",
      aboutEyebrow: "About us",
      aboutTitle: "A reliable partner in industrial installation",
      aboutP1:
        "Montazhgrand LLC is a company whose core activity is the installation of process equipment, process pipelines and steel structures at petrochemical and industrial plants in the Republic of Belarus, the Russian Federation and abroad.",
      aboutP2:
        "Over the years the company has built a reputation as a reliable, responsible partner delivering complex work to a high standard. A single team of dedicated professionals is the company's greatest asset.",
      aboutLink: "More about the company →",
      servicesEyebrow: "Services",
      servicesTitle: "What we do",
      servicesAll: "All services →",
      projectsEyebrow: "Completed projects",
      projectsTitle: "Sites at Mozyr Oil Refinery and Naftan",
      projectsText:
        "From 2011 to 2026 we carried out installation work on catalytic cracking, hydrocracking and coking complexes for the largest oil refineries in Belarus and Russia — in partnership with leading general contractors in the industry.",
      projectsLink: "View all projects →",
      ctaTitle: "Ready to discuss a project?",
      ctaText: "Tell us about your task — we'll propose a solution and timeline.",
      ctaButton: "Send a request",
    },
    about: {
      eyebrow: "About us",
      title: "Reliability proven on site",
      missionTitle: "Our mission",
      missionText:
        "Helping solve complex challenges at chemical and petroleum industry facilities.",
      activityTitle: "Our activity",
      activityP1:
        "Montazhgrand LLC is a company whose core activities include the installation of process equipment, process pipelines and steel structures at petrochemical and industrial plants in the Republic of Belarus, the Russian Federation and abroad.",
      activityP2:
        "Over the years Montazhgrand LLC has built a reputation as a reliable, responsible partner delivering complex work to a high standard.",
      activityP3:
        "A single team of dedicated professionals is the company's greatest asset. The result of our work: projects that increase plant production capacity, installed equipment, storage tanks, hundreds of kilometers of pipe.",
      isoBig: "ISO 9001-2015",
      isoText:
        "Montazhgrand LLC operates a quality management system certified to STB ISO 9001-2015.",
      sinceBig: "Since 2011",
      sinceText:
        "We carry out installation work at petrochemical and industrial sites in Belarus, Russia and abroad.",
    },
    services: {
      eyebrow: "Services",
      title: "Full-cycle installation work",
      subtitle:
        "From process equipment and pipeline installation to steel structure assembly and insulation — we handle work of any complexity.",
      serviceLabel: "Service",
      contactTitle: "Ready to discuss a project?",
      contactText: "Fill in the form and we'll get back to you shortly.",
      orWrite: "Or write to us directly:",
    },
    projects: {
      eyebrow: "Completed projects",
      title: "Projects that speak for themselves",
      subtitle:
        "From 2011 to 2026 we took part in building key process complexes at the region's largest oil refineries.",
      intro:
        "From 2011 to 2026 Montazhgrand LLC carried out contracts at Mozyr Oil Refinery OJSC and Naftan OJSC — from increasing the capacity of catalytic cracking units to building hydrocracking and delayed coking complexes. Every project is a joint effort with leading general contractors in the industry and strict compliance with the customer's process requirements.",
      siteLabel: "Site:",
      contractorLabel: "General contractor:",
    },
    career: {
      eyebrow: "Careers",
      title: "Build your career at Montazhgrand",
      subtitle:
        "We're looking for specialists ready to work on major petrochemical industry sites.",
      vacanciesTitle: "Open positions",
      educationLabel: "Education",
      experienceLabel: "Experience",
      skillsLabel: "Skills",
      offerLabel: "We offer",
      linkText: "View vacancy on gsz.gov.by →",
    },
    contacts: {
      eyebrow: "Contacts",
      title: "Get in touch",
      legalAddressLabel: "Legal address",
      mailAddressLabel: "Mailing address",
      phonesLabel: "Phones",
      emailLabel: "Email",
      formTitle: "Write to us",
      formText: "Fill in the form and we'll get back to you shortly.",
    },
    form: {
      firstName: "Your name (required)",
      lastName: "Your surname (required)",
      email: "Your e-mail (required)",
      subject: "Subject",
      message: "Message",
      attach: "Attach a file",
      attachHint: "Up to 5 MB",
      submit: "Send request",
      submitting: "Sending...",
      successTitle: "Request sent",
      successText: "Thank you! We'll get back to you shortly.",
      sendAnother: "Send another request",
      errorDefault: "Failed to send the request",
    },
  },
};

export const dictionaries: Record<Lang, Dictionary> = { ru, en };

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

const STORAGE_KEY = "mg-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionaries[lang].htmlLang;
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  const t = dictionaries[ctx.lang];
  return { lang: ctx.lang, setLang: ctx.setLang, t };
}
