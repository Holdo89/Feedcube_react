import {baseURL} from "./baseURL.js"

export const store = {};

// Inserts the jwt to the store object
store.setJWT = function (data) {
  this.JWT = data;
};

export async function validateCredentials(userData) {
    const res =  await fetch(baseURL+'authenticate.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password
        })
      });
      console.log(res);
      if (res.status >= 200 && res.status <= 299) {
        const jwt = await res.text();
        if(jwt!="invalid credentials ")
        {
          store.setJWT(jwt);
          console.log("valid token: "+jwt);
          return true;
        }
        else{
          console.log("invalid credentials")
          return false;
        }
      } else {
        // Handle errors
        console.log(res.status, res.statusText);
        console.log("Invalid Credentials");
        return false;
      }
    }