class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y)
  }
}

const p = <Point>new Proxy(Object.create(null), {
  get: (target: any, key: PropertyKey) => {
    if (key in target) {
      return target[key]
    }
    if (key == "x") {
      return 5
    }
  },
})

console.log(p.x) // 8
