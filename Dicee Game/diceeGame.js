var refresh = document.querySelector('h1');
document.querySelector('h1').addEventListener("click", change);



function change() {
    var num1 = Math.floor(Math.random() * 6 + 1);
var num2 = Math.floor(Math.random() * 6 + 1);
  if (num1 > num2) {
    refresh.innerHTML = "Player 1 Wins &#9996";
  } else if (num1 < num2) {
    refresh.innerHTML = "Player 2 Wins &#9996";
  } else {
    refresh.innerHTML = "It's a Draw &#129402";
  }
  document.querySelectorAll("img")[0].src = "./images/dice" + num1 + ".png";
  document.querySelectorAll("img")[1].src = "./images/dice" + num2 + ".png";
}
// var num1 = Math.floor(Math.random() * 6 + 1);
// var num2 = Math.floor(Math.random() * 6 + 1);
// document.querySelectorAll("img")[0].src = "./images/dice" + num1 + ".png";
// document.querySelectorAll("img")[1].src = "./images/dice" + num2 + ".png";
// if (num1 > num2) {
//   refresh.innerHTML = "Player 1 Wins";
// } else if (num1 < num2) {
//   refresh.innerHTML = "Player 2 Wins";
// } else {
//   refresh.innerHTML = "It's a Draw";
// }

