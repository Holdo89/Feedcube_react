import {baseURL} from "./baseURL.js"
import {getJWTCookie} from '../Authentication/cookieFunctions';

const jwt = getJWTCookie();

export const sendGetRequest = async (endpoint) => {
    const endpointUrl = baseURL+endpoint;
    const res = await fetch(endpointUrl, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
    const Response = await res.text();
    console.log(Response);
    return Response;
  }
