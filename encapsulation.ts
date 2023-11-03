// learning encapsulation(OOPS concept)

class Player { // creating a superclass of name Player, so we can encapsulate all the variables and methods in it.
    private health : number;
    private speed: number;

    setHealth(health: number){
        if(health<0){
            console.log('You can not set the health below 0');
            return;
        }
        this.health = health;
    }

    getHealth(){
        return this.health;
    }

    setSpeed(speed: number){
        this.speed = speed;
    }
    getSpeed(){
        return this.speed;
    }
}

const mario = new Player() // creating new Player named mario
mario.setHealth(10);       
mario.setHealth(-7);  
mario.setSpeed(1);

console.log(`Mario has ${mario.getHealth()}/10 health`);
console.log(`Mario has speed ${mario.getSpeed()}`);



