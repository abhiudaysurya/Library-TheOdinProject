const library = []

const bookContainer = document.querySelector(".book-container");
const addBookButton = document.querySelector(".add-book");


addBookButton.addEventListener("click", () => {
    addToLibrary();
});


function addToLibrary() {
    const titleField = document.querySelector("#title");
    const authorField = document.querySelector("#author");
    const pagesField = document.querySelector("#pages");
    const readField = document.querySelector('input[name="read"]:checked');
    
    let title = titleField.value;
    let author = authorField.value;
    let pages = pagesField.value;
    let read = readField ? readField.value : null; 

    library.push(new Book(title, author, pages, read));

    renderLibrary();
}



function renderLibrary() {
    bookContainer.innerHTML = "";
    library.forEach((book, idx) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.textContent = book.info();
        bookContainer.appendChild(bookDiv);
    });
}

function Book(name, author, pages, read) {
    if (!new.target) {
        throw Error("You must use this function with the new keyword");
    }

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return "Title: " + name + ", Author: " + author + ", Pages: " + pages + ", Read?: " + read; 
    }
}

const book = new Book("Game of Thrones", "George RR Martin", 500, "Yes");

console.log(book.info());