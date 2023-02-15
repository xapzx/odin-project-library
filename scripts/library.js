const book_section = document.querySelector('#book-section');
const submit = document.querySelector('#form-submit-btn');
let library = [];
const book_properties = ['Title', 'Author', 'Pages', 'Read'];

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Adds a new book to the library
function addBookToLibrary() {
  const title = document.querySelector('#title-form').value;
  const author = document.querySelector('#author-form').value;
  const pages = document.querySelector('#pages-form').value;
  const read = document.querySelector('input[name="read"]:checked').value;
  const book = new Book(title, author, pages, read);
  library.push(book);
}

// Displays each book in the library on its own card
function displayBooks() {
  book_section.innerHTML = "";

  let count = 0;
  for(const book of library) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('card');

    let book_info;
    for(const property in book) {
      if(property === "read") {
        // Create the toggle slider for read book property
        book_info = document.createElement('div');
        book_info.classList.add('toggle')
        const text = document.createElement('p');
        text.innerText = book_properties[count] + ": ";
        book_info.appendChild(text);

        const label = document.createElement('label');
        label.classList.add('switch');

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        label.appendChild(input);

        const slider = document.createElement('span');
        slider.classList.add('slider', 'round');
        label.appendChild(slider);
        book_info.appendChild(label);
      } else {
        book_info = document.createElement('p');
        book_info.innerText = book_properties[count] + ": " + book[property];
      }

      newDiv.appendChild(book_info);
      count++;
    }
    book_section.appendChild(newDiv);
    count = 0;
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Display all books on load of page
window.addEventListener('load', displayBooks);

// Prevent the default behaviour of form submission to server
// Clicking button adds new book to library then updates display of books
submit.addEventListener('click', (event) => {
  event.preventDefault();
  addBookToLibrary();
  displayBooks();
});

// Dummy data
const book1 = new Book('The Hobbit', 'J.R.R. Toljien', 295, true);
const book2 = new Book('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 576, false);
const book3 = new Book('The 13-Storey Treehouse', 'Andy Griffiths', 212, true);
const book4 = new Book('The Secret Garden', 'Frances Hodgeson Burnett', 212, false);
library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);