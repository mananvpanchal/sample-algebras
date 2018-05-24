const AddSemigroup = require('./add-semigroup');

const AddMonoid = function (n) {
	AddSemigroup.call(this, n);
};

AddMonoid.empty = function () {
	return new this(0);
};

AddMonoid.prototype.__proto__ = AddSemigroup.prototype;
AddMonoid.__proto__ = AddSemigroup;

module.exports = AddMonoid;