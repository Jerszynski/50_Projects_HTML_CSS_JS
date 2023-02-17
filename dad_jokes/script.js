const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener("click", generateJoke);

generateJoke();

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeElement.innerHTML = data.joke;
//     });
// }

//USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);

  const data = await response.json();

  jokeElement.innerHTML = data.joke;
}
