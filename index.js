var randomNumer1 = Math.floor(Math.random() * 6 + 1);
var randomNumer2 = Math.floor(Math.random() * 6 + 1);

// document.querySelector(".dice img1").attributes

switch (randomNumer1) {
    case 1:
      document.querySelector(".dice .img1").src = "./images/dice1.png";
      break;
    case 2:
      document.querySelector(".dice .img1").src = "./images/dice2.png";
      break;
    case 3:
      document.querySelector(".dice .img1").src = "./images/dice3.png";
      break;
    case 4:
      document.querySelector(".dice .img1").src = "./images/dice4.png";
      break;
    case 5:
      document.querySelector(".dice .img1").src = "./images/dice5.png";
      break;
    case 6:
      document.querySelector(".dice .img1").src = "./images/dice6.png";
      break;
    default:
      alert("Unexpected thing happened with dice 1");
  }

  

  switch (randomNumer2) {
    case 1:
      document.querySelector(".dice .img2").src = "./images/dice1.png";
      break;
    case 2:
      document.querySelector(".dice .img2").src = "./images/dice2.png";
      break;
    case 3:
      document.querySelector(".dice .img2").src = "./images/dice3.png";
      break;
    case 4:
      document.querySelector(".dice .img2").src = "./images/dice4.png";
      break;
    case 5:
      document.querySelector(".dice .img2").src = "./images/dice5.png";
      break;
    case 6:
      document.querySelector(".dice .img2").src = "./images/dice6.png";
      break;
    default:
      alert("Unexpected thing happened with dice 2");
  }


if(randomNumer1 > randomNumer2) {
    document.querySelector(".container > h1").textContent = "🚩Pradeep Wins!";
} else if(randomNumer1 == randomNumer2){
    document.querySelector(".container > h1").textContent = "Draw :(";
} else {
    document.querySelector(".container > h1").textContent = "🚩Computer Wins!";
}
