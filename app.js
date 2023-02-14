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
// Creating USS Schwarz
const player = new Ship ("USS Shwarz", 20, 5, .7)

// setting values for Alien Ship
class AlienShip extends Ship {
     constuctor(hull,firepower,accuracy){ 
        this.hull = Math.floor(Math.random () * 4 + 3) 
        this.firepower = Math.floor(Math.random () * 3 + 2)
         this.accuracy = Math.floor(Math.random () * .6 + .2);
         } 
        }
        
