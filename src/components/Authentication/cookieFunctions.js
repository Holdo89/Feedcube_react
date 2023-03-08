export function setJWTCookie(jwt){
    const expirationDate = new Date(Date.now() + 86400 * 1000); // Set the expiration date to 1 day from the current time
    document.cookie = `jwt=${jwt}; path=/; expires=${expirationDate.toUTCString()};`;
}

export function getJWTCookie(){
    const cookieName="jwt";
    const cookies = document.cookie.split(';'); // Split the cookie string into an array of cookies
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${cookieName}=`)) {
        return cookie.substring(cookieName.length + 1); // Return the value of the cookie
      }
    }
    return null; // Return null if the cookie is not found
  }
  
export function deleteCookie(jwt){
const expirationDate = new Date(Date.now()); // Set the expiration date to 1 day from the current time
document.cookie = `jwt=${jwt}; path=/; expires=${expirationDate.toUTCString()};`;
}