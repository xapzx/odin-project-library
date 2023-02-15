# odin-project-library
Project: Build a small Library app

Live Preview: https://xapzx.github.io/odin-project-library/

This project is part of the Odin Project Foundations Course. The aim of this project is to build a small/basic library application with newly learn knowledge/skills about Objects in JavaScript.

Assignment:
1. All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

    let myLibrary = [];

    function Book() {
    // the constructor...
    }

    function addBookToLibrary() {
    // do stuff here
    }

2. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

3. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. You will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!

4. Add a button on each book’s display to remove the book from the library.
    1. You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
5. Add a button on each book’s display to change its read status.
    1. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.