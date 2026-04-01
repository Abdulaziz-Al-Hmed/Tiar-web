const i18n = {
    ar: {
        page_title: "تيار للطاقة | Tiar Energy",
        brand_tiar: "تيار",
        brand_energy: "للطاقة",
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_contact: "اتصل بنا",
        hero_title_1: "نبتكر مستقبل الطاقة",
        hero_title_2: "المستدامة",
        hero_subtitle: "نقدم أحدث الحلول والتقنيات في مجال الطاقة لضمان أداء مستقبلي فعال ومستدام.",
        btn_services: "اكتشف خدماتنا",
        btn_contact: "تواصل معنا",
        about_title: "من نحن",
        about_desc_1: "شركة تيار للطاقة هي شركة متخصصة في مقاولات ومشاريع الطاقة الثقيلة وشبكات الضغط العالي. نربط المدن والمرافق بأضخم البنى التحتية الكهربائية بأعلى معايير الأمان.",
        about_desc_2: "نفخر بتنفيذ أضخم شبكات النقل والتوزيع الكهربائي، ونقدم حلولاً هندسية متكاملة لضمان استقرار الشبكة والاعتمادية لكل مشروع نقوم بتنفيذه.",
        services_title: "خدماتنا الأساسية",
        services_subtitle: "حلول متكاملة للطاقة الثقيلة تتناسب مع أضخم المشاريع",
        srv_1_title: "الطاقة ذات الضغط العالي",
        srv_1_desc: "تصميم وتنفيذ وصيانة أبراج وخطوط نقل الطاقة الكهربائية ذات الضغط العالي بكفاءة واعتمادية تامة.",
        srv_2_title: "الطاقة المتجددة",
        srv_2_desc: "حلول دمج محطات الطاقة المتجددة الضخمة وتوريدها للشبكة الرئيسية.",
        srv_3_title: "البنية التحتية والمحطات الفرعية",
        srv_3_desc: "بناء وتجهيز محطات التحويل الفرعية وتوفير أضخم المحولات والمعدات الصناعية للشبكات الذكية.",
        srv_4_title: "صيانة وتأهيل المحطات",
        srv_4_desc: "خدمات الفحص والصيانة الشاملة للمحولات ومعدات الطاقة الثقيلة بأعلى معايير السلامة.",
        srv_5_title: "أنظمة الحماية والتحكم",
        srv_5_desc: "أنظمة متطورة لحماية الشبكات الكهربائية ومراقبتها لضمان استمرارية الإمداد.",
        srv_6_title: "تمديد الكابلات الأرضية",
        srv_6_desc: "مشاريع مقاولات كبرى لتمديد كابلات الضغط العالي الأرضية عبر مسافات طويلة.",
        contact_loc_title: "موقع الشركة",
        contact_loc_value: "الرياض، المملكة العربية السعودية",
        contact_phone_title: "رقم الجوال",
        contact_email_title: "البريد الإلكتروني",
        footer_desc: "نبتكر مستقبل طاقة يربط المجتمعات ويدعم التطور الصناعي.",
        footer_rights: "تيار للطاقة. جميع الحقوق محفوظة."
    },
    en: {
        page_title: "Tiar Energy | Heavy Power Solutions",
        brand_tiar: "Tiar",
        brand_energy: "Energy",
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_title_1: "Innovating the Future of",
        hero_title_2: "Sustainable Energy",
        hero_subtitle: "We provide the latest solutions and technologies in the energy sector to ensure a bright, efficient, and sustainable future.",
        btn_services: "Discover Services",
        btn_contact: "Contact Us",
        about_title: "About Us",
        about_desc_1: "Tiar Energy specializes in contracting and executing heavy energy projects and high-voltage grids. We connect cities and facilities with the largest electrical infrastructures under the highest safety standards.",
        about_desc_2: "We are proud to execute massive electrical transmission and distribution networks, providing comprehensive engineering solutions to ensure grid stability and reliability for every project.",
        services_title: "Core Services",
        services_subtitle: "Comprehensive heavy energy solutions tailored to massive projects",
        srv_1_title: "High Voltage Energy",
        srv_1_desc: "Design, execution, and maintenance of ultra-efficient high-voltage power transmission towers and lines.",
        srv_2_title: "Renewable Energy",
        srv_2_desc: "Integration solutions for massive renewable energy plants supplying the main grid.",
        srv_3_title: "Infrastructure & Substations",
        srv_3_desc: "Construction and equipping of substations, providing massive transformers and industrial equipment.",
        srv_4_title: "Substation Maintenance",
        srv_4_desc: "Comprehensive inspection and maintenance services for transformers and heavy equipment.",
        srv_5_title: "Protection & Control",
        srv_5_desc: "Advanced relay systems to protect and monitor electrical grids ensuring supply continuity.",
        srv_6_title: "Underground Cabling",
        srv_6_desc: "Major contracting projects for installing underground high-voltage cables across long distances.",
        contact_loc_title: "Company Location",
        contact_loc_value: "Riyadh, Saudi Arabia",
        contact_phone_title: "Phone Number",
        contact_email_title: "Email Address",
        footer_desc: "Innovating an energy future that connects communities and supports industrial growth.",
        footer_rights: "Tiar Energy. All rights reserved."
    }
};

let currentLang = 'ar';

// 1. نحفظ كود أيقونة الترجمة في متغير لسهولة استخدامه
const translateIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor" style="vertical-align: middle; margin-right: 4px; margin-left: 4px;">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
</svg>`;

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // Update HTML dir and lang attributes
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.textContent = i18n[currentLang][key]; 
        }
    });



    // 3. استخدام innerHTML لدمج الأيقونة مع النص
    document.getElementById('langToggleMobile').innerHTML = `${translateIconSVG}`;
    document.getElementById('langToggleDesktop').innerHTML = `${translateIconSVG}`;
}

document.getElementById('langToggleMobile').addEventListener('click', toggleLanguage);
document.getElementById('langToggleDesktop').addEventListener('click', toggleLanguage);

// Nav Toggle for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll  
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simple Reveal Animation on Scroll
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Set auto year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
