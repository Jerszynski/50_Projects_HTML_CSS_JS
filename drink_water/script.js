const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((smallCup, index) => {
  smallCup.addEventListener("click", () => highlightCups(index));
});

// // Adding "full" class to the clicked cup and if you click for example 4th cup it will add "full" class also to the previous cups between clicked cups
// function highlightCups(index) {
//   if (
//     smallCups[index].classList.contains("full") &&
//     !smallCups[index].nextElementSibling.classList.contains("full")
//   ) {
//     index--;
//   }

//   smallCups.forEach((smallCup, index2) => {
//     if (index2 <= index) {
//       smallCup.classList.add("full");
//     } else {
//       smallCup.classList.remove("full");
//     }
//   });

//   updateBigCup();
// }

// function updateBigCup() {
//   const fullCups = document.querySelectorAll(".cup-small.full").length;
//   const totalCups = smallCups.length;

//   if (fullCups === 0) {
//     percentage.style.visibility = "hidden";
//     percentage.style.height = 0;
//   } else {
//     percentage.style.visibility = "visible";
//     percentage.style.height = `${(fullCups / totalCups) * 330}px`;
//     percentage.innerText = `${(fullCups / totalCups) * 100}%`;
//   }

//   if (fullCups === totalCups) {
//     remained.style.visibility = "hidden";
//     remained.style.height = 0;
//   } else {
//     remained.style.visibility = "visible";
//     liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
//   }
// }

// Here you can click and add "full" class to a cup of you choice
function highlightCups(index) {
  smallCups.forEach((smallCup, index2) => {
    if (index2 === index) {
      smallCup.classList.toggle("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
