const myDivText = document.getElementById("divText");
const myInputText = document.getElementById("changeDivTextInput");
function changeDivText() {
  myDivText.innerText = myInputText.value;
}

const windowSize = document.getElementById("windowSize");

const myDivID = document.getElementById("myDivID");

windowSize.innerText = `${window.innerWidth}x${window.innerHeight}`;

window.addEventListener("resize", (e) => {
  windowSize.innerText = `${window.innerWidth}x${window.innerHeight}`;
  if (window.innerWidth < 300) {
    myDivID.style.rotate = "45deg";
  } else if (window.innerWidth < 500) {
    myDivID.style.rotate = "90deg";
  } else if (window.innerWidth < 700) {
    myDivID.style.rotate = "125deg";
  } else if (window.innerWidth < 850) {
    myDivID.style.rotate = "180deg";
  }
});
const astronautsNames = document.getElementById("astronautsNames");
const article = document.getElementById("article");

fetch("http://api.open-notify.org/astros.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.people);
    article.innerText = `There are ${data.number} astronauts in space, they are:`;
    for (let person of data.people) {
      //   console.log(person.name);
      astronautsNames.innerText += person.name + "\n";
    }
  });
