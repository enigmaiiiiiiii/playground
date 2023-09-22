
function fooA({ x = 2, y = 4}) {
  return x + y
}

function fooB({ x = 2, y = 4} = {}) {
  return x + y
}

function fooC(obj = {x: 1, y: 2}) {
  return obj.x + obj.y
}

console.log(fooA({}))
// console.log(fooA()) // error
console.log(fooB())
console.log('fooC', fooC())
