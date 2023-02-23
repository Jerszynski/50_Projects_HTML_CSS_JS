const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  console.log(event);
  insert.innerHTML = `
    <div class="key">
        ${event.key === " " ? "space" : event.key}
        <small>event.key</small>
      </div>

      <div class="key">
        ${event.keyCode} 
        <small>event.keyCode</small>
      </div>

      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>
    `;
});

// keyCode is Deprecated but it may still work but it is not recomended to use

// window.addEventListener(
//   "keydown",
//   (event) => {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.getElementById("insert").appendChild(paragraph);
//     window.scrollTo(0, document.body.scrollHeight);
//   },
//   true
// );
