function* generator(i) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

const GeneratorFunction = function* () { }.constructor;
const g = new GeneratorFunction("a", "yield  a * 2");