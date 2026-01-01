// ------------------- BOOK CREATION ------------------- //
const myLibrary = [];
// Define the book
function Book(title, author, pages) {
    id = crypto.randomUUID();
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = "NO";
}

// Create a new book using new Book()... and store it in myLibary
function addBookToLibrary(title, author, pages) {
    let x = new Book(title, author, pages);
    myLibrary.push(x);
    console.log(myLibrary);
}
// Receive user input of data submitted on form
const form = document.getElementById("book-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page refresh

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    // Send the data over to the addBookToLibrary function
    addBookToLibrary(title, author, pages);
    renderBook();
});

// ------------------- DISPLAY BOOK VISUALLY ------------------- //
function renderBook() {
    const container = document.getElementById("library-container");
    container.innerHTML = "";

    for (const book of myLibrary) {
        // Create a div for each book
        const div = document.createElement("div");
        div.classList.add("book-card");

        // Append object properties to the new div
        const titleText = document.createElement("h2");
        titleText.textContent = book.title;
        titleText.classList.add("book-title");

        const idText = document.createElement("p");
        idText.textContent = book.id;
        idText.classList.add("book-id");

        const authorText = document.createElement("p");
        authorText.textContent = book.author;
        authorText.classList.add("book-author");

        const pagesText = document.createElement("p");
        pagesText.textContent = book.pages;
        pagesText.classList.add("book-pages");

        const readText = document.createElement("p");
        readText.textContent = book.read;
        readText.classList.add("book-pages");

        // Append these child elements to the div
        div.appendChild(titleText);
        div.apppendChild(idText);
        div.appendChild(authorText);
        div.appendChild(pagesText);
        div.appendChild(readText);

        // Append div to the overall container
        container.appendChild(div);
    }
}
