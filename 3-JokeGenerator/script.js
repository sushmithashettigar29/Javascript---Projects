let jokeText = document.getElementById("joke-text");
let btn = document.getElementById("btn");
let laughEmoji = document.getElementById("laugh");
const url =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.addEventListener("click", function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.joke) {
        jokeText.textContent = data.joke;
        laughEmoji.textContent = "😂😂😂";
      } else {
        jokeText.textContent = "Joke Not Found. Try Again!";
      }
    })
    .catch((error) => {
      console.log("Error while fetching a joke : ", error);
      jokeText.textContent = "Error while fetching a joke!";
    });
});
