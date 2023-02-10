

  var host = window.location.host;
  var protocol = window.location.protocol;
  var url = host.replace(":3000",'');
  if (url.includes("localhost"))
  {
    url = url+"/Feedcube_react/api";
  }
  else
  {
    url = url+"/api";
  }

  export const baseURL = protocol+"//"+url;




