# type statement

- [type statement](#type-statement)
  - [Introduction](#introduction)
  - [Name Type Alias](#name-type-alias)
  - [Use To Extend Type](#use-to-extend-type)
  - [use with generics](#use-with-generics)
  - [Conditional Types](#conditional-types)
  - [Mapped Types](#mapped-types)

## Introduction

type语句在typescript有很多灵活的应用

- 用于**灵活创建**类型
- 定义type aliases
- 可以方便Union Types的使用
- 可用于对象, 也可以用于基本类型

## Name Type Alias

```ts
type ID = number | string;
type Point = {
    x: number;
    y: number;
}
```
- Point表示一个类型符号, 这个类型有x和y两个属性, 且类型都是number

## Use To Extend Type

可以用`&`来组合类型, 实现**extends**的效果

```ts
type Animal = {
    name: string;
}
type Bear = Animal & {
    honey: boolean;
}
```

## Use With Generics

- 可以把`custom<T>`理解为函数, T是这个函数的参数

```ts
type customType<T> = {
    name: string;
    data: T;
}
```

默认参数类型, `T = string`

```ts
type customType<T = string> = {
    name: string;
    data: T;
}
```

## Conditional Types

[Conditional Type](typescript-condition-type.md)

## Mapped Types


