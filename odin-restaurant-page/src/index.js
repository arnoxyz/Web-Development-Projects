import "./css/styles.css";
import "./css/menu.css";

import { createHomePage} from "./js/createHomePage.js";
import { createMenuPage } from "./js/createMenuPage.js";
import { createAboutPage } from "./js/createAboutPage.js";

function createButtonEvents() {
    // Select all buttons inside header
    const headerButtons = document.querySelectorAll('header button');

    headerButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Button clicked: ${button.textContent}`);
            if (button.textContent === 'Home') {
                createHomePage();
                console.log('Go to Home page');
            } else if (button.textContent === 'Menu') {
                createMenuPage();
                console.log('Show Menu page');
            } else if (button.textContent === 'About') {
                createAboutPage();
                console.log('Show About page');
            }
        });
    });
}

function main(){
    createHomePage();
    createButtonEvents();
}

main();


