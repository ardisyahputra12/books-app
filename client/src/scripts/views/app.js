/* eslint-disable class-methods-use-this */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url in routes ? url : '/error'];
    this._content.innerHTML = await page;
    this._handlerSkipLink();
  }

  _handlerSkipLink() {
    const skipLinkElem = document.querySelector('.skip');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
