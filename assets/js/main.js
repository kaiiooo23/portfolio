/**
 * Arief Mochammad Akbar — Modern Portfolio & AI Assistant Engine
 * Pure modular JavaScript with zero heavy runtime overhead.
 */

// Comprehensive Project Case Study Knowledge Base
const projectModalData = {
    maison: {
        title: "Maison Velouré Boutique",
        subtitle: "Modern Luxury E-Commerce Platform",
        category: "Web Application",
        image: "assets/img/projek1.png",
        tech: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5"],
        overview: "Maison Velouré is a modern e-commerce fashion boutique platform engineered to deliver an elevated shopping experience. Engineered with mobile-first responsiveness, it features instant dynamic catalog filtering, reactive shopping cart persistence via localStorage, and a frictionless multi-step checkout workflow.",
        highlights: [
            "Constructed modular reactive components with clean separation of concerns.",
            "Implemented instant client-side catalog filtering and live search without UI latency.",
            "Integrated persistent local state management for shopping cart sessions.",
            "Optimized images and CSS layout to ensure minimal Cumulative Layout Shift (CLS)."
        ],
        demoUrl: "https://ulzzang23.github.io/maisonveloure/",
        githubUrl: "https://github.com/ulzzang23/maisonveloure"
    },
    techcare: {
        title: "Tech Care Repair Portal",
        subtitle: "Real-Time Hardware Service Tracking System",
        category: "Web Application",
        image: "assets/img/projek4.png",
        tech: ["Vue.js", "Vuex", "Socket.io", "Node.js", "Tailwind CSS"],
        overview: "Tech Care is a comprehensive web service portal engineered for computer hardware repair facilities. It bridges communication between certified technicians and customers through live WebSocket diagnostic updates, consultation chat, and transparent invoice estimators.",
        highlights: [
            "Engineered bidirectional real-time communication pipeline utilizing Socket.io.",
            "Architected centralized state management with Vuex to handle multi-step repair workflows.",
            "Built interactive service scheduling calendar and hardware diagnostic estimators.",
            "Developed responsive technician administrative dashboards with status badge tracking."
        ],
        demoUrl: "https://techcare-re80gdxk8-ulzzang23s-projects.vercel.app/",
        githubUrl: "https://github.com/kaiiooo23"
    },
    weather: {
        title: "Weather & Atmospheric Hub",
        subtitle: "Interactive Real-Time Meteorological Dashboard",
        category: "Web Application",
        image: "assets/img/projek3.png",
        tech: ["Vue.js", "Chart.js", "OpenWeather REST API", "Tailwind CSS"],
        overview: "An intuitive real-time weather analytics application featuring global meteorological forecasting, interactive temperature trend charts via Chart.js, atmospheric humidity & wind metrics, and automatic browser geolocation lookup.",
        highlights: [
            "Asynchronous REST API consumption with graceful error boundaries and loading states.",
            "Dynamic canvas rendering using Chart.js to visualize 7-day temperature trends.",
            "HTML5 Geolocation API integration with automatic coordinates fallback.",
            "Fluid responsive grid layout adapting cleanly across desktop and mobile displays."
        ],
        demoUrl: "https://ulzzang23.github.io/weatherdashboard/",
        githubUrl: "https://github.com/ulzzang23/weatherdashboard"
    },
    realestate: {
        title: "Real Estate Housing Price Regression",
        subtitle: "Supervised Machine Learning Valuation Pipeline",
        category: "Machine Learning & AI",
        image: null,
        tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter"],
        overview: "A supervised machine learning regression pipeline built to predict residential real estate market values based on historical property features, spatial variables, structural square footage, and local economic indicators.",
        highlights: [
            "Conducted comprehensive Exploratory Data Analysis (EDA) and feature correlation matrix.",
            "Engineered feature scaling and categorical variable encoding pipelines.",
            "Trained and cross-validated Linear, Ridge, and Random Forest regression models.",
            "Evaluated predictive performance using Root Mean Squared Error (RMSE) and R-squared metrics."
        ],
        demoUrl: null,
        githubUrl: "https://github.com/kaiiooo23"
    }
};

