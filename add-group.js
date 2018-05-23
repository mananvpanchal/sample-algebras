const AddMonoid = require('./add-monoid');

const AddGroup = function (n) {
    AddMonoid.call(this, n);

    this.invert = function () {
        return new AddGroup(-1 * this.val);
    }
}

AddGroup.prototype.__proto__ = AddMonoid.prototype;
AddGroup.__proto__ = AddMonoid;

module.exports = AddGroup;