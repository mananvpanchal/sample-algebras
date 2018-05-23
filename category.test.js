const Category = require('./category');

const C = Category;

const ab = new Category({ a: 'a', b: 'b' });
const bc = new Category({ a: 'b', b: 'c' });
const cd = new Category({ a: 'c', b: 'd' });

console.log(ab.compose(bc).compose(cd), ab.compose(bc.compose(cd))); //associativity
console.log(ab.compose(C.id()), ab); //right identity
console.log(C.id().compose(ab), ab); //left identity