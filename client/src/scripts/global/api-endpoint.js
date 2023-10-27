import CONFIG from './config';

const API_ENDPOINT = {
  BOOK: `${CONFIG.BASE_URL_SOURCE}/book`,
  BORROW: `${CONFIG.BASE_URL_SOURCE}/borrow`,
  RETURN: `${CONFIG.BASE_URL_SOURCE}/return`,
};

export default API_ENDPOINT;
