let id = 6;
let books = [];

//OOP
class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  toString() {
    return `(Id=${this.id}), ${this.title} by ${this.author}, published in ${this.year}`;
  }
}

function fetchBooks(){
    fetch('./books.json')
      .then(response => response.json())
      .then(data => {
        books = data.map(book => new Book(book.id, book.title, book.author, book.year));
        createUIAddNewBook();
        renderBooks();
      })
      .catch(err => console.error('Failed to load books.json', err));
}


function printBooks(books){
    console.log("Print all saved books: \n");
    books.forEach(book => {
        console.log(book.toString());
    });
}

function addBook(id, title, author, year){
    console.log(`Add Book: ${id}, ${title}, ${author}, ${year}`);
    books.push(new Book(id, title, author, year));
}

function removeBook(id){
    console.log(`Remove Book with Id: ${id}`);
    const idx = books.findIndex(book => book.id === id);
    if (idx !== -1) {
        books.splice(idx, 1);
    }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Rendering
function renderBook(book){
    const bookGrid= document.getElementById("book-grid");
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    bookDiv.innerHTML = `
    <h3 class="book-title">${book.title}</h3>
    <div class="book-img"></div>
    <p class="book-author"><strong>Author:</strong> ${book.author}</p>
    <p class="book-year"><strong>Year:</strong> ${book.year}</p>
    `;

    const bookImg = bookDiv.querySelector('.book-img');
    bookImg.style.backgroundColor = getRandomColor();

    bookGrid.appendChild(bookDiv);
}


function createUIAddNewBook(){
    const bookGrid= document.getElementById("book-grid");
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    bookDiv.innerHTML = `
      <div id="book-form-container">
        <h3 class="book-title">New Book</h3>
        <label>
          Title:
          <input type="text" id="book-input-title" placeholder="Enter title">
        </label>
        <label>
          Author:
          <input type="text" id="book-input-author" placeholder="Enter author">
        </label>
        <label>
          Year:
          <input type="number" max="2025" step="1" id="book-input-year" placeholder="Enter year">
        </label>
        <button id="book-save-button">Save Book</button>
      </div>
    `;


    bookGrid.appendChild(bookDiv);

    document.getElementById('book-save-button').addEventListener('click', newBook);
}


function newBook() {
    let title = document.getElementById('book-input-title').value;
    let author = document.getElementById('book-input-author').value;
    let year = document.getElementById('book-input-year').value;
    id = id+1;

    book = new Book(id, title, author, year);
    addBook(id, title, author, year);
    renderBook(book);
}



function renderBooks() {
    books.forEach(book => renderBook(book));
}


function main(){
    //fetch books from the local json file
    fetchBooks();
}

main();
