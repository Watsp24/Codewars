// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3c') -> return 'diamonds'
// ('3c') -> return 'hearts'
// ('3♠') -> return 'spades'


function defineSuit(card) {
    // good luck
    if(card.includes( '♣') ) return 'clubs'
    if(card.includes( '♦') ) return 'diamonds'
    if(card.includes( '♠') ) return 'spades'
    if(card.includes( '♥') ) return 'hearts'
  }