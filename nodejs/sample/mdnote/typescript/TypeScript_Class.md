# class

- [constructor](#constructor)
- [method](#method)
- [getters/setters](#getterssetters)
- [readonly](#readonly)
- [index signature](#index-signature)
- [inheritance](#inheritance)
- [Member Visibility](#member-visibility)
- [Generic Classes](#generic-classes)
- [about `this` in javascript](#about-this-in-javascript)
- [a function that loses its "this" context](#a-function-that-loses-its-this-context)
- [this as parameter type annotation](#this-as-parameter-type-annotation)
- [Class Expressions](#class-expressions)
- [Abstract Classes And Members](#abstract-classes-and-members)

## constructor

## method

## getters/setters

```ts
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let c = new C();
c.length = 10;
console.log(c.length); // 10
```

> only `get` no `set`, property is auto readonly

可以设置多种类型的getter/setter

```ts
class Thing() {
    _size = 0;
    get size() {
        return this._size;
    }
    set size(value: string | number | boolean) {
        this._size = num;
    }
}
```
## readonly

- 不能在constructor之外修改

```ts
class Greeter {
    readonly name: string;
}
```

## index signature

```ts
class MyClass {
    [index: number]: string;
    check(index: number) {
        return this[index] as boolean;
    }

}
```

## inheritance

implements语句

- 检查一个class是否满足一个interface

```ts
interface Pingable {
    ping(): void;
}
class Sonar implements Pingable {
    ping() {
        console.log("ping");
    }
}
```

> implements只是检查class是否可以被看作interface

extends语句

- 派生类拥有基类的所有成员, 并定义额外成员

```ts
```

fields Declarations

- 在派生类中使用declare关键字, 可以声明一个更精确的类型
- 不会对runtime产生影响
- do not have effect on the generated JavaScript code
- only ensures the types are correct

```ts
class AnimalHouse {
  resident: Animal;
}

class DogHouse extends AnimalHouse {
  declare resident: Dog;
}
```

Inheriting built-in types

- 根据ECMAScript 6标准, 调整了Error, Array时的prototype chain
- 在ECMAScript 5中没有保证new.target, 所以继承Error, Array时, constructor可能会返回undifined

## Member Visibility

- 用户控制哪些成员可以被外部访问
  - public: 默认, 可以被外部访问
  - protected: 只能在**类本身内部**或**派生类内部**访问
  - private: 只能在**类本身内部**访问

> 访问控制仅限于**语法检查**时, 也就是说JavaScript代码仍可以访问任何成员

可以在派生类中expose protected member in Base

```ts
class Base {
    protected m = 10;
}
class Derived extends Base {
    m = 15;  // public
}
```

## Generic Classes

```ts
class Box<Type> {
    contents: Type;
    constructor(value: Type) {
        this.contents = value;
    }
}
```

## about `this` in javascript

[`this` in javascript](JavaScript_This.md)

## a function that loses its "this" context

arrow function

```ts
class MyClass {
    name = "MyClass";
    getName = () =>  {return this.name;}
}
const c = new MyClass();
const g = c.getName;
console.log(g()); // "MyClass"
```

this as parameter

- this参数在typescript中用于检查方法的调用有正确的上下文
- 编译后删除

```ts
class MyClass {
    name = "MyClass";
    getName(this:MyClass) {
        return this.name;
    }
}
const c = new MyClass();
c.getName();  // this 被正确推断为 c
const g = c.getName;
console.log(g()); // undefined
```

**arrow function** compare to **this as parameter**

- for arrow function
  - 保证总是能够被正确调用
  - 因为class的每个实例都会有一个函数的复制, 会消耗更多内存
  - 不能使用super调用
- for this as parameter
  - this是绑定到调用的对象上的
  - 每个class只有一个函数定义, 而不是每个实例都有一个函数定义
  - 可以通过super调用

## this as parameter type annotation

```ts
class Box{
    content: string = "";
    sameAs(other: this) {
        return other.content === this.content;
    }
}
```

- different with `other: Box`, `other: this` in derived class will be interpreted as `other: SubBox` 

## Class Expressions

```ts
const someClass = class {
    constructor(public name: string) {}
}
const m = new someClass("hello");
```

## Abstract Classes And Members

