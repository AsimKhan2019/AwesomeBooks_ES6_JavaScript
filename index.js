import Books from './modules/Books.js';
import UI from './modules/UI.js';
import Storage from './modules/BookStorage.js';
import Navigation from './modules/Navigation.js';
import { DateTime } from './modules/Luxon.js';

const navList = document.querySelector('.nav-list');
const btnSubmit = document.querySelector('.submit');
const bookDisplay = document.querySelector('.book-display');

navList.addEventListener('click', (e) => {
  if (e.target.id === 'list') {
    Navigation.showSection('.book-display');
  } else if (e.target.id === 'addnew') {
    Navigation.showSection('.add-books');
  } else if (e.target.id === 'contact') {
    Navigation.showSection('.contact');
  }
});

btnSubmit.addEventListener('click', () => {
  let bookid = 0;
  let author = ' ';
  let title = ' ';
  let bookListObj = [];

  title = document.querySelector('.form-title').value;
  author = document.querySelector('.form-author').value;

  bookListObj = Storage.getData('bookList');

  if (bookListObj !== null && bookListObj.length > 0) {
    const lastObject = bookListObj[bookListObj.length - 1];
    bookid = lastObject.bookid + 1;
  } else {
    bookid = 1;
    bookListObj = [];
  }

  const addBook = new Books(bookid, title, author);
  UI.addToList(addBook);

  document.querySelector('.form-title').value = '';
  document.querySelector('.form-author').value = '';
});

// Remove Data Event Handler
bookDisplay.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'BUTTON') {
      UI.removeFromList(e);
    }
  },
  true,
);

// Load Data Initially if there is any
const key = localStorage.getItem('bookList');
if (key) {
  UI.getBookList();
}

// show time
const showTime = document.querySelector('.show-time');
const dt = DateTime.local();
showTime.innerHTML = dt.toISO();

