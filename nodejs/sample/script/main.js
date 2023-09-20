var Componenet = /** @class */ (function () {
    function Componenet() {
    }
    Object.defineProperty(Componenet.prototype, "name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Componenet;
}());
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var direction = Direction.Up;
console.log(direction); // UP
