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
});
