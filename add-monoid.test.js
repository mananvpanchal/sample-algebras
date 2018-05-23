const AddMonoid = require('./add-monoid');

const a = new AddMonoid(5);
console.log(a.concat(4).concat(1), a.concat(new AddMonoid(4).concat(1)));
console.log(a.concat(AddMonoid.empty()), a);
console.log(AddMonoid.empty().concat(a), a);