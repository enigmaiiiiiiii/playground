
function fx(x, y, z) {
    console.log(x, y, z)
}
const numbers = [1, 2, 3];
const str = "hello";

fx(...numbers);  // 1, 2, 3
fx(...str);      // h, e, l

