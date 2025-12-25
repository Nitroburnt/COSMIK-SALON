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