function Book(title, author, isbn) {
    let privateIsbn = isbn;
    
    this.title = title;
    this.author = author;

    this.getIsbn = function() {
        return privateIsbn;
    };

    // Public method to display book info
    this.displayInfo = function() {
        return `${this.title} by ${this.author}, ISBN: ${privateIsbn}`;
    };
}

document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const newBook = new Book(title, author, isbn);

    displayBook(newBook);

    this.reset();
});

// Function to display a book in the list
function displayBook(book) {
    const bookList = document.getElementById('books');
    const listItem = document.createElement('li');
    listItem.textContent = book.displayInfo();
    bookList.appendChild(listItem);
}
