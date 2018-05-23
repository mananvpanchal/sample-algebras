const SinlgeValueFunctor = function (n) {

    this.val = n;

    this.map = function(f) {
        return new this.constructor(f(this.val));
    };
};

module.exports = SinlgeValueFunctor;