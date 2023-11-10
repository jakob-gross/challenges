console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const section = document.createElement("section");
section.classList.add("post");
document.body.append(section);

const p = document.createElement("p");
p.textContent =
  "lore ipsumdsgiohsdoughdfiuvhdfshjofdgjlfdgsshjldfgjhofdg 2222222";
p.classList.add("post__content");
section.append(p);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
section.append(footer);

const span = document.createElement("span");
span.textContent = "@username";
span.classList.add("post__username");
footer.append(span);

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = "♥ Like";
footer.append(button);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// <h1>Social Media Post</h1>
//     <section class="post">
//       <p class="post__content">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//       </p>
//       <footer class="post__footer">
//         <span class="post__username">@username</span>
//         <button type="button" class="post__button" data-js="like-button">
//           ♥ Like
//         </button>
//       </footer>
//     </section>
