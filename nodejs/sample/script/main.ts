function foo(key: string): any {
  console.log("evaluate:", key);
  return function(target: any, propertyKey: string) {
    console.log("call:", key);
    console.log("-----------------")
  }
}

@foo("Class Decorator")
class C {
  @foo("Static Method")
  static method(@foo("Static Method Parameter") x) {}

  @foo("Static Property")
  static prop?: number = 42;

  // @foo("Instance Property")
  // prop?: number;

  constructor(@foo("Constructor Parameter") x) {}

  // @foo("Instance Method")
  // method(@foo("instance mehtod Parameter") x) {}


}

function abc() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
