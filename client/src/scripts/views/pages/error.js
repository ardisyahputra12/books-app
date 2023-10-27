class Error extends HTMLElement {
  connectedCallback() {
    this.render();
    this._insertData();
  }

  render() {
    this.innerHTML = `
      <section class="section-container border-t">
        <h2 class="section-title text-2xl" tabindex="0">Halaman Tidak Ditemukan!</h2>
        <p class="section-subtitle" tabindex="0">Silahkan periksa URL halaman tujuan Anda</p>
        <button class="btn btn-fill">
          <a href="/">Pergi ke Home</a>
        </button>
      </section>
    `;
  }
}

customElements.define('error-page', Error);
const error = '<error-page></error-page>';
export default error;
