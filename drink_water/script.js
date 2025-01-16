const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((smallCup, index) => {
  smallCup.addEventListener("click", () => highlightCups(index));
});

// Adding "full" class to the clicked cup and if you click for example 4th cup it will add "full" class also to the previous cups between clicked cups
function highlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((smallCup, index2) => {
    if (index2 <= index) {
      smallCup.classList.add("full");
    } else {
      smallCup.classList.remove("full");
    }
  });
}

// // Here you can click and add "full" class to a cup of you choice
// function highlightCups(index) {
//   smallCups.forEach((smallCup, index2) => {
//     if (index2 === index) {
//       smallCup.classList.toggle("full");
//     }
//   });
// }
