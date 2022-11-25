class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.fx = () => {
            console.log('this function fx');
        }
    }

    // fa() {
    //     console.log('this function fa');
    // }

    static fa() {
        console.log('this function static fa');
    }

    fb() {
        console.log('this function fb');
    }
}

class One extends Human {

    constructor() {
        super();
        this.job = 'engineer';
    }
    fo() {
        console.log('inheritance function fo');
        super.fb();
    }
}

let h = new Human('John', 20);
let some = new One();
some.fo();