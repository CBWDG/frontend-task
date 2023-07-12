"use strict";

const baseURL = 'http://3.39.191.68:8080/';

// const title = document.querySelector("#title");
// const description = document.querySelector("#description");
// const postBtn = document.querySelector("button");
// postBtn.addEventListener("click", post);

function create() {
   const title = document.getElementById("title").value
   const description = document.getElementById("description").value
   // console.log(title, description);
   // console.log(1)
   postCreate(title, description);
}

function postCreate(title, description) {
   const createData = {
      title : title,
      description : description,
   }
   console.log(createData)

   // fetch(`${baseURL}api/posts`)
   // .then((res) => {
   //    return res.json()
   // })
   // .then(data => console.log(data))
   // .catch(err => console.log(err))

   const option = {
      method : "POST",
      headers : {
         "Content-type" : "application/json; charset=utf-8"
      },
      body: JSON.stringify(
         createData
      )
   }
   
   fetch(`${baseURL}api/posts`, option)
   .then(res => {
      return res.json()
   })
   .then(data => {
      console.log(data)
   })
}