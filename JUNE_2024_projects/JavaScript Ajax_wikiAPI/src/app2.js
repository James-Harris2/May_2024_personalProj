const animals = ["lion", "monkey", "elephant", "zebra"];
let randomIndex = Math.floor(Math.random() * animals.length);
let secretAnimal = animals[randomIndex];

let guess = prompt("I'm thinking of an animal. Can you guess what it is?");

while (!guess || guess.toLowerCase() !== secretAnimal) {  // Check if guess is null or empty
    if (!guess) {
        alert("You didn't enter a guess. Try again!"); 
    } else {
        alert("Try again!");
    }
  guess = prompt("I'm thinking of an animal. Can you guess what it is?"); 
}

alert("You got it! It was a " + secretAnimal + "!"); 
