let myLibrary: any[] = [];
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
  this.info = function () {
    return (
      bookName + ", " + author + ", " + pageCount.toString() + ", " + bookStatus
    );
  };
}

function addBookToLibrary(
  titleInput: string,
  authorInput: string,
  pageCount: string,
  statusInput: string
) {
  let page = Number(pageCount);
  let newBook = new (Book as any)(titleInput, authorInput, page, statusInput);
  myLibrary.push(newBook);
}

function addCards() {
  for (let item of myLibrary) {
    const libraryContainer = document.createElement("div");
    libraryContainer.classList.add("libraryContainer");
    const itemCard = document.createElement("div");
    itemCard.classList.add("itemCard");
    // I want this div to be a column directed flexbox
    const nameAuthor = `${item.bookName} ${item.author}`;
    const header = document.createElement("h1");
    header.textContent = nameAuthor;
    header.classList.add("cardHeader");

    // Appending elements to various containers
    itemCard.appendChild(header);
    libraryContainer.appendChild(itemCard);
    document.body.appendChild(libraryContainer);
  }
}

const theHobbit = new (Book as any)("The Hobbit", "JRR Tolkien", 134, "True");
console.log(theHobbit.info());
myLibrary.push(theHobbit);
