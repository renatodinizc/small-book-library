let myLibrary = [];

function Book(author, title, genre, numPages, read) {
  this.author = author;
  this.title = title;
  this.genre = genre;
  this.numPages = numPages;
  this.read = read;
}

let book1 = new Book('J.K. Roling', 'HP', 'fiction', 543, true);