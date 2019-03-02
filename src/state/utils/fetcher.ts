import Cookies from 'js-cookie';

import { CONFIG } from './../../constants/config';

class Fetcher {
  static fetch(url: string, isAbsoluteUrl: boolean = false, options: RequestInit = {}) {
    const resourUrl = isAbsoluteUrl ? url : `${CONFIG.GITHUB_BASE_URL}${url}`; 
    return fetch(resourUrl, 
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
