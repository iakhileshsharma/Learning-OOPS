var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log("Hey, my name is ".concat(this.name));
    };
    return Player;
}());
var mario = new Player();
mario.name = "mario";
mario.health = 10;
mario.isInvincible = true;
var peach = new Player();
peach.name = "peach";
peach.health = 20;
peach.isInvincible = false;
mario.greet();
peach.greet();
