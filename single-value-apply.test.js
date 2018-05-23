const SingleValueApply = require('./single-value-apply');

const a = new SingleValueApply(function (x) {
    return x + 4;
});

const u = new SingleValueApply(function (x) {
    return x * -2;
});

const v = new SingleValueApply(9);

console.log(v.ap(u.ap(a.map(f => g => x => f(g(x))))), v.ap(u).ap(a));