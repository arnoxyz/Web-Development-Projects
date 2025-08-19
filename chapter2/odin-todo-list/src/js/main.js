import "../css/styles.css";

//TODO:
//import { createNewTODO, deleteTODO, renderTODO } from "./todo.js";

function init(){
    const content = `
        <h1>TODOS</h1>
        <div id="create-item">
            <input type="text"></input>
            <button>Create</button>
        </div>

        <div id="items">
            <div class="item">
                <p>Learn some VHDL</p>
                <button>Done</button>
            </div>
            <div class="item">
                <p>Learn some JS</p>
                <button>Done</button>
            </div>
            <div class="item">
                <p>Learn some Python</p>
                <button>Done</button>
            </div>
        </div>
    `;

    document.body.innerHTML = content;
}

function addDoneButton() {
    document.addEventListener("DOMContentLoaded", () => {
        const buttons = document.querySelectorAll("#items .item button");

        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                const item = e.target.closest(".item");
                const text = item.querySelector("p");
                text.classList.toggle("completed");
                e.target.disabled = true;
                e.target.textContent = "✓";
            });
        });
    });
}


function main(){
    init();
    addDoneButton();


}

main();


