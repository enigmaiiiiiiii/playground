# namespace

- 避免命名冲突
- 可以理解为module内部的module
- [similar concepts in Java](java-package.md)

mymath.ts

```ts
namespace MyMath {
  export const PI = 3.14;
  export function calculateCircumference(diameter: number) {
    return diameter * PI;
  }
  export class Rectangle {
    constructor(public width: number, public length: number) {}
    calcSize() {
      return this.width * this.length;
    }
  }
}
```

```ts
import {calculateCircumference} from './math/circle';
```

## alias

- import id = x.y.z; id可以理解为x.y.z的别名

```ts
namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}
import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
```