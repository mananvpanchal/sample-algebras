const AddSemigroup = require('./add-semigroup');

const AddMonoid = function (n) {
	AddSemigroup.call(this, n);
};

AddMonoid.empty = function () {
	return new this(0);
};

console.log(AddMonoid, AddSemigroup);

AddMonoid.prototype.__proto__ = {...AddSemigroup.prototype};
AddMonoid.__proto__ = {...AddSemigroup};

//AddMonoid.prototype.__proto__ = AddSemigroup.prototype;
//AddMonoid.__proto__ = AddSemigroup;

console.log(AddMonoid, AddSemigroup);
module.exports = AddMonoid;