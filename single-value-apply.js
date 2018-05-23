const SingleValueFunctor = require('./single-value-functor');

const SingleValueApply = function (n) {
    SingleValueFunctor.call(this, n);

    this.ap = function (m) {
        return new this.constructor(m.val(this.val));
    };
};

SingleValueApply.prototype.__proto__ = SingleValueFunctor.prototype;
SingleValueApply.__proto__ = SingleValueFunctor;

module.exports = SingleValueApply;