const createBookItem = (book) => `
  <div id="book-item" class="shadow-[0_3px_8px_0_rgba(0,0,0,0.24)] rounded-lg p-4 my-4">
    <p class="text-[#F45050] text-xl font-bold" tabindex="0">${book.title}</p>
    <p tabindex="0">${book.borrower ? `Borrowed (${book.borrower})` : 'Available'}</p>
    <div class="flex justify-end">
      <button id="btn-delete-book" class="p-2" bookTitle="${book.title}">
        <img src="./icons/delete-icon.svg" width="30px" height="30px" alt="Delete Book">
      </button>
      <button id="btn-update-book" class="p-2" currentTitle="${book.title}">
        <img src="./icons/edit-icon.svg" width="30px" height="30px" alt="Update Book">
      </button>
    </div>
  </div>
`;

const createContentEmptyTemplate = () => `
  <p class="content-empty__text text-center" tabindex="0">Buku belum tersedia. <br/> Silahkan tambahkan!</p>
`;

const createContentFailedTemplate = () => `
  <p class="content-empty__text text-center" tabindex="0">Terjadi kesalahan. <br/> Gagal mengambil data!</p>
`;

export {
  createBookItem,
  createContentEmptyTemplate,
  createContentFailedTemplate,
};
