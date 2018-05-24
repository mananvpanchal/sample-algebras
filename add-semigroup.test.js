const AddSemigroup = require('./add-semigroup');

const a = new AddSemigroup(5);

console.log(a.concat(4).concat(1), a.concat(new AddSemigroup(4).concat(1))); //associativity