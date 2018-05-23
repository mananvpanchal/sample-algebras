const AddMonoid = function (n) {

	this.val = n;

	this.concat = function (m) {
		if (m instanceof AddMonoid) {
			return this._concat(this.val, m.val)
		} else {
			return this._concat(this.val, m);
		}
	}

	this._concat = function (n, m) {
		return new this.constructor(n + m);
	}

};

AddMonoid.empty = function () {
	return new this(0);
};

module.exports = AddMonoid;