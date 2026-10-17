// Yossif Yaser portfolio contact details.
const PORTFOLIO_CONFIG = {
  email: "youssefyaser030@gmail.com",
  github: "https://github.com/Yossif-Yaser-11",
  whatsapp: "https://wa.link/u1i3h4"
};

const translations = {
  en: {
    navWork:"Work", navServices:"Services", navAbout:"About", navReviews:"Reviews", navContact:"Contact",
    heroEyebrow:"SOFTWARE DEVELOPER · CAIRO, EGYPT",
    heroTitle:'Hey, I’m<br><span class="underline-word">Yossif.</span>',
    heroLead:'I build <span class="marker">websites</span>, Python scripts, and practical software that helps people <span class="marker">work smarter.</span>',
    heroSub:"From business websites to custom tools, I turn clear requirements into useful digital products.",
    exploreWork:"Explore My Work", letsTalk:"Have a project? Let’s talk",
    available:"Open to projects & opportunities", based:"Based in Egypt · Remote-friendly",
    artCaption:"IDEAS → WORKING SOFTWARE",
    portraitWebTag:"WEB DEVELOPER", portraitPythonTag:"PYTHON SCRIPTING", portraitNote:"IDEAS → WORKING SOFTWARE",
    scroll:"SCROLL TO EXPLORE",
    workEyebrow:"SELECTED WORK", workTitle:'Ideas turned into<br><span class="underline-light">useful software.</span>',
    workIntro:"13 live projects across websites, e-commerce, and networking courses. Open any project to explore it.",
    servicesEyebrow:"HOW I CAN HELP", servicesTitle:'Good code. Clear purpose.<br><span class="underline-word">Useful results.</span>',
    service1Title:"Website Development", service1Desc:"Business websites, personal portfolios, landing pages, and responsive web interfaces.",
    service2Title:"Python Scripts & Tools", service2Desc:"Custom scripts for repetitive tasks, file handling, data cleanup, and simple reporting workflows.",
    service3Title:"Custom Web Systems", service3Desc:"Practical systems with forms, dashboards, role-based access, and database-backed records.",
    service4Title:"Fixes & Improvements", service4Desc:"Debugging, improving existing pages, adding small features, and making interfaces work better on mobile.",
    aboutEyebrow:"A LITTLE ABOUT ME", aboutTitle:'Curious mind.<br><span class="underline-light">Builder mindset.</span>',
    aboutText:"I’m Yossif Yaser, a developer interested in building useful websites and web applications. I enjoy breaking a problem into clear steps and turning it into something people can actually use.",
    aboutText2:"I keep learning by building projects, testing ideas, and improving the details that make software easier to use.",
    reviewsEyebrow:"A GOOD PROJECT STARTS WITH A GOOD CONVERSATION",
    reviewsTitle:'Clear communication.<br><span class="underline-word">Thoughtful results.</span>',
    reviewsIntro:"A few examples of the kind of feedback a project can earn through clear communication and careful work.",
    reviewOne:"Yossif understood what I needed and kept me updated throughout. The finished website is easy to navigate, especially on mobile, and feels like it fits my business.",
    reviewerOne:"Small business owner", reviewProjectOne:"Business website",
    reviewTwo:"I had a rough idea for my portfolio but wasn't sure how to organize it. Yossif helped make the content clearer and the final page feels much more polished.",
    reviewerTwo:"Independent creative", reviewProjectTwo:"Portfolio website",
    reviewThree:"The small Python tool took a repetitive task off my plate. We agreed on what it should do first, and Yossif explained how to use it without overcomplicating things.",
    reviewerThree:"Project collaborator", reviewProjectThree:"Python utility",
    toolbox:"MY TOOLBOX", contactEyebrow:"HAVE SOMETHING IN MIND?",
    contactTitle:'Let’s make your<br><span class="underline-word">next idea real.</span>',
    contactText:"Tell me what you’re trying to build, what’s not working, or what task you’d like to simplify. We can start with a clear conversation.",
    emailMe:"Email Me", contactDetails:"CONTACT DETAILS", emailLabel:"EMAIL",
    footerText:"Built with curiosity, coffee, and code.", backTop:"BACK TO TOP ↑"
  },
  ar: {
    navWork:"المشروعات", navServices:"الخدمات", navAbout:"عني", navReviews:"آراء العملاء", navContact:"تواصل",
    heroEyebrow:"مطور برمجيات · القاهرة، مصر",
    heroTitle:'أهلًا، أنا<br><span class="underline-word">يوسف.</span>',
    heroLead:'ببني <span class="marker">مواقع ويب</span> وسكربتات Python وحلول برمجية تساعدك <span class="marker">تنجز بذكاء.</span>',
    heroSub:"من مواقع الشركات لحد الأدوات البرمجية المخصصة، بحوّل متطلباتك لحلول رقمية عملية.",
    exploreWork:"شوف مشروعاتي", letsTalk:"عندك مشروع؟ خلينا نتكلم",
    available:"متاح لمشروعات وفرص جديدة", based:"مقيم في مصر · متاح للعمل عن بُعد",
    artCaption:"من الفكرة لبرنامج شغال",
    portraitWebTag:"مطور ويب", portraitPythonTag:"كتابة سكربتات بايثون", portraitNote:"من الفكرة لبرنامج شغال",
    scroll:"انزل لاستكشاف الموقع",
    workEyebrow:"مشروعات مختارة", workTitle:'أفكار تتحول إلى<br><span class="underline-light">برمجيات مفيدة.</span>',
    workIntro:"13 مشروعًا منشورًا تشمل مواقع ومتاجر إلكترونية ودورات في الشبكات. افتح أي مشروع لمعاينته.",
    servicesEyebrow:"إزاي أقدر أساعدك؟", servicesTitle:'كود مضبوط. هدف واضح.<br><span class="underline-word">نتيجة مفيدة.</span>',
    service1Title:"تطوير المواقع", service1Desc:"مواقع للشركات، بورتفوليو شخصي، صفحات هبوط، وواجهات متجاوبة مع الموبايل.",
    service2Title:"سكربتات وأدوات Python", service2Desc:"سكربتات للمهام المتكررة، وتنظيم الملفات، وتنظيف البيانات، وإعداد تقارير بسيطة.",
    service3Title:"أنظمة ويب مخصصة", service3Desc:"أنظمة عملية فيها نماذج إدخال ولوحات تحكم وصلاحيات مستخدمين وبيانات محفوظة في قاعدة بيانات.",
    service4Title:"إصلاح وتطوير مواقع موجودة", service4Desc:"اكتشاف الأخطاء، وتحسين الصفحات، وإضافة خصائص، وضبط الواجهة على الموبايل.",
    aboutEyebrow:"نبذة عني", aboutTitle:'بحب أتعلم.<br><span class="underline-light">وبحب أبني حلول.</span>',
    aboutText:"أنا يوسف ياسر، مطور مهتم ببناء مواقع وتطبيقات ويب مفيدة. بحب أقسم المشكلة لخطوات واضحة وأحوّلها لحل عملي يقدر الناس تستخدمه.",
    aboutText2:"بطوّر مهاراتي من خلال تنفيذ المشروعات وتجربة الأفكار وتحسين التفاصيل اللي بتخلي استخدام البرامج أسهل.",
    reviewsEyebrow:"المشروع الناجح بيبدأ بتواصل واضح",
    reviewsTitle:'تواصل واضح.<br><span class="underline-word">ونتيجة متقنة.</span>',
    reviewsIntro:"أمثلة على نوع الانطباعات اللي ممكن يسيبها شغل متقن وتواصل واضح طول فترة المشروع.",
    reviewOne:"يوسف فهم أنا محتاج إيه وكان بيطمني على كل خطوة. الموقع النهائي سهل في التصفح، خصوصًا من الموبايل، وحاسس إنه مناسب لطبيعة شغلي.",
    reviewerOne:"صاحب مشروع صغير", reviewProjectOne:"موقع لنشاط تجاري",
    reviewTwo:"كان عندي تصور مبدئي للبورتفوليو بس مش عارف أرتب المحتوى. يوسف ساعدني أوضّح الأفكار، والصفحة في شكلها النهائي بقت أرتب وأكتر احترافية.",
    reviewerTwo:"مبدع مستقل", reviewProjectTwo:"موقع أعمال شخصية",
    reviewThree:"أداة Python بسيطة وفرت عليّا تكرار مهمة كل يوم. اتفقنا الأول على المطلوب، ويوسف شرحلي استخدامها بطريقة سهلة ومن غير تعقيد.",
    reviewerThree:"متعاون في مشروع", reviewProjectThree:"أداة Python",
    toolbox:"التقنيات والأدوات", contactEyebrow:"عندك فكرة أو مشكلة محتاجة حل؟",
    contactTitle:'خلينا نحول<br><span class="underline-word">فكرتك لحقيقة.</span>',
    contactText:"احكيلي عن الموقع أو الأداة اللي محتاجها، أو مشكلة عايز تحلها، أو مهمة متكررة حابب تسهّلها. نبدأ بتفاصيل واضحة.",
    emailMe:"راسلني بالإيميل", contactDetails:"بيانات التواصل", emailLabel:"البريد الإلكتروني",
    footerText:"اتعمل بشغف للتعلم والبرمجة.", backTop:"الرجوع للأعلى ↑"
  }
};

