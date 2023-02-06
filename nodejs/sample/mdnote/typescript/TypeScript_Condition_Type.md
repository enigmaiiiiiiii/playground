# Condition type

## basic use

```ts
type example = Dog extends Animal ? number : string;
```

- if Dog extends Animal, then example is number, else example is string

## use with generic

combine with generic condition type can be very useful

- next code snippet main content include:
  - interface `IdLabel` and `NameLabel`
  - overload function `createLabel`

```ts
interface IdLabel {
    id: number;
}
interface NameLabel {
    name: string;
}
function createLabel(id: number): IdLabel;
function createlabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createlabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
}
```

这个函数可以接收`number`, `string`, `string | number`类型参数, 通过定义多个函数重载标志可以实现

然而想要增加新的类型, 定义的重载标志数量会呈指数级增加

Conditional Types可以解决这个问题

- 定义type alias

```ts
type NameOrId<T extends number | string> = T extends | number ? IdLabel : NameLabel;
```

- 把`NameOrId<T>`当做函数, 把T当做`NameOrId<T>`的参数传入
- 如果T是number, `NameOrId<T>` is `IdLabel`, 否则返回NameLabel

- 定义函数createLabel

```ts
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}
let a: NameLabel = createLabel("typescript");
```

## infer type within

```ts
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
```

- `Item` is the type of element in array
- if Type is Array, `Flatten<Type>` is alias of `Item`, else Type

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
```

- if satisfy the condition, `GetReturnType<Type>` is alias of function return type