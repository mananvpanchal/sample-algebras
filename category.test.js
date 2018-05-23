const Category = require('./category');

const ab = new Category({ a: 'a', b: 'b' });
const bc = new Category({ a: 'b', b: 'c' });
const cd = new Category({ a: 'c', b: 'd' });
console.log(ab.compose(bc).compose(cd), ab.compose(bc.compose(cd)));
console.log(ab.compose(Category.id()), ab);
console.log(Category.id().compose(ab), ab);