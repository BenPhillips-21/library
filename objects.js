function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? "read" : "not read yet"
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
    }
}

Book.prototype.valueOf = function() {
    return { pages: this.pages, author: this.author }
};

const bookOne = new Book('Don Quixote', 'Miguel De Cervantes', 982, true)

console.log(bookOne)
bookOne.info()

const prototypeOfBookOne = Object.getPrototypeOf(bookOne) === Book.prototype
console.log(prototypeOfBookOne)

const values = bookOne.valueOf()
console.log(values)

let v = bookOne.hasOwnProperty('poopy')
console.log(v)

let chungus = Object.prototype.hasOwnProperty('valueOf')
console.log(chungus)

