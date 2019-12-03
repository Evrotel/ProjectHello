// const comments = [
//   {
//     name: "Martin Luther King",
//     comment: "Amen to that"
//   }
// ];

// const user = {
//   name: "Barack Obama"
// };

// const addComment = event => {
//   const commentInput = document.getElementById("comment-input");
//   const comment = commentInput.value;
//   const target = document.getElementById("comments");

//   if (comment.length > 0) {
//     comments.push({ name: user.name, comment });

//     const newComments = comments
//       .map(
//         comment => `<div class="single-comment">
//   <p class="comment-text">${comment.comment}</p>
//   </div>`
//       )
//       .join(" ");

//     target.innerHTML = newComments;

//     comment.value = "";
//     window.scrollTo(0, document.body.scrollHeight);
//     event.preventDefault();
//   }
// };

// document
//   .getElementById("comment-button")
//   .addEventListener("click", event => addComment(event));
// ctrl


// const newArray = ["komentarz", "inny komentarz","3 koment"]
const newComments = document.getElementById("new-comments")
// newArray.forEach(comment1 => { newComments.innerText += comment1 })
 
const  newFunction = (event) => {
  event.preventDefault()
  const commentInput = document.getElementById("comment-input")
  let commentValue = commentInput.value
  newComments.innerText += commentValue
}

document
  .getElementById("comment-button")
  .addEventListener('click', (event) => newFunction(event))
  