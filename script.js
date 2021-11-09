const heading = document.getElementById("key");
const info = document.getElementById("key-info");

window.addEventListener("keypress", (event) => {
  heading.textContent = `${event.key}`;
  heading.style.fontSize = "5rem";
  info.textContent = `Keycode: ${event.keyCode}`;
});
