class Animal {
    hunger : number
    health: number
    coordX: number
    coordY: number

    eat() {
        console.log("I'm eating");
    }
    sleep() {
        console.log("I'm sleeping");
    }
    move() {
        console.log("I'm moving");
    }
    makeNoise() {
        console.log("make noise");
    }
}

class Dog extends Animal{}
class Cat extends Animal{}

const dog = new Dog()
dog.sleep();    