// Local Knowledge Base for Offline / Immediate Assistant Responses
const ariefKnowledgeBase = {
    name: "Arief Mochammad Akbar",
    title: "Front-End Developer & AI Engineering Practitioner",
    education: {
        university: "Universitas Pamulang (UNPAM) — Bachelor of Computer Science / Informatics Engineering (S1, 2026—Present)",
        vocational: "SMK Bina Putera Nusantara Tasikmalaya — Sistem Informasi, Jaringan, dan Aplikasi (SIJA, 4-Year Technical Program, 2022—2026)"
    },
    certifications: [
        "Dicoding Academy: Front-End Web Development (Google Authorized Partner)",
        "DevCoach AI: AI Agent Developer Specialization"
    ],
    skills: {
        frontend: ["React.js", "Vue.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Vite", "Webpack"],
        ai: ["Python", "Pandas", "Scikit-Learn", "LangChain", "Gemini API", "Prompt Engineering"],
        backend: ["PHP", "Laravel", "MySQL", "Node.js", "Socket.io", "Git / GitHub Workflows", "Linux & Networking"]
    },
    contact: {
        email: "ariefakbar2006@gmail.com",
        github: "https://github.com/kaiiooo23",
        linkedin: "https://www.linkedin.com/in/arief-akbar/"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // 1. Theme (Dark / Light) Management
    initTheme();

    // 2. Mobile Navigation Toggle
    initMobileMenu();

    // 3. Project Filter Buttons
    initProjectFilters();

    // 4. Keyboard Shortcuts (⌘K / Ctrl+K and Escape)
    initKeyboardShortcuts();

    // 5. Dynamic Footer Year
    const footerYear = document.getElementById("footerYear");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});

// ==========================================
// THEME MANAGEMENT (Dark / Light Mode)
// ==========================================
function initTheme() {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "light") {
        html.classList.remove("dark");
        if (themeIcon) themeIcon.className = "fa-solid fa-sun text-xs text-amber-500";
    } else if (savedTheme === "dark" || systemPrefersDark) {
        html.classList.add("dark");
        if (themeIcon) themeIcon.className = "fa-solid fa-moon text-xs";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = html.classList.toggle("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");

            if (themeIcon) {
                themeIcon.className = isDark ? "fa-solid fa-moon text-xs" : "fa-solid fa-sun text-xs text-amber-500";
            }
        });
    }
}

// ==========================================
// MOBILE MENU NAVIGATION
// ==========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        mobileNavLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }
}

// ==========================================
// PROJECT FILTER BUTTONS
// ==========================================
function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".project-filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => {
                b.classList.remove("bg-white", "dark:bg-zinc-800", "text-zinc-900", "dark:text-zinc-100", "font-semibold", "shadow-sm");
                b.classList.add("text-zinc-600", "dark:text-zinc-400");
            });

            btn.classList.add("bg-white", "dark:bg-zinc-800", "text-zinc-900", "dark:text-zinc-100", "font-semibold", "shadow-sm");
            btn.classList.remove("text-zinc-600", "dark:text-zinc-400");

            const filter = btn.getAttribute("data-filter");
            projectItems.forEach((item) => {
                const category = item.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
}

// ==========================================
// KEYBOARD SHORTCUTS (⌘K / Ctrl+K and Escape)
// ==========================================
function initKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
        // Toggle AI drawer with Cmd+K or Ctrl+K
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            toggleAiDrawer();
        }

        // Close open modals / drawer on Escape
        if (e.key === "Escape") {
            closeProjectModal();
            closeSettingsModal();
            const drawer = document.getElementById("aiDrawer");
            if (drawer && !drawer.classList.contains("translate-x-full")) {
                toggleAiDrawer();
            }
        }
    });
}

// ==========================================
// AI ASSISTANT DRAWER CONTROLS
// ==========================================
function toggleAiDrawer() {
    const drawer = document.getElementById("aiDrawer");
    const overlay = document.getElementById("aiDrawerOverlay");
    if (!drawer || !overlay) return;

    const isClosed = drawer.classList.contains("translate-x-full");
    if (isClosed) {
        drawer.classList.remove("translate-x-full");
        overlay.classList.remove("hidden");
        setTimeout(() => {
            const input = document.getElementById("chatInput");
            if (input) input.focus();
        }, 300);
    } else {
        drawer.classList.add("translate-x-full");
        overlay.classList.add("hidden");
    }
}

function sendQuickPrompt(promptText) {
    const input = document.getElementById("chatInput");
    if (input) {
        input.value = promptText;
        handleChatSubmit(new Event("submit"));
    }
}

async function handleChatSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const input = document.getElementById("chatInput");
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    appendChatMessage("user", message);
    input.value = "";

    const botMsgId = appendChatMessage("bot", "Processing query...");
    const botElement = document.getElementById(botMsgId);

    const apiKey = localStorage.getItem("gemini_api_key");

    if (apiKey) {
        try {
            const response = await callGeminiAPI(message, apiKey);
            if (botElement) botElement.innerText = response;
        } catch (err) {
            if (botElement) botElement.innerText = getLocalAiFallback(message);
        }
    } else {
        setTimeout(() => {
            if (botElement) botElement.innerText = getLocalAiFallback(message);
        }, 300);
    }
}

