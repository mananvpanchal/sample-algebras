const SingleValueFunctor = require('./single-value-functor');

const SingleValueApply = function (n) {
    SingleValueFunctor.call(this, n);

    this.ap = function (m) {
        return new this.constructor(m.val(this.val));
    };
};
console.log(SingleValueFunctor);
//SingleValueApply.prototype.__proto__ = SingleValueFunctor.prototype;
//SingleValueApply.__proto__ = SingleValueFunctor;

SingleValueApply.prototype.__proto__ = {...SingleValueFunctor.prototype};
SingleValueApply.__proto__ = {...SingleValueFunctor};
module.exports = SingleValueApply;

console.log(SingleValueApply, SingleValueApply.prototype.__proto__, SingleValueApply.__proto__);