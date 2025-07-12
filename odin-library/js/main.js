class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  toString() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

//Add some books that I like
const books = [
  new Book("Atomic Habits", "James Clear", 2018),
  new Book("Ham on Rye", "Charles Bukowski", 1982),
  new Book("Im Westen nichts Neues", "Erich Maria Remarque", "1928"),
  new Book("Gut gegen Nordwind", "Daniel Glattauer", "2006"),
  new Book("Sechs Österreicher unter den ersten fünf", "Dirk Stermann", "2010")
];

function main(){

    console.log("Print all saved books");
    books.forEach(book => {
        console.log(book.toString());
    });
}

main();
