const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const counterInnerTextValue = +counter.innerText;

    const increment = target / 400;

    if (counterInnerTextValue < target) {
      counter.innerText = `${Math.ceil(counterInnerTextValue + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
