// Save items array to localStorage
export function saveItems(items) {
    localStorage.setItem('todoItems', JSON.stringify(items));
}

// Load items array from localStorage
export function loadItems() {
    return JSON.parse(localStorage.getItem('todoItems')) || [];
}
