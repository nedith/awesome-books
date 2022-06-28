const bookAdd = document.querySelector('.book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btn = document.querySelector('.submit');

if (!localStorage.getItem('bookInfo')) {
  localStorage.setItem('bookInfo', JSON.stringify([]));
}
let collection;

function saveBooks(book) {
  localStorage.setItem('bookInfo', JSON.stringify(book));
}

/* eslint-disable no-use-before-define */

function displayBookData() {
  collection = JSON.parse(localStorage.getItem('bookInfo'));
  updateUI();
}
displayBookData();

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (title.value && author.value) {
    const obj = { title: title.value, author: author.value };
    collection.push(obj);
    saveBooks(collection);
    displayBookData();
    title.value = '';
    author.value = '';
  }
});

// Add book
function updateUI() {
  bookAdd.innerHTML = '';
  collection.forEach((info, index) => {
    const newBook = document.createElement('div');
    newBook.classList.add('new-book');
    const para = document.createElement('p');
    para.textContent = `${info.title} By ${info.author}`;
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.addEventListener('click', removeBook.bind(index));
    newBook.appendChild(para);
    newBook.appendChild(button);
    bookAdd.appendChild(newBook);
  });
}

// Remove book
function removeBook() {
  collection.splice(this, 1);
  saveBooks(collection);
  displayBookData();
}
