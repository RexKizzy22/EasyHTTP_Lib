/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Kizito Inegbenose
 *
 **/

class EasyHTTP {

  async get(url) {

    const response = await fetch(url);
    const data = await response.json();

    return data;

  }

  async post(url, data) {

    const response = await fetch(url, {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const data = await response.json();

    return data;


  }

  async put(url, data) {

    const response = await fetch(url, {
      method: "PUT",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const data = await response.json();

    return data;


  }

  async delete(url) {

    const response = await fetch(url, {
      method: "DELETE",
      header: {
        "Content-type": "application/json",
      }
    });

    const data = await "Resource Deleted...";

    return data;

  }
}
