import "../css/styles.css";

function addDoneButton() {
    const buttons = document.querySelectorAll("#items .item button");

    buttons.forEach(button => {
        // avoid attaching multiple times
        if (!button.dataset.listener) {
            button.addEventListener("click", (e) => {
                const item = e.target.closest(".item");
                const text = item.querySelector("p");
                text.classList.add("completed");
                e.target.disabled = true;
                e.target.textContent = "✓";
            });
            button.dataset.listener = "true"; // mark as listener added
        }
    });
}

function createNewTODO(){
    const createBtn = document.querySelector('#create-item button');
    const inputField = document.querySelector('#create-item input');
    const itemsContainer = document.querySelector('#items');

    createBtn.addEventListener('click', () => {
        const text = inputField.value.trim();
        if (text === '') return;

        // create new item div
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        // create paragraph
        const p = document.createElement('p');
        p.textContent = text;

        // create Done button
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';

        // append elements
        itemDiv.appendChild(p);
        itemDiv.appendChild(doneBtn);
        itemsContainer.appendChild(itemDiv);

        // clear input
        inputField.value = '';

        // attach done functionality to new buttons
        addDoneButton();
    });
}

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

    //add events to the buttons
    addDoneButton();
    createNewTODO();
}

function main(){
    init();
}

main();


