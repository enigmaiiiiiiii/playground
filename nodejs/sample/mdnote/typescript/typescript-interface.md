# Interface

- can be use for **type annotation**
- can be **implement** by a class
- can be **extended** by another interface

- [Interface](#interface)
  - [Define an interface](#define-an-interface)
  - [Extend an interface](#extend-an-interface)
  - [Add properties to an interface](#add-properties-to-an-interface)
  - [Index Signatures](#index-signatures)


## Define an interface

```ts
interface Point {
    x: number;
    y: number;
}
```

## Extend an interface

```ts
interface Point3D extends Point {
    z: number;
}
```

## Add properties to an interface

```ts
interface Point {
    x: number;
    y: number;
}
interface Point {
    z: number;
}
```

## Index Signatures

- 索引的类型

index signature 用于**在以下这种情况**声明一个interface type

1. 确定一个类型的属性值的类型
2. 同时, 不确定属性的名称时

```ts
interface StringArray {
    [index: number]: string;
}
const myArray: StringArray = ["Bob", "Fred"];
const secondItem = myArray[1];  // secondItem is string
```

- this code means: an interface named StringArray has a index signature

index Signature 允许的类型: `string`, `number`, [symbol](JavaScript_Symbol.md), template string pattern or union of these types