function appendChatMessage(sender, text) {
    const container = document.getElementById("chatMessages");
    if (!container) return "";

    const msgId = "msg-" + Date.now();

    if (sender === "user") {
        container.innerHTML += `
            <div class="flex gap-3 justify-end">
                <div class="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 rounded-lg p-3 leading-relaxed max-w-[85%] font-mono text-[11px] shadow-sm">
                    ${escapeHtml(text)}
                </div>
            </div>
        `;
    } else {
        container.innerHTML += `
            <div class="flex gap-3">
                <div class="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 font-mono text-[10px] font-bold">AI</div>
                <div id="${msgId}" class="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 text-zinc-700 dark:text-zinc-300 leading-relaxed font-mono text-[11px] max-w-[85%]">
                    ${escapeHtml(text)}
                </div>
            </div>
        `;
    }

    container.scrollTop = container.scrollHeight;
    return msgId;
}

// Fast Local Engine for Instant Query Matching
function getLocalAiFallback(query) {
    const q = query.toLowerCase();

    if (q.includes("summarize") || q.includes("who") || q.includes("profile") || q.includes("about") || q.includes("latar")) {
        return "Arief Mochammad Akbar is a Front-End Developer and AI Engineering Practitioner. He completed a 4-year vocational program in SIJA at SMK Bina Putera Nusantara Tasikmalaya and is currently an undergraduate student in Informatics Engineering at Universitas Pamulang. He specializes in React, Vue, Tailwind CSS, and AI tool integration.";
    }

    if (q.includes("stack") || q.includes("skill") || q.includes("tech") || q.includes("bahasa") || q.includes("keahlian")) {
        return "Arief's core technical arsenal includes:\n• Front-End: React.js, Vue.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5/CSS3\n• AI & ML: Python, Scikit-Learn, Pandas, LangChain, Gemini API\n• Backend & Tools: PHP/Laravel, Node.js, Socket.io, MySQL, Git, Linux CLI.";
    }

    if (q.includes("project") || q.includes("projek") || q.includes("karya") || q.includes("portfolio")) {
        return "Key projects built by Arief:\n1. Maison Velouré — Luxury React & Tailwind e-commerce boutique.\n2. Tech Care Platform — Real-time PC repair portal with Vue & Socket.io.\n3. Weather Dashboard — Atmospheric analytics with Vue & Chart.js.\n4. Real Estate Regression — Housing valuation ML pipeline in Python.";
    }

    if (q.includes("education") || q.includes("pendidikan") || q.includes("kuliah") || q.includes("sekolah") || q.includes("unpam")) {
        return "Education Details:\n• Universitas Pamulang (UNPAM): S1 Teknik Informatika (2026—Present)\n• SMK Bina Putera Nusantara Tasikmalaya: SIJA (Sistem Informasi, Jaringan, dan Aplikasi — 4-year vocational curriculum, 2022—2026).";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("hubungi") || q.includes("hire") || q.includes("kerja")) {
        return "You can reach Arief directly:\n• Email: ariefakbar2006@gmail.com\n• GitHub: github.com/kaiiooo23\n• LinkedIn: linkedin.com/in/arief-akbar/\nOr submit a message via the contact form on this site!";
    }
    if (q.includes("thankyou") || q.includes("thanks") || q.includes("thank") || q.includes("terima kasih") || q.includes("dan terima kasih") || q.includes("makasih")) {
        return "You are welcome to reach out!\n";
    }

    return "Arief Mochammad Akbar is an Informatics Engineering student at Universitas Pamulang with a 4-year vocational SIJA background. He builds responsive front-end applications with React, Vue, and Tailwind, and explores autonomous AI integrations.";
}

