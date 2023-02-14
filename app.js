// Require prompt sync
 const prompt = require ('prompt-sync') (); 

// Create Parent class for Ship 
class Ship { 
    constructor (name,hull,firepower,accuracy){ 
        this.name = name 
        this.hull = hull 
        this.firepower = firepower 
        this.accuracy = accuracy 
        
        }
    }  
    attack(enemy); {
        if(Math.random() <alienShips.accuracy){
                console.log("You just got hit!")
        }else{
            console.log("Miss!")
        }
    }
    
    healthBar(); {
        if( hull > 0){
            return true
        }else{
            return false
        }
    }
    
// Creating USS Schwarz
const player = new Ship ("USS Shwarz", 20, 5, .7)
console.table(player);

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
console.table(alienShips);

/* ********************GAMEPLAY************************ **/
