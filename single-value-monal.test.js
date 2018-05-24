const SingleValueMonad = require('./single-value-monad');

const M = SingleValueMonad;

const v1 = new SingleValueMonad(4);

const f1 = function (x) {
    return x + 4;
}

const u1 = new SingleValueMonad(function (x) {
    return x * -2;
});

console.log(v1.ap(M.of(x => x)), v1); //identity
console.log(M.of(5).ap(M.of(f1)), M.of(f1(5))); //homomorphism
console.log(M.of(5).ap(u1), u1.ap(M.of(f => f(5)))); //interchange

const f = function (x) {
    return new SingleValueMonad(x + 4);
};

const g = function (x) {
    return new SingleValueMonad(x * -2);
};

const a = new SingleValueMonad(function (x) {
    return x + 4;
});

const u = new SingleValueMonad(function (x) {
    return x * -2;
});

const v = new SingleValueMonad(9);

console.log(v.map(a => a), v); //identity
console.log(v.ap(u.ap(a.map(f => g => x => f(g(x))))), v.ap(u).ap(a)); //composition
console.log(v.chain(f).chain(g), v.chain(x => f(x).chain(g))); //associativity