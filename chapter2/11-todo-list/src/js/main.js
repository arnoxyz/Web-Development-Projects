import "../css/styles.css";
import { saveItems, loadItems } from "./storage.js";

function saveCurrentItems() {
    const items = [];
    document.querySelectorAll('#items .item').forEach(item => {
        const text = item.querySelector('p').textContent;
        const done = item.querySelector('button').disabled;
        items.push({ text, done });
    });
    saveItems(items);
}

function createItem(text, done=false) {
    const itemsContainer = document.querySelector('#items');
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const p = document.createElement('p');
    p.textContent = text;
    if (done) p.classList.add('completed');

    const doneBtn = document.createElement('button');
    doneBtn.textContent = done ? '✓' : 'Done';
    doneBtn.disabled = done;

    itemDiv.appendChild(p);
    itemDiv.appendChild(doneBtn);
    itemsContainer.appendChild(itemDiv);
}

function loadSavedItems() {
    const saved = loadItems();
    saved.forEach(data => {
        createItem(data.text, data.done);
    });
}

function createNewTODO() {
    const createBtn = document.querySelector('#create-item button');
    const inputField = document.querySelector('#create-item input');

    function addTodo() {
        const text = inputField.value.trim();
        if (!text) return;
        createItem(text);
        inputField.value = '';
        saveCurrentItems();
    }

    // Click on Create button
    createBtn.addEventListener('click', addTodo);

    // Press Enter in input field
    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
}

function init() {
    document.body.innerHTML = `
        <h1>TODOS</h1>
        <div id="create-item">
            <input type="text" />
            <button>Create</button>
        </div>
        <div id="items"></div>
    `;

    loadSavedItems();
    createNewTODO();

    // event delegation for all Done buttons
    document.getElementById('items').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const item = e.target.closest('.item');
            item.querySelector('p').classList.add('completed');
            e.target.disabled = true;
            e.target.textContent = '✓';
            saveCurrentItems();
        }
    });
}

function main() {
    init();
}

main();
