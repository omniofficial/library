// ------------------- BOOK CREATION ------------------- //
// Define the book
class Book {
    constructor(title, author, pages) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = "NO";
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // ------------------- UTILITY FUNCTIONS ------------------- //
    // Create a new book using new Book()... and store it in library.books
    addBookToLibrary(title, author, pages) {
        const newBook = new Book(title, author, pages);
        this.books.push(newBook);
        console.log(this.books);
    }

    editReadStatus(event) {
        const bookId = event.target.dataset.id; // Retrieve the stored ID inside of the button.
        let book;

        // Search for the book based on my bookId
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === bookId) {
                book = this.books[i]; // Save the full book object inside the book variable
                break;
            }
        }

        // Change read status of selected
        if (book.read === "YES") {
            book.read = "NO";
        } else {
            book.read = "YES";
        }
        this.renderBook(); // Rebuild all cards and update the UI.
    }

    deleteBook(event) {
        const bookId = event.target.dataset.id; // Retrieve the stored ID inside of the button;

        // Search for the book based on my bookId
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === bookId) {
                this.books.splice(i, 1); // Remove 1 element at index i
                break;
            }
        }
        this.renderBook();
    }

    renderBook() {
        const container = document.getElementById("library-container");
        container.innerHTML = "";

        for (const book of this.books) {
            // Create a div for each book
            const div = document.createElement("div");
            div.classList.add("book-card");

            // Append object properties to the new div
            const titleText = document.createElement("h2");
            titleText.textContent = `Title: ${book.title}`;
            titleText.classList.add("book-title");

            const idText = document.createElement("p");
            idText.textContent = `ID: ${book.id}`;
            idText.classList.add("book-id");

            const authorText = document.createElement("p");
            authorText.textContent = `Author: ${book.author}`;
            authorText.classList.add("book-author");

            const pagesText = document.createElement("p");
            pagesText.textContent = `Pages: ${book.pages}`;
            pagesText.classList.add("book-pages");

            const readText = document.createElement("p");
            readText.textContent = `Read: ${book.read}`;
            readText.classList.add("book-pages");

            const editReadStatusBtn = document.createElement("button");
            editReadStatusBtn.dataset.id = book.id; // Links the button to its book object
            editReadStatusBtn.classList.add("book-buttons");
            editReadStatusBtn.textContent = "TOGGLE READ STATUS";
            editReadStatusBtn.addEventListener("click", (e) =>
                library.editReadStatus(e)
            );

            const deleteBtn = document.createElement("button");
            deleteBtn.dataset.id = book.id; // Links the button to its book object
            deleteBtn.classList.add("book-buttons");
            deleteBtn.textContent = "DELETE";
            deleteBtn.addEventListener("click", (e) => library.deleteBook(e));

            // Append these child elements to the div
            div.appendChild(titleText);
            div.appendChild(idText);
            div.appendChild(authorText);
            div.appendChild(pagesText);
            div.appendChild(readText);
            div.appendChild(editReadStatusBtn);
            div.appendChild(deleteBtn);

            // Append div to the overall container
            container.appendChild(div);
        }
    }
}

// ------------------- EVENT LISTENER ------------------- //
// Create library object
const library = new Library();

// Receive user input of data submitted on form
const form = document.getElementById("book-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    // Send the data over to the addBookToLibrary function
    library.addBookToLibrary(title, author, pages);
    // Render book on HTML page
    library.renderBook();
});
