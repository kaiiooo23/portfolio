// Personal Portfolio Script - Modern Black & White Theme & Project Modal

// Project Details Data Dictionary for Interactive Pop-up Modal
const projectsData = {
  maison: {
    title: "Maison Velouré Boutique",
    subtitle: "Modern Luxury E-Commerce Platform",
    image: "../assets/img/projek1.png",
    category: "Web Application",
    description: "Maison Velouré is a full-featured e-commerce fashion boutique platform designed to deliver an elevated, luxurious shopping experience. Built with performance and mobile responsiveness at its core, the platform allows users to browse catalog collections, filter products dynamically, manage interactive shopping cart items, and simulate seamless checkout workflows.",
    features: [
      "Dynamic catalog filtering and real-time live product search",
      "Interactive cart state management with persistent local storage",
      "Sleek product gallery view with zoom and responsive grid layout",
      "Custom responsive payment checkout UI workflow"
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    demoUrl: "https://ulzzang23.github.io/maisonveloure/",
    githubUrl: "https://github.com/ulzzang23/maisonveloure"
  },
  techcare: {
    title: "Tech Care Platform",
    subtitle: "Real-Time PC & Laptop Repair Service System",
    image: "../assets/img/projek4.png",
    category: "Web Application",
    description: "Tech Care is a comprehensive web service portal designed for computer hardware repair shops. It bridges the communication gap between certified repair technicians and customers through real-time repair tracking, live chat consultation via WebSockets, service scheduling, and transparent invoice estimates.",
    features: [
      "Real-time ticket tracking system with live status updates",
      "Interactive technician-customer chat powered by Socket.io",
      "Service scheduling calendar & hardware diagnostic estimator",
      "Vuex centralized state management for seamless user session flows"
    ],
    tech: ["Vue.js", "Vuex", "Socket.io", "Node.js", "Tailwind CSS"],
    demoUrl: "https://techcare-re80gdxk8-ulzzang23s-projects.vercel.app/",
    githubUrl: "#"
  },
  weather: {
    title: "Weather Dashboard",
    subtitle: "Interactive Climate Analytics & Forecast Hub",
    image: "../assets/img/projek3.png",
    category: "Web Application",
    description: "An intuitive real-time weather analytics application featuring accurate global forecasts, interactive temperature charts, detailed atmospheric metrics (humidity, wind speed, UV index, air quality), and location search with automated geolocation lookup.",
    features: [
      "7-day extended weather forecast with daily condition breakdowns",
      "Interactive meteorological data charts and temperature trends",
      "Automatic geolocation detection & worldwide city search",
      "Asynchronous REST API integration with real-time error handling"
    ],
    tech: ["JavaScript", "Vue.js", "REST API", "Chart.js", "Tailwind CSS"],
    demoUrl: "https://ulzzang23.github.io/weatherdashboard/",
    githubUrl: "https://github.com/ulzzang23/weatherdashboard"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Theme (Dark/Light) Management
  const html = document.documentElement;
  const darkModeToggle = document.getElementById("darkModeToggle");

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    html.classList.toggle("dark", savedTheme === "dark");
  } else {
    html.classList.toggle("dark", prefersDark);
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      const isDark = html.classList.toggle("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Smooth Scroll offset for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Project Modal Logic
  const modal = document.getElementById("projectModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContainer = document.getElementById("modalContainer");
  const closeModalBtn = document.getElementById("closeModalBtn");

  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalImage = document.getElementById("modalImage");
  const modalCategory = document.getElementById("modalCategory");
  const modalDescription = document.getElementById("modalDescription");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalTech = document.getElementById("modalTech");
  const modalDemoBtn = document.getElementById("modalDemoBtn");
  const modalGithubBtn = document.getElementById("modalGithubBtn");

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modal) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalImage) {
      modalImage.src = data.image;
      modalImage.alt = data.title;
    }
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalDescription) modalDescription.textContent = data.description;

    // Populate Features
    if (modalFeatures) {
      modalFeatures.innerHTML = data.features
        .map(
          (feat) =>
            `<li class="flex items-start text-sm text-gray-700 dark:text-gray-300"><i class="fas fa-check-circle text-black dark:text-white mr-2.5 mt-0.5 text-xs"></i><span>${feat}</span></li>`
        )
        .join("");
    }

    // Populate Tech Stack Pills
    if (modalTech) {
      modalTech.innerHTML = data.tech
        .map(
          (t) =>
            `<span class="px-3 py-1 text-xs font-semibold rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10">${t}</span>`
        )
        .join("");
    }

    // Links
    if (modalDemoBtn) {
      modalDemoBtn.href = data.demoUrl;
      modalDemoBtn.style.display = data.demoUrl && data.demoUrl !== "#" ? "inline-flex" : "none";
    }
    if (modalGithubBtn) {
      modalGithubBtn.href = data.githubUrl;
      modalGithubBtn.style.display = data.githubUrl && data.githubUrl !== "#" ? "inline-flex" : "none";
    }

    // Display modal with smooth animations
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      if (modalBackdrop) modalBackdrop.classList.remove("opacity-0");
      if (modalContainer) {
        modalContainer.classList.remove("opacity-0", "scale-95", "translate-y-4");
        modalContainer.classList.add("opacity-100", "scale-100", "translate-y-0");
      }
    });
  }

  function closeProjectModal() {
    if (!modal) return;

    if (modalBackdrop) modalBackdrop.classList.add("opacity-0");
    if (modalContainer) {
      modalContainer.classList.remove("opacity-100", "scale-100", "translate-y-0");
      modalContainer.classList.add("opacity-0", "scale-95", "translate-y-4");
    }

    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
  }

  // Attach click handlers to cards / detail buttons
  document.querySelectorAll("[data-project-id]").forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      // Prevent opening modal if user clicked directly on Live Demo or Source link buttons inside card
      if (e.target.closest("a") && !e.target.closest(".modal-trigger")) return;
      e.preventDefault();
      const projectId = this.getAttribute("data-project-id");
      openProjectModal(projectId);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeProjectModal);

  // Close on Escape key press
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeProjectModal();
    }
  });

  // Dynamic Typing Animation for Hero Subtitle
  const typingElement = document.getElementById("typingRole");
  if (typingElement) {
    const roles = [
      "Informatics Engineering Student",
      "Front End Developer",
      "UI/UX & Web Performance Enthusiast"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }

  // IntersectionObserver Scroll Reveal Animations
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("revealed"));
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
        backToTopBtn.classList.add("opacity-100", "pointer-events-auto", "translate-y-0");
      } else {
        backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
        backToTopBtn.classList.remove("opacity-100", "pointer-events-auto", "translate-y-0");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Dynamic current year in footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});