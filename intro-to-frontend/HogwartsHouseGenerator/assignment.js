const inputUserName = document.getElementById("inputUserName");
const userNameWithHouse = document.getElementById("userNameWithHouse");
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const houseColors = {
  Gryffindor: "#740001",
  Hufflepuff: "#ecb939",
  Ravenclaw: "#0e1a40",
  Slytherin: "#1a472a",
};
function takeHouse() {
  if (inputUserName.value != "") {
    const randomHouse =
      hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
    userNameWithHouse.style.color = houseColors[randomHouse];
    userNameWithHouse.innerText = `${inputUserName.value} belongs in ${randomHouse}`;
  } else {
    userNameWithHouse.innerText = "Please write your name!";
  }
}
