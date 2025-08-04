
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_galery: "Galery",
      nav_contact: "Contact",
      hero_title: "Welcome to my portfolio",
      hero_capt: "Illustrations that tell stories through the sky and feelings 🌌",
      hero_btn: "View Gallery",
      about_title: "About Me",
      about_text: "Hello, friends, I'm Noua🖐🏻. I am a passionate drawer in the field of visual illustration. On this page, I will share my personal work and some commission projects that I have done with my clients. So please take a look and thank you for visiting :D",
      galeri_title: "Gallery",
      cont_title: "Contact",
      cont_desc: "Want to collaborate or order illustrations? Contact me via:",
      cont_cont1: "Email: BGS@example.com",
      cont_cont2: "Instagram: @skyline.draws",
      cont_vgen: "Also available commission at:"



    },
    id: {
      nav_home: "Home",
      nav_about: "Tentang",
      nav_galery: "Galeri",
      nav_contact: "Kontak",
      hero_title: "Selamat datang di portofolioku",
      hero_capt: "Ilustrasi yang bercerita melalui langit dan perasaan 🌌",
      hero_btn: "Lihat Galeri",
      about_title: "Tentang Saya",
      about_text: "Halo, teman teman, saya Noua🖐🏻. Saya adalah orang yang penuh passion di bidang ilustrasi visual. Di halaman yang saya buat ini, saya akan membagikan karya pribadi saya dan beberapa projek komisi yang pernah saya buat bersama para klien saya. Jadi silahkan melihat lihat dan terima kasih sudah berkunjung :D",
      galeri_title: "Galeri",
      cont_title: "Kontak",
      cont_desc: "Ingin bekerja sama atau memesan ilustrasi? Hubungi saya melalui:",
      cont_cont1: "Email: BGS@example.com",
      cont_cont2: "Instagram: @skyline.draws",
      cont_vgen: "Juga tersedia komisi di:"
    }
  };

  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // Set default language to English
  document.addEventListener("DOMContentLoaded", () => {
    setLanguage("en");
  });
