const SingleValueApplicative = require('./single-value-applicative');
const SingleValueChain = require('./single-value-chain');

const SingleValueMonad = function (n) {
    SingleValueChain.call(this, n);
};

SingleValueMonad.prototype.__proto__ = SingleValueChain.prototype;
SingleValueMonad.__proto__ = SingleValueApplicative;

module.exports = SingleValueMonad;