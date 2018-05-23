const SinlgeValueFunctor = function (n) {

    this.val = n;

    this.map = function(f) {
        return new SinlgeValueFunctor(f(this.val));
    };
};

module.exports = SinlgeValueFunctor;