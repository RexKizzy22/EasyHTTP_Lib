/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Kizito Inegbenose
 *
 **/

 function EasyHTTP() {}

 EasyHTTP.prototype.get = async function(url) {
   const response = await fetch(url);
   const resData = await response.json();
   return resData;
 }

 EasyHTTP.prototype.post = async function(url, data) {
   const response = await fetch(url, {
     method: "POST",
     headers: {
       "Content-type": "application/json"
     },
     body: JSON.stringify(data);
   });
   const resData = await response.json();
   return resData;
 }

 EasyHTTP.prototype.put = async function(url, data) {
   const response = await fetch(url, {
     method: "PUT",
     headers: {
       "Content-type": "application/json"
     },
     body: JSON.stringify(data);
   });
   const resData = await response.json();
   return resData;
 }

 EasyHTTP.prototype.delete = async function(url) {
   const response = await fetch(url, {
     method: "DELETE",
     headers: {
       "Content-type": "application/json"
     }
   });
   const resData = await "Resource deleted...";
   return resData;
 }
