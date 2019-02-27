import Cookies from 'js-cookie';

import { CONFIG } from './../../constants/config';

class Fetcher {
  static fetch(url: string, options: RequestInit = {}) {
    return fetch(`${CONFIG.GITHUB_BASE_URL}${url}`, 
      { 
        ...options, 
        headers: { ...options.headers, Authorization: `token ${Cookies.get('github_token')}` } 
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .catch((e) => {
        console.error(e);
        throw new Error(e);
      });
  }
}
export default Fetcher;
