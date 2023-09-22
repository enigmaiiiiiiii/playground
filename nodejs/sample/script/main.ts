type Point = {
  x: number;
  y: number;
}

type P = keyof Point;

let foo: P = 'x';

console.log(foo);
