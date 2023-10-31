var rec = {
    a: 1,
    b: 2,
    c: 3
};
var res = Object.keys(rec).filter(function (key) {
    console.log(rec[key]);
    return rec[key] >= 2;
});
console.log(res);
