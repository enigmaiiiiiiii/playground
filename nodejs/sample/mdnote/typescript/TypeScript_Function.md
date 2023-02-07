# Function

- [Function](#function)
  - [function type expressions](#function-type-expressions)
  - [Optional Parameters](#optional-parameters)
  - [Function Overload](#function-overload)
  - [Generic Functions](#generic-functions)
  - [Callable Signatures](#callable-signatures)
  - [Construct Signatures](#construct-signatures)
  - [other type working with function](#other-type-working-with-function)

## function type expressions

to describe a function **type**

```ts
function greet(fn: (a: string) => void) {
    fn("Hello, World");
}
```

- `(a: string) => void`: a function that takes a string and returns nothing

name a function type

```ts
type GreetFunction = (a: string) => void;
function greet(fn: GreetFunction) { fn("Hello, World"); }
```

more about function type [Compatibility](TypeScript_Type.md#type-compatibility)

## Optional Parameters

`function f(param_name?: type)`表示可选参数

```ts
function f(x?: number) {
    // ...
}
f(); // ok
f(1); // ok
```

## Function Overload

> here is a overload signature
> ```ts
> function greet(name: string): string;
> ```

- 通过编写多个overload signatures, **紧接着**编写函数的实现, 可以使一个函数通过不同的方式调用
- 一个函数可以有多个overload signatures, 但是只能有一个实现

```ts
function fx(x: number): number;
function fx(x: number, y: number): number;
function fx(x: number, y?: number): number {
  if (y) {
    return x + y;
  } else {
    return x;
  }
}
```

- 函数的实现必须**兼容** `overload signatures`

```ts
function fx(x: number): void;
function fx(x: boolean): void;
function fx(x: number | boolean) {
  if (typeof x === "number") {
    console.log("number");
  } else {
    console.log("boolean");
  }
}
fx(1);
fx(true);
```

## Generic Functions

```ts
function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}
```

- 通过`<Type>`声明, 可以**将返回值和参数类型联系在一起**
- 这样声明的泛型函数可以接受任意类型的参数
- 调用时不需要指定泛型函数的参数类型, 会自动推断

**限制**泛型函数的参数类型

```ts
finction longest<Type extends {length: number}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
```
- **类型参数**限制为: 包含`.length`属性, 并且属性类型为`number`

## Callable Signatures

1. an interface with call signatures
2. an instance has this this interface as type annotation
3. the instance can be called as a function

```ts
type OneCallable = {
  x: string;
  (x: number): boolean;  // Callable Signatures
};
function doSomething(fn: OneCallable) {
  console.log(fn.x + " returned " + fn(6));
}
```
## Construct Signatures

1. an interface with construct signatures
2. an instance has this this interface as type annotation
3. the instance can be invoked with `new` operator

```ts
type SomeConstructor = {
    new (s: string): SomeObject;
}
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
```

## other type working with function

void

object

unknown

- similar to `any`, but **access to any members are illegal**

```ts
function f1(a: unknown, b: any) {
  a.foo(); // error
  b.foo(); // ok
}
```

never

- function never return

```ts
function fail(msg: string): never {
    throw new Error(msg);
}
```

Function
