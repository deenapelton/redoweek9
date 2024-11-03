//I'm retrying my code again
console.log("Let's Play War!");



     class card{
        constructor(suit, type, value){
             this.suit = suit;
            this.type = type;
            this.value = value;
         }
     describe(){
        this.value;
    console.log(this.type + this.suit);
     }  
    
     }


let twoDiamonds = new card("Diamonds ♦", "2 of ", 2);
let threeDiamonds = new card("Diamonds ♦", "3 of ", 3);
let fourDiamonds = new card("Diamonds ♦", "4 of ", 4);
let fiveDiamonds = new card("Diamonds ♦", "5 of ", 5);
let sixDiamonds = new card("Diamonds ♦", "6 of ", 6);
let sevenDiamonds = new card("Diamonds ♦", "7 of ", 7);
let eightDiamonds = new card("Diamonds ♦", "8 of ", 8);
let nineDiamonds = new card("Diamonds ♦", "9 of ", 9);
let tenDiamonds = new card("Diamonds ♦", "10 of ", 10);
let jackDiamonds = new card("Diamonds ♦", "Jack of ", 11);
let queenDiamonds = new card("Diamonds ♦", "Queen of ", 12);
let kingDiamonds = new card("Diamonds ♦", "King of ", 13);
let aceDiamonds = new card("Diamonds ♦", "Ace of ", 1);

let twoHearts = new card("Hearts ♥", "2 of ", 2);
let threeHearts = new card("Hearts ♥", "3 of ", 3);
let fourHearts = new card("Hearts ♥", "4 of ", 4);
let fiveHearts = new card("Hearts ♥", "5 of ", 5);
let sixHearts = new card("Hearts ♥", "6 of ", 6);
let sevenHearts = new card("Hearts ♥", "7 of ", 7);
let eightHearts = new card("Hearts ♥", "8 of ", 8);
let nineHearts = new card("Hearts ♥", "9 of ", 9);
let tenHearts = new card("Hearts ♥", "10 of ", 10);
let jackHearts = new card("Hearts ♥", "Jack of ", 11);
let queeenHearts = new card("Hearts ♥", "Queen of ", 12);
let kingHearts = new card("Hearts ♥", "King of ", 13);
let aceHearts = new card("Hearts ♥", "Ace of ", 1);

let twoClubs = new card("Clubs ♣", "2 of ", 2);
let threeClubs = new card("Clubs ♣", "3 of ", 3);
let fourClubs = new card("Clubs ♣", "4 of ", 4);
let fiveClubs = new card("Clubs ♣", "5 of ", 5);
let sixClubs = new card("Clubs ♣", "6 of ", 6);
let sevenClubs = new card("Clubs ♣", "7 of ", 7);
let eightClubs = new card("Clubs ♣", "8 of ", 8);
let nineClubs = new card("Clubs ♣", "9 of ", 9);
let tenClubs = new card("Clubs ♣", "10 of ", 10);
let jackClubs = new card("Clubs ♣", "Jack of ", 11);
let queenClubs = new card("Clubs ♣", "Queen of ", 12);
let kingClubs = new card("Clubs ♣", "King of ", 13);
let aceClubs = new card("Clubs ♣", "Ace of ", 1);

let twoSpades = new card("Spades♠", "2 of ", 2);
let threeSpades = new card("Spades♠", "3 of ", 3);
let fourSpades = new card("Spades♠", "4 of ", 4);
let fiveSpades = new card("Spades♠", "5 of ", 5);
let sixSpades = new card("Spades♠", "6 of ", 6);
let sevenSpades = new card("Spades♠", "7 of ", 7);
let eightSpades = new card("Spades♠", "8 of ", 8);
let nineSpades = new card("Spades♠", "9 of ", 9);
let tenSpades = new card("Spades♠", "10 of ", 10);
let jackSpades = new card("Spades♠", "Jack of ", 11);
let queenSpades = new card("Spades♠", "Queen of ", 12);
let kingSpades = new card("Spades♠", "King of ", 13);
let aceSpades = new card("Spades♠", "Ace of ", 1);
let deck =  [twoDiamonds,twoClubs,twoHearts,twoSpades,
    threeClubs,threeDiamonds,threeHearts,threeSpades,
    fourClubs,fourDiamonds,fourHearts,fourSpades,
    fiveClubs, fiveDiamonds, fiveHearts, fiveSpades,
    sixClubs,sixDiamonds,sixHearts,sixSpades,
    sevenClubs,sevenDiamonds,sevenHearts,sevenSpades,
    eightClubs, eightDiamonds, eightHearts, eightSpades,
    nineClubs, nineDiamonds, nineHearts, nineSpades,
    tenClubs, tenDiamonds, tenHearts, tenSpades,
    jackClubs, jackDiamonds, jackHearts, jackSpades,
    queenClubs, queeenHearts,queenDiamonds,queenSpades,
    kingClubs, kingDiamonds, kingHearts, kingSpades,
    aceClubs, aceDiamonds, aceHearts, aceSpades];

    function getRandomCard() {
        const randomIndex = Math.floor(Math.random() * deck.length);
         return  (deck[randomIndex]);
         
    
      }
    
      
    
      class player{
            constructor(name, score){
                this.name = name;
                this.score = score;
            }
        addPoint(){
            console.log(`${this.name} score is ${this.score + 1}`)
        }
      }
     let mark = new player("Mark", 0);
     let madison = new player("Madison", 0); 
function marksTurn(){
    console.log("Mark's card is");
}
function madisonsTurn(){
    console.log("Madison's card is");
}
for (let i = 1; i<=26; i++){
    console.log('Lets Play');
    console.log("Round" + " " + i);
    marksTurn();   
 let marksHand = getRandomCard().describe();
madisonsTurn();
 let madisonsHand = getRandomCard().describe();
if()
}
