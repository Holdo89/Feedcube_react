import {baseURL} from "./baseURL.js"
import {store} from "./validateCredentials.js"

export const sendGetRequest = async (endpoint) => {
    const endpointUrl = baseURL+endpoint;
    const res = await fetch(endpointUrl, {
      headers: {
        'Authorization': `Bearer ${store.JWT}`
      }
    });
    const Response = await res.text();
    console.log(Response);
  }
