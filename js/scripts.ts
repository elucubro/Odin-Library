function Book(
  this: any,
  bookName: string,
  author: string,
  pageCount: number,
  bookStatus: string
) {
  this.bookName = bookName;
  this.author = author;
  this.pageCount = pageCount;
  this.bookStatus = bookStatus;
  function info() {
    return (
      { bookName } +
      " " +
      { author } +
      " " +
      { pageCount } +
      " " +
      { bookStatus }
    );
  }
}

const theHobbit = new (Book as any)("The Hobbit", "JRR Tolkien", 134, "Read");
console.log(theHobbit.info());
