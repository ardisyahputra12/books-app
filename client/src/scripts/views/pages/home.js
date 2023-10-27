import AppSource from '../../data/app-source';
import {
  createBookItem,
  createContentEmptyTemplate,
  createContentFailedTemplate,
} from '../templates/template-creator';

class Home extends HTMLElement {
  connectedCallback() {
    this.render();
    this._insertData();
    this._addBookHandle();
    this._borrowBookHandle();
    this._returnBookHandle();
  }

  render() {
    this.innerHTML = `
      <section class="w-11/12 lg:w-1/2 py-8 m-auto">
        <div id="action-book-container" class="border-y flex flex-wrap justify-between">
          <button id="btn-add-book" class="btn btn-fill mx-auto">Add Book</button>
          <button id="btn-borrow-book" class="btn btn-fill mx-auto">Borrow Book</button>
          <button id="btn-return-book" class="btn btn-fill mx-auto">Return Book</button>
        </div>
        <p class="text-xl font-bold mt-4">
          Total books: <span id="book-total"></span>
        </p>
        <div id="books-container" class="py-8"></div>
      </section>
    `;
  }

  async _insertData() {
    const books = await AppSource.getBooks();
    const booksContainer = this.querySelector('#books-container');
    if (!books.error) {
      this._insertDataBook(books, booksContainer);
    } else {
      booksContainer.innerHTML = createContentFailedTemplate();
    }
  }

  _insertDataBook(books, booksContainer) {
    if (books) {
      books.data.forEach((book) => {
        booksContainer.innerHTML += createBookItem(book);
      });
      this._countBookHandle(books);
      this._updateBookHandle();
      this._deleteBookHandle();
    } else {
      booksContainer.innerHTML = createContentEmptyTemplate();
    }
  }

  _countBookHandle(books) {
    const bookTotal = this.querySelector('#book-total');
    bookTotal.innerHTML = books.data.length;
  }

  _updateBookHandle() {
    const main = document.querySelector('main');
    const btnUpdateBooks = this.querySelectorAll('#btn-update-book');
    btnUpdateBooks.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTitle = btn.getAttribute('currentTitle');
        main.innerHTML += `<c-update-book current-title="${currentTitle}"></c-update-book>`;
      });
    });
  }

  _deleteBookHandle() {
    const btnDeleteBooks = this.querySelectorAll('#btn-delete-book');
    btnDeleteBooks.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const bookTitle = btn.getAttribute('bookTitle');
        const book = await AppSource.deleteBook(bookTitle);
        if ('message' in book.data) {
          alert(book.data.message);
          location.reload();
        } else alert(book.data.error);
      });
    });
  }

  _addBookHandle() {
    const main = document.querySelector('main');
    const btnAddBook = this.querySelector('#btn-add-book');
    btnAddBook.addEventListener('click', () => {
      main.innerHTML += '<c-add-book></c-add-book>';
    });
  }

  _borrowBookHandle() {
    const main = document.querySelector('main');
    const btnBorrowBook = this.querySelector('#btn-borrow-book');
    btnBorrowBook.addEventListener('click', () => {
      main.innerHTML += '<c-borrow-book></c-borrow-book>';
    });
  }

  _returnBookHandle() {
    const main = document.querySelector('main');
    const btnReturnBook = this.querySelector('#btn-return-book');
    btnReturnBook.addEventListener('click', () => {
      main.innerHTML += '<c-return-book></c-return-book>';
    });
  }
}

customElements.define('home-page', Home);
const home = '<home-page></home-page>';
export default home;
