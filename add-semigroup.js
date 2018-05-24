const AddSemigroup = function (n) {

    this.val = n;

	this.concat = function (m) {
		if (typeof m === 'number') {
			return this._concat(this.val, m);
		} else {
			return this._concat(this.val, m.val);
		}
	}

	this._concat = function (n, m) {
		return new this.constructor(n + m);
	}
}

module.exports = AddSemigroup;