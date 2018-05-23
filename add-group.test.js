const AddGroup = require('./add-group');

const a = new AddGroup(5);
console.log(a.concat(4).concat(1), a.concat(new AddGroup(4).concat(1)));
console.log(a.concat(AddGroup.empty()), a);
console.log(AddGroup.empty().concat(a), a);
console.log(a.concat(a.invert()), AddGroup.empty());
console.log(a.invert().concat(a), AddGroup.empty());