/* eslint-disable camelcase */
import API_ENDPOINT from '../global/api-endpoint';

class AppSource {
  static async _helper(endpoint, reqInit) {
    try {
      const response = await fetch(endpoint, reqInit);
      const responseJson = await response.json();
      const data = {
        error: false,
        data: responseJson,
      };
      return data;
    } catch (error) {
      const data = {
        error: true,
        data: error,
      };
      return data;
    }
  }

  static getBooks() {
    return this._helper(API_ENDPOINT.BOOK, {
      method: 'GET',
    });
  }

  static addBook(title) {
    return this._helper(API_ENDPOINT.BOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
  }

  static deleteBook(title) {
    return this._helper(API_ENDPOINT.BOOK, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
  }

  static updateBook(title, new_title) {
    return this._helper(API_ENDPOINT.BOOK, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, new_title }),
    });
  }

  static borrowBook(name, title) {
    return this._helper(API_ENDPOINT.BORROW, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, title }),
    });
  }

  static returnBook(name, title) {
    return this._helper(API_ENDPOINT.RETURN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, title }),
    });
  }
}

export default AppSource;
