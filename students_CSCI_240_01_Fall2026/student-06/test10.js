const button = document.getElementById("btn");
const message = document.getElementById("message");
let count = 0;

button.addEventListener("click", function () {
  count++;
  message.textContent = "JavaScript works! Clicks: " + count;
});
