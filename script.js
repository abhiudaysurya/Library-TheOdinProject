const library = [];

const bookContainer = document.querySelector(".book-container");
const addBookButton = document.querySelector(".add-book");
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");


addBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    addToLibrary();
});


function addToLibrary() {
    const readField = document.querySelector('input[name="read"]:checked');
    const title = titleField.value.trim();
    const author = authorField.value.trim();
    const pages = pagesField.value.trim();
    const read = readField ? readField.value : null;
    if (!title || !author || !pages) return;
    library.push(new Book(title, author, pages, read));
    renderLibrary();
    clearForm();
}

const clearForm = () => {
    titleField.value = "";
    authorField.value = "";
    pagesField.value = "";
    document.querySelectorAll('input[name="read"]').forEach(r => r.checked = false);
};



const renderLibrary = () => {
    bookContainer.innerHTML = "";
    library.forEach((book, idx) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.textContent = book.info();
        // Add remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-book");
        removeBtn.setAttribute("aria-label", `Remove book ${book.name}`);
        removeBtn.addEventListener("click", () => {
            library.splice(idx, 1);
            renderLibrary();
        });
        bookDiv.appendChild(removeBtn);
        bookContainer.appendChild(bookDiv);
    });
};


class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return `Title: ${this.name}, Author: ${this.author}, Pages: ${this.pages}, Read?: ${this.read}`;
    }
}

// ...existing code...