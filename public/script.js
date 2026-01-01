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
        const title_text = document.createElement("p");
        title_text.textContent = book.title;

        const author_text = document.createElement("p");
        author_text.textContent = book.author;

        const pages_text = document.createElement("p");
        pages_text.textContent = book.pages;

        const read_text = document.createElement("p");
        read_text.textContent = book.read;

        // Append these child elements to the div
        div.appendChild(title_text);
        div.appendChild(author_text);
        div.appendChild(pages_text);
        div.appendChild(read_text);

        // Append div to the overall container
        container.appendChild(div);
    }
}
