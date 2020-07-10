/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 1.0.0
 * @author  Kizito Inegbenose
 *
 **/

class EasyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  get(url, callback) {
    this.http.open("GET", url, true);

    let self = this;
    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(null, self.http.responseText);
      } else {
        callback(`Error: ${self.http.status}`);
      }
    };

    this.http.send();
  }

  post(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

  put(url, data, callback) {
    this.http.open("PUT", url, true);

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

  delete(url, data, callback) {
    this.http.open("DELETE", url, true);

    let self = this;
    this.http.onload = function () {
      if (self.this.status === 200) {
        callback(null, "Succesfully deleted");
      } else {
        callback("Error: " + self.http.status);
      }
    };

    this.http.send();
  }
}
