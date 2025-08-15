import testImage from "./test.png";

export const createHomePage = () => {
    const menuItems = [
        {
            name: "Margherita Pizza",
            desc: "Classic pizza topped with fresh mozzarella, tomatoes, and basil."
        },
        {
            name: "Avocado Toast",
            desc: "Sourdough toast with smashed avocado, cherry tomatoes, and a hint of lime."
        },
        {
            name: "Smash Burger",
            desc: "Juicy beef patty with cheddar, caramelized onions, and our secret sauce."
        },
        {
            name: "Caesar Salad",
            desc: "Crisp romaine lettuce, parmesan shavings, croutons, and Caesar dressing."
        },
        {
            name: "Chocolate Lava Cake",
            desc: "Rich chocolate cake with a warm molten center and a scoop of vanilla."
        }
    ];



    const htmlContent = `
    <div id="content">
      <h1>Our Menu</h1>
      <div id="menu">
        ${menuItems.map(item => `
          <div class="menu-item">
            <h2>${item.name}</h2>
            <div class="item-description">${item.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
    `;


    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = htmlContent;
}
