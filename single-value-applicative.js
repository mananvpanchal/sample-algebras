const SingleValueApply = require('./single-value-apply');

const SingleValueApplicative = function (n) {
    SingleValueApply.call(this, n);
};

SingleValueApplicative.of = function (n) {
    return new this(n);
}

SingleValueApplicative.prototype.__proto__ = SingleValueApply.prototype;
SingleValueApplicative.__proto__ = SingleValueApply;

module.exports = SingleValueApplicative;