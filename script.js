'use strict';
let myLibrary = [];

function Book(title, description, author, genre, numPages) {
  this.title = title;
  this.description = description;
  this.author = author;
  this.genre = genre;
  this.numPages = numPages;
}

const addBook = document.getElementById('add').addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
  let title = prompt('Whats the title of the book?');
  let description = prompt('Please give a description of the book');
  let author = prompt('Whats the author of the book?');
  let genre = prompt('Whats the genre?');
  let numPages = prompt('Whats the number os pages of the book?');

  let book = new Book(title, author, description, genre, numPages);
  myLibrary.push(book);

  const main = document.getElementById('main');
  const article = document.createElement('article');
  main.appendChild(article);

  const h4Title = document.createElement('h4');
  const h4TitleText = document.createTextNode(title);
  const pDescription = document.createElement('p');
  const pDescriptionText = document.createTextNode(description);
  const pAuthor = document.createElement('p');
  const pAuthorText = document.createTextNode(author);
  const pNumPages = document.createElement('p');
  const pNumPagesText = document.createTextNode(numPages)

  article.appendChild(h4Title);
  h4Title.appendChild(h4TitleText);
  article.appendChild(pDescription);
  pDescription.appendChild(pDescriptionText);
  article.appendChild(pAuthor);
  pAuthor.appendChild(pAuthorText);
  article.appendChild(pNumPages);
  pNumPages.appendChild(pNumPagesText);

  const readButton = document.createElement('button');
  readButton.addEventListener('click', toogleReadStatus);
  const readButtonText = document.createTextNode('Already read');
  readButton.classList.add('read');
  article.appendChild(readButton);
  readButton.appendChild(readButtonText);

  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', deleteBookFromLibrary);
  const deleteButtonText = document.createTextNode('Delete book');
  deleteButton.classList.add('delete');
  article.appendChild(deleteButton);
  deleteButton.appendChild(deleteButtonText);
}

function deleteBookFromLibrary() {
  if (confirm('Are you sure?')) {
    this.parentNode.remove();
  };
}

function toogleReadStatus() {
  if (this.classList.contains('completed')) {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

