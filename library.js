const myLibrary = []

class Book {
    constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? "read" : "not read yet"
    }
    info() { console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`) }
}

document.addEventListener("DOMContentLoaded", function() {
    const showFormButton = document.getElementById("showFormButton");
    const libraryFormContainer = document.getElementById("libraryFormContainer");
    const closeFormButton = document.getElementById("closeFormButton");

    // Show the form when the button is clicked
    showFormButton.addEventListener("click", function() {
        libraryFormContainer.classList.remove("hidden");
    });

    // Hide the form when the "Close Form" button is clicked
    closeFormButton.addEventListener("click", function() {
        libraryFormContainer.classList.add("hidden");
    });

    // Optionally, prevent the form from submitting and add your form submission logic here
    const libraryForm = document.getElementById("libraryForm");

    libraryForm.addEventListener("submit", function(event) 
    {
        event.preventDefault();
         // Get user input
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const pagesInput = document.getElementById("pages");
    const readInput = document.getElementById("read");

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.value;

    // Create a new object using the constructor
    const newBook = new Book(title, author, pages, read);

    // Display the object in a list
    const libraryList = document.getElementById("libraryList");
    const objectItem = document.createElement("div");
    const button = document.createElement("button");
    const readButton = document.createElement("button")
    button.textContent = 'Remove Book'
    button.onclick = () => {
        objectItem.remove()
        button.remove()
        readButton.remove()
    }
    readButton.textContent = 'Change Read Status'
    objectItem.textContent = `title: ${newBook.title}, author: ${newBook.author}, pages: ${newBook.pages}, read: ${newBook.read}`;
    readButton.onclick = () => {
        console.log('Read Status Changed')
        newBook.read = newBook.read === "read" ? "not read yet" : "read";
        objectItem.textContent = `title: ${newBook.title}, author: ${newBook.author}, pages: ${newBook.pages}, read: ${newBook.read}`;
    }
    libraryList.appendChild(objectItem);
    libraryList.appendChild(button);
    libraryList.appendChild(readButton)
    myLibrary.push(objectItem)
    console.log(myLibrary)

    // Clear the form inputs
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
    });
});

