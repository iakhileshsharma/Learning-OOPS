var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.setHealth = function (health) {
        if (health < 0) {
            console.log('You can not set the health below 0');
            return;
        }
        this.health = health;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    return Player;
}());
var mario = new Player();
mario.setHealth(10);
mario.setHealth(-7);
mario.setSpeed(1);
console.log("Mario has ".concat(mario.getHealth(), "/10 health"));
console.log("Mario has speed ".concat(mario.getSpeed()));
