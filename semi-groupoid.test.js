const SemiGroupoid = require('./semi-groupoid');

const ab = new SemiGroupoid({ a: 'a', b: 'b' });
const bc = new SemiGroupoid({ a: 'b', b: 'c' });
const cd = new SemiGroupoid({ a: 'c', b: 'd' });

console.log(ab.compose(bc).compose(cd), ab.compose(bc.compose(cd))); //associativity