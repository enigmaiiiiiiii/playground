var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var p = new Proxy(Object.create(null), {
    get: function (target, key) {
        if (key in target) {
            return target[key];
        }
        if (key == "x") {
            return 5;
        }
    },
});
console.log(p.x); // 8
//# sourceMappingURL=main.js.map