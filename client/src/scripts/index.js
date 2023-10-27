import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.css';
import './views/components/c-add-book';
import './views/components/c-borrow-book';
import './views/components/c-return-book';
import './views/components/c-update-book';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
