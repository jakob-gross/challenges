console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const imageElement = document.createElement("img");
    if (i <= filledStars) {
      imageElement.src = "assets/star-filled.svg";

      imageElement.addEventListener("click", (e) => {
        renderStars(i);
      });
    }
    // } else {
    //   imageElement.src = "assets/star-empty.svg";

    // }
    starContainer.append(imageElement);
  }
  //--^-- your code here --^--
}

renderStars(2);
