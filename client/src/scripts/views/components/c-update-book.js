import AppSource from '../../data/app-source';

class CUpdateBook extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const currentTitle = this.attributes.getNamedItem('current-title').value;
    this.innerHTML = `
      <div class="w-full h-full fixed inset-0 z-50 bg-black backdrop-blur-md bg-opacity-40">
        <div class="h-3/5 w-11/12 md:w-9/12 lg:w-1/2 px-4 md:px-6 py-6 m-6 mx-auto flex flex-col justify-between shadow-[0_3px_8px_0_rgba(0,0,0,0.24)] rounded-lg bg-white">
          <h3 class="text-black text-2xl font-bold mb-6 text-center" tabindex="0">Update Book</h3>
          <div>
            <input class="form-input" placeholder="Current Book Title" value="${currentTitle}" readonly/>
            <input id="new-book-title" class="form-input" placeholder="New Book Title"/>
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
      const bookTitle = this.querySelector('#new-book-title').value;
      if (bookTitle) {
        const book = await AppSource.updateBook(currentTitle, bookTitle);
        if ('message' in book.data) {
          alert(book.data.message);
          location.reload();
        } else alert(book.data.error);
      } else {
        alert('Failed! New Book Title is Required.');
      }
    });
  }
}

customElements.define('c-update-book', CUpdateBook);
