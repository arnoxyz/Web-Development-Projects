export const createAboutPage = () => {
    const htmlContent = `
    <div id="content">
        <h1>Casual dining, unforgettable pizza.</h1>

        <section>
            <div>
                <h2>Our Story</h2>
                <p>Rustic Oven was founded with a love for wood-fired pizza and a passion for great service. Our cozy atmosphere and handcrafted pies make every visit special.</p>
            </div>

            <div>
                <h2>Why We Stand Out</h2>
                <p>We use fresh, locally-sourced ingredients to craft each pizza with care. From classic Margherita to creative seasonal specials, there’s something for every pizza lover.</p>
            </div>
        </section>
    </div>
    `;

    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = htmlContent;
}
