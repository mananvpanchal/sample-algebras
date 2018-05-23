const SingleValueApplicative = require('./single-value-applicative');

const A = SingleValueApplicative;

const v = new SingleValueApplicative(4);

const f = function (x) {
    return x + 4;
}

const u = new SingleValueApplicative(function (x) {
    return x * -2;
});

console.log(v.ap(A.of(x => x)), v); //identity
console.log(A.of(5).ap(A.of(f)), A.of(f(5))); //homomorphism
console.log(A.of(5).ap(u), u.ap(A.of(f => f(5)))); //interchange