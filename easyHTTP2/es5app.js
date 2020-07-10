/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Kizito Inegbenose
 *
 **/

 function EasyHTTP() {}

 EasyHTTP.prototype.get = function(url) {
   return new Promise((resolve, reject) => {
     fetch(url)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err));
   });
 }

 EasyHTTP.prototype.post = function(url, data) {
   return new Promise((resolve, reject) => {
     fetch(url, {
       method: "POST",
       header: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(data)
     })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err));
   });
 }

 EasyHTTP.prototype.put = function(url, data) {
   return new Promise((resolve, reject) => {
     fetch(url, {
       method: "PUT",
       header: {
         "Content-type": "application/json",
       },
       body: JSON.stringify(data)
     })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err));
   });
 }

 EasyHTTP.prototype.delete = function(url) {
   return new Promise((resolve, reject) => {
     fetch(url, {
       method: "DELETE",
       header: {
         "Content-type": "application/json",
       }
     })
      .then(res => res.json())
      .then(() => resolve("Resource deleted..."))
      .catch(err => reject(err));
   });
 }
