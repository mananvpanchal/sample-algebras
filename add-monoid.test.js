const AddMonoid = require('./add-monoid');

const M = AddMonoid;

const a = new AddMonoid(5);

console.log(a.concat(4).concat(1), a.concat(new AddMonoid(4).concat(1))); //associativity
console.log(a.concat(M.empty()), a); //right identity
console.log(M.empty().concat(a), a); //left identity