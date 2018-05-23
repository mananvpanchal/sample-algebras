const SingleValueFunctor = require('./single-value-functor');

const functor = new SingleValueFunctor(4);
console.log(functor.map(a => a), functor);

const f = function(x) {
    return -1 * x;
}

const g = function(x) {
    return x + 2;
}

console.log(functor.map(x => f(g(x))), functor.map(g).map(f));