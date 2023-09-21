const cardCollection = [
  {
    name: "Fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "Fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardCollection.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");
const result = document.getElementById("result");
let cardsPicked = [];
let cardsPickedIds = [];
const cardsWon = [];
const page = document.querySelector(".page");

let wonContainer =
  "Congratulations Cadet You have Proven Your Self Worthy, The World Awaits You";

function createBoard() {
  for (let i = 0; i < cardCollection.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", cardFlip);
    grid.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOne = cardsPickedIds[0];
  const optionTwo = cardsPickedIds[1];

  if (optionOne == optionTwo) {
    cards[optionOne].setAttribute("src", "images/blank.png");
    cards[optionTwo].setAttribute("src", "images/blank.png");
    alert("You have clicked the the same image!");
  } else if (cardsPicked[0] == cardsPicked[1]) {
    cards[optionOne].setAttribute("src", "images/white.png");
    cards[optionTwo].setAttribute("src", "images/white.png");
    cards[optionOne].removeEventListener("click", cardFlip);
    cards[optionTwo].removeEventListener("click", cardFlip);
    alert("You have a match");
    cardsWon.push(cardsPicked);
  } else {
    cards[optionOne].setAttribute("src", "images/blank.png");
    cards[optionTwo].setAttribute("src", "images/blank.png");
    alert("Wrong try again");
  }
  result.textContent = cardsWon.length;
  cardsPicked = [];
  cardsPickedIds = [];

  if (cardsWon.length == cardCollection.length / 2) {
    page.innerHTML = wonContainer;
    page.classList.add("won");
  }
}

function cardFlip() {
  const cardId = this.getAttribute("data-id");
  cardsPicked.push(cardCollection[cardId].name);
  cardsPickedIds.push(cardId);
  this.setAttribute("src", cardCollection[cardId].img);
  if (cardsPicked.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
