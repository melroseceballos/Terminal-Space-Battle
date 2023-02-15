// Require prompt sync
 const prompt = require ('prompt-sync') (); 

// Create Parent class for Ship 
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    attack(enemy) {
        let hitChance = Math.random()
        if (hitChance <= this.accuracy) {
            enemy.hull -= this.firepower
            console.log("You have been hit!")
        } else {
            console.log("Miss!")
        }
    }
    healthBar() {
        if (this.hull < 0) {
            return false
        } else {
            return true
        }
    }
}


// Creating USS Schwarz
const player = new Ship ("USS Shwarz", 20, 5, .7)

// Defining values for Alien Ship
class AlienShipValues extends Ship {
    constructor(name) {
        super(name)
        this.hull = Math.floor((Math.random() * 4) + 3)
        this.firepower = Math.floor((Math.random() * 3) + 2)
        this.accuracy = Math.floor((Math.random() * 3) + 6) / 10
    }
} 
        
// Creating 6 alien spaceships
const alienShips = ["Boa", "Rafael", "Jonathan", "Derrick", "Gago", "Armand"]
for ( let i = 0; i < alienShips.length; i++){
    let nameOfShips = alienShips[i]
    alienShips[i] = new AlienShipValues(nameOfShips)
}
/* ********************GAMEPLAY************************ **/
console.log("Welcome to Space Battle");
console.log("Alien ships are taking over Earth - destroy them all!")
console.log("To begin, here are your stats: ")
console.table(player);
console.log("Here are the Alien ships stats: ");
console.table(alienShips);
console.table(alienShips);

        // Every time a round starts clear the console, display the round number, and ship health
        console.clear()
        let i = 0;
        console.log('ROUND ' + (i + 1))
        console.log('-------')
        console.log('Your opponent: ' + alienShips[i].name + ' (' + alienShips[i].hull + ' hull points)')
        console.log('You: USS Schwarzenegger ' + '(' + player.hull + ' hull points)\n')

        // Keep fighting the same alien ship while it and the player are both alive
        let continueGame = true;
        while (player.healthBar() && alienShips[i].healthBar() && continueGame) {

            // Ask the player if they want to attack or retreat
            let fireOrRetreat = prompt('--> Press "f" to fire, any other key to retreat:  ')

            // If the player attacks the alien, the alien attacks back (if alive)...
            if (fireOrRetreat.toLowerCase() === 'f') {
                console.log('')
                player.attack(alienShips[i])
                if (alienShips[i].healthBar()) {
                    alienShips[i].attack(player)
                }
                console.log('')

                // ...otherwise the game ends if the player retreats
            } else {
                continueGame = false
            }
        }
   
    console.log('GAME OVER')
