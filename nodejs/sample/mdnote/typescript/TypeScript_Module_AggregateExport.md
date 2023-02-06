# export all from one module

## code

circle.ts

```ts
export const PI = 3.14;
export function calculateCircumference(diameter: number) {
  return diameter * PI;
}
```

rectangle.ts

```ts
export class Rectangle {
  constructor(public width: number, public length: number) {}
  calcSize() {
    return this.width * this.length;
  }
}
```

**aggregate.ts**

```ts
export * from './circle';
export * from './rectangle';
```

main.ts

```ts
import * as MyMath from './aggregate';

let myRectangle = new MyMath.Rectangle(5, 2);

console.log(MyMath.PI);  // 3.14
console.log(myRectangle.calcSize());  // 10
```

## instruction

- key file **aggregate.ts** export all exports from circle.ts and rectangle.ts
- many files can import from **aggregate.ts** to use all exports
