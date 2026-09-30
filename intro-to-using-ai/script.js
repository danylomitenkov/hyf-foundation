const button = document.querySelector(".change-bg-color-button"); // Choose the button element with the class "change-bg-color-button"

// Function that generate 3 random numbers between 0 and 255 and set the background color of the body to that color
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", changeBackgroundColor); // The button will call the changeBackgroundColor function when clicked
