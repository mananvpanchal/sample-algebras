const SingleValueApplicative = require('./single-value-applicative');

const A = SingleValueApplicative;

const v = new SingleValueApplicative(4);

const f = function (x) {
    return x + 4;
}

const u = new SingleValueApplicative(function (x) {
    return x * -2;
});

console.log(v.ap(A.of(x => x)), v);
console.log(A.of(5).ap(A.of(f)), A.of(f(5)));
console.log(A.of(5).ap(u), u.ap(A.of(f => f(5))));