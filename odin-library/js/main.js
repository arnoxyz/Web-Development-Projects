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

//Add some books that I like
/*
const books = [
  new Book(1, "Atomic Habits", "James Clear", 2018),
  new Book(2, "Ham on Rye", "Charles Bukowski", 1982),
  new Book(3, "Im Westen nichts Neues", "Erich Maria Remarque", "1928"),
  new Book(4, "Gut gegen Nordwind", "Daniel Glattauer", "2006"),
  new Book(5, "Sechs Österreicher unter den ersten fünf", "Dirk Stermann", "2010")
];
*/
let books = [];
function fetchBooks(){
    fetch('./books.json')
      .then(response => response.json())
      .then(data => {
        books = data.map(book => new Book(book.id, book.title, book.author, book.year));
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

    bookGrid.appendChild(bookDiv);
}

function renderBooks() {
    books.forEach(book => renderBook(book));
}


function main(){
    //fetch books from the local json file
    fetchBooks();
}

main();
