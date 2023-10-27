import AppSource from '../../data/app-source';

class CBorrowBook extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="w-full h-full fixed inset-0 z-50 bg-black backdrop-blur-md bg-opacity-40">
        <div class="h-3/5 w-11/12 md:w-9/12 lg:w-1/2 px-4 md:px-6 py-6 m-6 mx-auto flex flex-col justify-between shadow-[0_3px_8px_0_rgba(0,0,0,0.24)] rounded-lg bg-white">
          <h3 class="text-black text-2xl font-bold mb-6 text-center" tabindex="0">Borrow Book</h3>
          <div>
            <input id="borrower" class="form-input" placeholder="Borrower's Name"/>
            <input id="book-title" class="form-input" placeholder="Book Title"/>
          </div>
          <div class="flex flex-wrap justify-between">
            <button id="btn-cancel" class="btn btn-outline">Cancel</button>
            <button id="btn-submit" class="btn btn-fill">Submit</button>
          </div>
        </div>
      </div>
    `;

    const btnCancel = this.querySelector('#btn-cancel');
    const btnSubmit = this.querySelector('#btn-submit');
    btnCancel.addEventListener('click', () => this.remove());
    btnSubmit.addEventListener('click', async () => {
      const borrower = this.querySelector('#borrower').value;
      const bookTitle = this.querySelector('#book-title').value;
      if (bookTitle && borrower) {
        const book = await AppSource.borrowBook(borrower, bookTitle);
        if ('message' in book.data) {
          alert(book.data.message);
          location.reload();
        } else alert(book.data.error);
      } else {
        alert('Failed! Borrower\'s Name and Book Title are Required.');
      }
    });
  }
}

customElements.define('c-borrow-book', CBorrowBook);
