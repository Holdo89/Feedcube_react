import {deleteCookie} from './cookieFunctions';

export function logout() {
    deleteCookie('jwt');
    window.location.href = '/'
  }




