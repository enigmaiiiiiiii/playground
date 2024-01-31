var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function foo(key) {
    console.log("evaluate:", key);
    return function (target, propertyKey) {
        console.log("call:", key);
        console.log("-----------------");
    };
}
var C = /** @class */ (function () {
    // @foo("Instance Property")
    // prop?: number;
    function C(x) {
    }
    C.method = function (x) { };
    C.prop = 42;
    __decorate([
        foo("Static Method"),
        __param(0, foo("Static Method Parameter")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], C, "method", null);
    __decorate([
        foo("Static Property"),
        __metadata("design:type", Number)
    ], C, "prop", void 0);
    C = __decorate([
        foo("Class Decorator"),
        __param(0, foo("Constructor Parameter")),
        __metadata("design:paramtypes", [Object])
    ], C);
    return C;
}());
//# sourceMappingURL=main.js.map