let currentLanguage = "en";
const langToggle = document.getElementById("langToggle");

function applyLanguage(language) {
  currentLanguage = language;
  const isArabic = language === "ar";
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", isArabic);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  langToggle.textContent = isArabic ? "EN ↗" : "عربي ↗";
  document.title = isArabic ? "يوسف ياسر — مطور برمجيات" : "Yossif Yaser — Software Developer";
}
langToggle.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "ar" : "en"));

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

// Apply contact links only when the placeholders have been replaced.
function configureLink(id, url, label) {
  const el = document.getElementById(id);
  if (!el || !url) return;
  el.href = url;
  if (label) el.textContent = label + " ↗";
}
if (PORTFOLIO_CONFIG.email && !PORTFOLIO_CONFIG.email.includes("YOUR_")) {
  configureLink("emailButton", `mailto:${PORTFOLIO_CONFIG.email}`);
  configureLink("emailLink", `mailto:${PORTFOLIO_CONFIG.email}`, PORTFOLIO_CONFIG.email);
}
if (PORTFOLIO_CONFIG.github && !PORTFOLIO_CONFIG.github.includes("YOUR_")) {
  configureLink("githubLink", PORTFOLIO_CONFIG.github, PORTFOLIO_CONFIG.github.replace("https://", ""));
}
if (PORTFOLIO_CONFIG.whatsapp) {
  configureLink("whatsappLink", PORTFOLIO_CONFIG.whatsapp, "WhatsApp");
}
document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// Project category filters
const filterButtons = document.querySelectorAll(".filter-chip");
const projectCards = document.querySelectorAll(".project-item");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    projectCards.forEach(card => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("filtered-out", !show);
      if (show) card.classList.add("is-visible");
    });
  });
});
