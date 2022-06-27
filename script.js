const bookAdd = document.querySelector('.book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btn = document.querySelector('.submit');

const collection = [];

/* eslint-disable no-use-before-define */

// Add book
const updateUI = () => {
  bookAdd.innerHTML = '';
  collection.forEach((info, index) => {
    const newBook = document.createElement('div');
    newBook.classList.add('new-book');
    const para = document.createElement('p');
    para.textContent = `${info.title} By ${info.author}`;
    const button = document.createElement('button');
    button.textContent = 'Remove';
    newBook.appendChild(para);
    newBook.appendChild(button);
    bookAdd.appendChild(newBook);
    button.addEventListener('click', removeBook.bind(index));
  });
};

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (title.value && author.value) {
    const obj = { title: title.value, author: author.value };
    collection.push(obj);
    updateUI(collection);
    title.value = '';
    author.value = '';
  }
});

// Remove book
const removeBook = function () {
  collection.splice(this, 1);
  updateUI(collection);
};

// Local storage
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

function handleChange() {
  const formData = {
    titleData: titleInput.value,
    authorData: authorInput.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    titleInput.value = formObject.titleData;
    authorInput.value = formObject.authorData;
  }
});

titleInput.onchange = handleChange;
authorInput.onchange = handleChange;
