//card object array
var cards = [ 
  {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png"
   },
   {
       rank: "queen",
       suit: "diamonds",
       cardImage: "images/queen-of-diamonds.png"
   },
    {
       rank: "king",
       suit: "hearts",
       cardImage: "images/king-of-hearts.png"
   },
    {
       rank: "king",
       suit: "diamonds",
       cardImage: "images/king-of-diamonds.png"
   },
];


var cardsInPlay = [];


//checkForMatch function
//Called in flipCard function
//Set current cardImage as cardElement
//if not first card, if first equals second, then alert found match, else alert not a match
var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } 
   else {
      alert("Sorry, try again.");
    }
  }
}

//flipCard function
//Called in createBoard function
//Set cardId equal to current i value
//log the card rank of current card
//push card rank into cardsInPlay array
//checkForMatch with other cardsInPlay
//log cardImage and suit
//change back image to front image of current card
//call checkForMatch function
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}



//createBoard function
//for loop 0 to length of cards array
//create cardElement element
//set cardElement img to back of card
//set cardId to i
//if user clicks card, call flipCard function
//Add cardElement to game-board
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img'); 
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();