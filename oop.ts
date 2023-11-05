class Player {
 
    name: string;
    health: number;
    isInvincible: boolean;

    greet(){
        console.log(`Hey, my name is ${this.name}`);
    }
    
}

const mario = new Player();
mario.name = "mario";
mario.health = 10;
mario.isInvincible = true;

const peach = new Player();
peach.name = "peach";
peach.health = 20;
peach.isInvincible = false;


mario.greet();
peach.greet();

