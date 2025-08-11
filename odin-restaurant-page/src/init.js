export const createItems = () => {
    const menuItems = [
      { name: "Pizza", desc: "Our famous pizza" },
      { name: "Toast", desc: "Our famous toast" },
      { name: "Smash Burger", desc: "Our famous smash burger" }
    ];

    const htmlContent = `
    <header>
      <button>Home</button>
      <button>About</button>
    </header>

    <div id="content">
      <h1>Our Menu</h1>
      <div id="menu">
        ${menuItems.map(item => `
          <div class="menu-item">
            <h2>${item.name}</h2>
            <div class="item-description">${item.desc}</div>
            <div class="item-picture"></div>
          </div>
        `).join('')}
      </div>
    </div>
    `;

    document.body.innerHTML = htmlContent;
}
