"use strict";

const baseURL = 'http://3.39.191.68:8080/';
//게시글 전체 조회//

function getPosts() {
   const postListContainer =document.getElementById("postList");
   // id가 postList인 postListContainer에 추가
   // postListContainer가 곧 API에서 가져온 게시물들을 뿌려주는 역할을 할 것.
   fetch(`${baseURL}api/posts`, {
      method : "GET",
      headers : {
         'Content-type': 'application/json; charset=utf-8'
      }
   })
   .then(res => res.json())
   .then(posts => {
      console.log(posts)
      for (let i = 0; i < posts.length; i++) {
         const post = posts[i];
         // console.log(post);
         const postElement = document.createElement("div");
         postElement.classList.add("post");

         const titleElement = document.createElement("h3");
         titleElement.textContent = post.title;

         const descriptionElement = document.createElement('p');
         descriptionElement.textContent = post.description;

         postElement.appendChild(titleElement); //제목 요소 
         postElement.appendChild(descriptionElement); //내용 요소 게시물 요소에 추가됨

         postListContainer.appendChild(postElement); //이제 게시물 요소는 postListcontainer에 추가됨
      }   
   })
   .catch(function(error) {
      console.log(error);
   });
}