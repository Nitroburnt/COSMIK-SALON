function toggleDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('overlay');
    
    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    } else {
        drawer.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
}

// Function to generate menu HTML from JSON data
function loadMenu(genderType) {
    const container = document.getElementById('dynamic-menu');
    if (!container) return; // Exit if not on a menu page

    // 1. Filter data for the specific gender
    const filteredData = menuData.filter(item => item.gender === genderType);

    // 2. Group data by Category
    const groupedData = {};
    filteredData.forEach(item => {
        if (!groupedData[item.category]) {
            groupedData[item.category] = [];
        }
        groupedData[item.category].push(item);
    });

    // 3. Generate HTML
    let htmlContent = '';

    for (const [category, items] of Object.entries(groupedData)) {
        htmlContent += `
            <div class="menu-section">
                <h3 class="category-title">${category}</h3>
                <div class="menu-header-row">
                    <div class="col-name">Service</div>
                    <div class="col-price">Reg</div>
                    <div class="col-price vip-header">VIP</div>
                </div>
        `;

        items.forEach(item => {
            htmlContent += `
                <div class="menu-row">
                    <div class="col-name">${item.service}</div>
                    <div class="col-price">₹${item.reg}</div>
                    <div class="col-price col-vip">₹${item.vip}</div>
                </div>
            `;
        });

        htmlContent += `</div>`; // Close menu-section
    }

    // 4. Inject into page
    container.innerHTML = htmlContent;
}

// --- SCROLL REVEAL OBSERVER ---
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Stop observing once revealed to only animate once
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});

// --- SCROLLSPY ---
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const drawerLinks = document.querySelectorAll(".drawer-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // Adjusted offset by 150px to trigger earlier since there's a fixed navbar
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });

        drawerLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

// --- VIDEO PARALLAX EFFECT ---
document.addEventListener("DOMContentLoaded", () => {
    const videoWrapper = document.querySelector('.video-bg-wrapper');
    if (!videoWrapper) return;

    window.addEventListener('scroll', () => {
        // Calculate the maximum scrollable distance
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        if (maxScroll > 0) {
            // Get scroll progress from 0 to 1 (clamped to prevent overscroll issues on Mac)
            let scrollProgress = window.scrollY / maxScroll;
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));
            
            // Map progress to a translateY value between +5% and -5%.
            // Combined with scale(1.15), this guarantees we never see the video edges!
            // It moves slightly upward as you scroll down, creating the parallax depth.
            const yPos = 5 - (scrollProgress * 10);
            
            // Apply a slight scale to hide the edges while it translates
            videoWrapper.style.transform = `scale(1.15) translateY(${yPos}%)`;
        }
    });
});