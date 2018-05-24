const AddGroup = require('./add-group');

const G = AddGroup;

const a = new AddGroup(5);
console.log(a.concat(new AddGroup(4).concat(1)));
//console.log(a.concat(4).concat(1), a.concat(new AddGroup(4).concat(1))); //associativity
//console.log(a.concat(G.empty()), a); //right identity
//console.log(G.empty().concat(a), a); //left identity
//console.log(a.concat(a.invert()), G.empty()); //right inverse
//console.log(a.invert().concat(a), G.empty()); //left inverse