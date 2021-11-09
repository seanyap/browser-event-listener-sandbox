const heading = document.getElementById("key");
const info = document.getElementById("key-info");

// listens to the window for any key presses from user
window.addEventListener("keypress", (event) => {
  heading.textContent = `${event.key}`;
  heading.style.fontSize = "5rem";

  info.textContent = `Keycode: ${event.keyCode}`;
});
