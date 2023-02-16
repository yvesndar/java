const button = document.getElementById("one");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
