// Make requests to the api.
const api = (method, path, body = null) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4){
        if (this.status == 200){
          // Response.
          const resp = xhttp.responseText;
          const data = JSON.parse(resp);
          // Returns a Promise object that is resolved.
          resolve(data);
        } else if (this.status == 500){
          // Returns a Promise object that is rejected.
          reject(xhttp.statusText);
        } else {
          // Returns a Promise object that is resolved.
          resolve(xhttp.statusText);
        }
      }
    };
    xhttp.open(method, path, true);
    xhttp.setRequestHeader("content-type", "application/json");
    xhttp.send(JSON.stringify(body));
  });
}
