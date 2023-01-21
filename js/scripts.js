function Book(bookName, author, pageCount, bookStatus) {
    this.bookName = bookName;
    this.author = author;
    this.pageCount = pageCount;
    this.bookStatus = bookStatus;
    function info() {
        return ({ bookName: bookName } +
            " " +
            { author: author } +
            " " +
            { pageCount: pageCount } +
            " " +
            { bookStatus: bookStatus });
    }
}
var theHobbit = new Book("The Hobbit", "JRR Tolkien", 134, "Read");
console.log(theHobbit.info());
