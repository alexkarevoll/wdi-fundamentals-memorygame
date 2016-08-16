console.log("JS file is connected to HTML! Woo!")

//sets the score to zero
var score = 0;
// sets possible card attributes
var cards = ["queen", "queen", "king", "king"];
// creates an empty set of cards in play to be filled later
var cardsInPlay = [];
//borrow the Fisher-Yates function to shuffle the cards
var shuffle = function(cards){
	var m = cards.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = cards[m];
		cards[m] = cards[i];
		cards[i] = t;
	}
	return cards;
};
//shuffles the cards
shuffle(cards);

//function to create a game board
var createBoard = function() {
	var gameBoard = document.getElementById('game-board');
//creates cards in game board
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		//links the cards link to the css
		newCard.className = 'card';
		//gives cards attributes of queen and king
		newCard.setAttribute ('data-card', cards[i]);
		//creates listener on click to check if we need to look for
		//a match because a second card has been clicked
		newCard.addEventListener('click', isTwoCards);
		// adds new card to game board
		gameBoard.appendChild(newCard);
	};
};

// Defines game logic for matching
// currently matches if same card is clicked twice
var isMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		setTimeout(function(){ alert("You found a match!"); }, 200);
		}
	else {
		setTimeout(function(){ alert("Sorry, try again."); }, 200);
	};
};

//puts cards in play. when there are two, runs isMatch
var isTwoCards = function(){
	//puts a card in cardsInPlay with its king/queen attribute
	cardsInPlay.push(this.getAttribute('data-card'));
	//flips the card to an image based on its attribute
	if(this.getAttribute('data-card') === "king"){
		this.innerHTML = '<img src="king.png" alt="King" />';
	}
	else if (this.getAttribute('data-card') === "queen"){
		this.innerHTML = '<img src="queen.jpg" alt="Queen" />';
	}
	// if there are two cards look for a match
	if (cardsInPlay.length === 2) {
		//puts cardsInPlay into isMatch
		isMatch(cardsInPlay);
		//clears the board
		cardsInPlay = [];
	}
};

// calls function and makes board
createBoard();

//logic for reset button
//currently just refreshes the page
var resetBoard = function (){
	location.reload();
};
