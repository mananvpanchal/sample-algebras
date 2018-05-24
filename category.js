const SemiGroupoid = require('./semi-groupoid');

const Category = function (n) {
    SemiGroupoid.call(this, n);
}

Category.id = function() {
    return new Category({ a: null, b: null });
}

Category.prototype.__proto__ = {...SemiGroupoid.prototype};
Category.__proto__ = {...SemiGroupoid};

module.exports = Category;
