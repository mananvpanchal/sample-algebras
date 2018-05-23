const SingleValueFunctor = require('./single-value-functor');

const u = new SingleValueFunctor(4);

const f = function(x) {
    return -1 * x;
}

const g = function(x) {
    return x + 2;
}

console.log(u.map(a => a), u); //identity
console.log(u.map(x => f(g(x))), u.map(g).map(f)); //composition