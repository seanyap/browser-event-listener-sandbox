const heading = document.getElementById("key");
const info = document.getElementById("key-info");
console.log(heading);
console.log(info);

window.addEventListener("keypress", (event) => {
  console.log(event);
  heading.textContent = `${event.key}`;
  info.textContent = `Keycode: ${event.keyCode}`;
});
