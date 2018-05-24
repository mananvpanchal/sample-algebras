const SingleValueChain = require('./single-value-chain');

const f = function (x) {
    return new SingleValueChain(x + 4);
};

const g = function (x) {
    return new SingleValueChain(x * -2);
};

const a = new SingleValueChain(function (x) {
    return x + 4;
});

const u = new SingleValueChain(function (x) {
    return x * -2;
});

const v = new SingleValueChain(9);

console.log(v.map(a => a), v); //identity
console.log(v.ap(u.ap(a.map(f => g => x => f(g(x))))), v.ap(u).ap(a)); //composition
console.log(v.chain(f).chain(g), v.chain(x => f(x).chain(g))); //associativity