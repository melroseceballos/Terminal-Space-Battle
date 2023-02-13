class Aliens {
    constructor (hull,firepower,accuracy){
        this.hull = Math.floor(Math.random() * 4 + 3);
        this.firepower = Math.floor(Math.random () * 2 + 3 );
        this.accuracy = (Math.random()* .2 + .6);
        attack (damage);{
            if (Math.random() < alien[0].accuracy) {
                console.log('You have been hit!');
                damage.hull = damage.hull - this.firepower
        }else if (Math.random() > alien[0].accuracy) {
            console.log('Missed!');
    }
        }
        }
    }
    //Alien1
    class AlienOne {
        constructor (hull,firepower,accuracy){
            this.hull = Math.floor(Math.random() * 4 + 3);
            this.firepower = Math.floor(Math.random () * 2 + 3 );
            this.accuracy = (Math.random()* .2 + .6);
            attack (damage);{
                if (Math.random() < alien[0].accuracy) {
                    console.log('You have been hit!');
                    damage.hull = damage.hull - this.firepower
            }else if (Math.random() > alien[0].accuracy) {
                console.log('Missed!');
        }
        
            }
            }
        }
        //Alien-2
        class AlienTwo {
            constructor (hull,firepower,accuracy){
                this.hull = Math.floor(Math.random() * 4 + 3);
                this.firepower = Math.floor(Math.random () * 2 + 3 );
                this.accuracy = (Math.random()* .2 + .6);
                attack (damage);{
                    if (Math.random() < alien[0].accuracy) {
                        console.log('You have been hit!');
                        damage.hull = damage.hull - this.firepower
                }else if (Math.random() > alien[0].accuracy) {
                    console.log('Missed!');
            }
            
                }
                }
            }
            //Alien-3
            class AlienThree {
                constructor (hull,firepower,accuracy){
                    this.hull = Math.floor(Math.random() * 4 + 3);
                    this.firepower = Math.floor(Math.random () * 2 + 3 );
                    this.accuracy = (Math.random()* .2 + .6);
                    attack (damage);{
                        if (Math.random() < alien[0].accuracy) {
                            console.log('You have been hit!');
                            damage.hull = damage.hull - this.firepower
                    }else if (Math.random() > alien[0].accuracy) {
                        console.log('Missed!');
                }
                
                    }
                    }
                }
                //Alien-4
                class AlienFour {
                    constructor (hull,firepower,accuracy){
                        this.hull = Math.floor(Math.random() * 4 + 3);
                        this.firepower = Math.floor(Math.random () * 2 + 3 );
                        this.accuracy = (Math.random()* .2 + .6);
                        attack (damage);{
                            if (Math.random() < alien[0].accuracy) {
                                console.log('You have been hit!');
                                damage.hull = damage.hull - this.firepower
                        }else if (Math.random() > alien[0].accuracy) {
                            console.log('Missed!');
                    }
                    
                        }
                        }
                    }
                    //Alien-5
                    class AlienFive {
                        constructor (hull,firepower,accuracy){
                            this.hull = Math.floor(Math.random() * 4 + 3);
                            this.firepower = Math.floor(Math.random () * 2 + 3 );
                            this.accuracy = (Math.random()* .2 + .6);
                            attack (damage);{
                                if (Math.random() < alien[0].accuracy) {
                                    console.log('You have been hit!');
                            }else if (Math.random() > alien[0].accuracy) {
                                console.log('Missed!');
                        }
                        
                            }
                            }
                        }
                        //Alien-6
                        class AlienSix {
                            constructor (hull,firepower,accuracy){
                                this.hull = Math.floor(Math.random() * 4 + 3);
                                this.firepower = Math.floor(Math.random () * 2 + 3 );
                                this.accuracy = (Math.random()* .2 + .6);
                                attack (damage);{
                                    if (Math.random() < alien[0].accuracy) {
                                        console.log('You have been hit!');
                                        damage.hull = damage.hull - this.firepower
                                }else if (Math.random() > alien[0].accuracy) {
                                    console.log('Missed!');
                            }
                            
                                }
                                }
                            }
/** ***************************************************************************************************** */
    class USSSchwarz extends Alien {
        constructor (hull,firepower,accuracy, life);
            super(hull, firepower, accuracy,life)
            this.hull = 20;
            this.firepower = 5;
            this.accuracy = .7;
        }   life (meter){
            if (hull <= 0){
                console.log ("Your ship's Kablooey")
            } else {
                console.log ("You're still alive! " + this.hull)
            }
        }
/********************************************************************************************************* */     
   class Game (Alien, AlienOne, AlienTwo, AlienThree, AlienFour, AlienFive, AlienSix, USSSchwarz) {
while(USSSchwarz.hull > 0){
    USSSchwarz.attack(Alien, AlienOne,AlienTwo, AlienThree, AlienFour, AlienFive, AlienSix);
}
    while (Alien.hull, AlienOne.hull,AlienTwo.hull, AlienThree.hull, AlienFour.hull, AlienFive.hull, AlienSix.hull > 0){
        Alien.attack, AlienOne.attack, AlienTwo.attack, AlienThree.attack, AlienFour.attack, AlienFive.attack, AlienSix.attack(USSSchwarz)
    }
}
   
