  // hero animasi
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-content').style.opacity = '1';
});



  // animasi fade-in galeri gamabr
const galleryItems = document.querySelectorAll('.fade-item');

const galleryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
          // Tambahkan delay berdasarkan urutan
      setTimeout(() => {
        entry.target.classList.add('show');
          }, index * 150); // delay 150ms per item
          galleryObserver.unobserve(entry.target); // hanya animasi sekali
        }
      });
}, {
  threshold: 0.2
});

galleryItems.forEach(item => galleryObserver.observe(item));



  // TAMPILAN MODAL
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".modal-close");
  const modalContent = document.querySelector(".modal-content");
  const galleryImages = document.querySelectorAll('.gallery img');

  // Fungsi untuk buka modal dengan animasi masuk
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = "flex";
      modalImage.src = img.dataset.full;
      modalDescription.textContent = img.dataset.description || "Tidak ada deskripsi.";

      // Reset dan mainkan animasi fade-in
      modalContent.style.animation = 'none';
      void modalContent.offsetWidth;
      modalContent.style.animation = 'fadeInScale 0.3s ease forwards';
    });
  });

  // Fungsi untuk tutup modal dengan animasi keluar
  function closeModal() {
    modalContent.style.animation = 'fadeOutScale 0.3s ease forwards';

    // Setelah animasi selesai (300ms), sembunyikan modal
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);

  // Klik luar modal → tutup
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });


// PRELOADER
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // Delay sedikit agar transisi terasa halus
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1600);
  });


// HAMBURGER
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('navbar-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a nav link
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });



// NEW MASONRY
  const tabButtons = document.querySelectorAll(".tab-btn");
  const grids = document.querySelectorAll(".masonry-grid");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle tombol
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Tampilkan grid yang sesuai
      grids.forEach(grid => grid.classList.remove("active"));
      document.querySelector(`.${btn.dataset.target}-grid`).classList.add("active");
    });
  });
