class Point {

    x: number;
    y: string;

    constructor(x: number, y: string) {
        this.x = x;
        this.y = y;
    }
}

interface User {
    name: string;
    age: number;
}

class MyClass {

    [s: string]: boolean | ((s: string) => boolean);

    check(s: string) {
        return this[s] as boolean;
    }
}