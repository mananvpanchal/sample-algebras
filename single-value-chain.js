const SingleValueApply = require('./single-value-apply');

const SingleValueChain = function (n) {

    SingleValueApply.call(this, n);

    this.chain = function (f) {
        return f(this.val);
    };
};

SingleValueChain.prototype.__proto__ = SingleValueApply.prototype;
SingleValueChain.__proto__ = SingleValueApply;

module.exports = SingleValueChain;