// Live Gemini API Direct Invocation
async function callGeminiAPI(userQuery, apiKey) {
    const systemPrompt = "You are Arief Mochammad Akbar's personal portfolio AI assistant. Answer concisely, professionally, and accurately about Arief's education at Pamulang University, SIJA vocational degree, React/Vue/Tailwind/Python skills, and projects.";
    const cleanKey = apiKey.trim();

    // Standard Gemini API endpoint
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${cleanKey}`;

    const payload = {
        contents: [
            {
                role: "user",
                parts: [{ text: userQuery }]
            }
        ],
        systemInstruction: {
            parts: [{ text: systemPrompt }]
        }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.error) {
            console.error("Gemini API Error:", data.error);
            return `Google API Error: ${data.error.message || "Invalid API response"}`;
        }

        const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidateText) {
            return candidateText;
        }

        return "Gemini did not return any text. Please try asking again.";
    } catch (err) {
        console.error("Fetch Error:", err);
        throw err;
    }
}

// ==========================================
// SETTINGS MODAL (GEMINI API KEY)
// ==========================================
function openSettingsModal() {
    const modal = document.getElementById("settingsModal");
    const input = document.getElementById("geminiApiKeyInput");
    if (modal) modal.classList.remove("hidden");
    if (input) input.value = localStorage.getItem("gemini_api_key") || "";
}

function closeSettingsModal() {
    const modal = document.getElementById("settingsModal");
    if (modal) modal.classList.add("hidden");
}

function saveApiKey() {
    const input = document.getElementById("geminiApiKeyInput");
    const key = input ? input.value.trim() : "";
    if (key) {
        localStorage.setItem("gemini_api_key", key);
        showToast("Gemini API key saved successfully.");
    } else {
        localStorage.removeItem("gemini_api_key");
        showToast("API Key cleared. Using fast local engine.");
    }
    closeSettingsModal();
}

// ==========================================
// PROJECT DETAILS MODAL
// ==========================================
function openProjectModal(key) {
    const data = projectModalData[key];
    const modal = document.getElementById("projectModal");
    const content = document.getElementById("projectModalContent");
    if (!data || !modal || !content) return;

    let imageHtml = "";
    if (data.image) {
        imageHtml = `
            <div class="rounded-xl overflow-hidden aspect-video border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 mb-6 shadow-md">
                <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
            </div>
        `;
    }

    let actionButtons = "";
    if (data.demoUrl) {
        actionButtons += `
            <a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-mono text-xs font-bold hover:opacity-90 transition flex items-center gap-2 shadow-sm">
                <span>Launch Live Demo</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
        `;
    }
    if (data.githubUrl) {
        actionButtons += `
            <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-xs font-semibold transition flex items-center gap-2">
                <i class="fa-brands fa-github text-sm"></i>
                <span>Repository</span>
            </a>
        `;
    }

    const techPills = data.tech
        .map((t) => `<span class="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs">${t}</span>`)
        .join("");

    const highlightsList = data.highlights
        .map((h) => `<li class="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed"><i class="fa-solid fa-check text-emerald-500 mt-0.5 text-[11px] flex-shrink-0"></i><span>${h}</span></li>`)
        .join("");

    content.innerHTML = `
        ${imageHtml}
        <div class="space-y-4">
            <div>
                <span class="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">${data.category}</span>
                <h3 class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">${data.title}</h3>
                <p class="text-xs sm:text-sm text-zinc-500 font-mono mt-0.5">${data.subtitle}</p>
            </div>

            <div class="space-y-2 pt-2">
                <h4 class="font-mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">Overview</h4>
                <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">${data.overview}</p>
            </div>

            <div class="space-y-2 pt-2">
                <h4 class="font-mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">Engineering Highlights</h4>
                <ul class="space-y-2">
                    ${highlightsList}
                </ul>
            </div>

            <div class="space-y-2 pt-2">
                <h4 class="font-mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">Technology Stack</h4>
                <div class="flex flex-wrap gap-1.5">
                    ${techPills}
                </div>
            </div>

            <div class="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                    ${actionButtons}
                </div>
                <button onclick="closeProjectModal()" class="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md font-mono text-xs transition">
                    Close
                </button>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    }
}

// ==========================================
// CONTACT FORM SUBMISSION (FormSubmit AJAX)
// ==========================================
function handleContactSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById("senderName");
    const emailInput = document.getElementById("senderEmail");
    const messageInput = document.getElementById("senderMessage");
    const submitBtn = document.getElementById("contactSubmitBtn");

    if (!nameInput || !emailInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
        showToast("Please fill in all fields.", false);
        return;
    }

    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-xs"></i> <span>Sending message...</span>';
    }

    fetch("https://formsubmit.co/ajax/ariefakbar2006@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: `New Portfolio Message from ${name}`
        })
    })
        .then((res) => res.json())
        .then(() => {
            showToast("Message sent successfully! Arief will reply soon.");
            document.getElementById("contactForm").reset();
        })
        .catch(() => {
            showToast("Failed to send form. Please email directly to ariefakbar2006@gmail.com", false);
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }
        });
}

// ==========================================
// TOAST NOTIFICATION POPUP
// ==========================================
function showToast(msg, isSuccess = true) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");
    const toastIcon = document.getElementById("toastIcon");

    if (!toast || !toastMsg) return;

    toastMsg.innerText = msg;
    if (toastIcon) {
        toastIcon.className = isSuccess ? "fa-solid fa-circle-check text-emerald-500" : "fa-solid fa-triangle-exclamation text-amber-500";
    }

    toast.classList.remove("-translate-y-10", "opacity-0", "pointer-events-none");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
        toast.classList.remove("translate-y-0", "opacity-100");
        toast.classList.add("-translate-y-10", "opacity-0", "pointer-events-none");
    }, 3800);
}

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function (m) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m];
    });
}
