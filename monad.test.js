const Monad = require('./monad');

const Set = function (val) {
    this.val = val;

    this.index = 0;

    this.hasNextValue = function () {
        return this.index < this.val.length;
    };

    this.getNextValue = function () {
        const v = this.val[this.index];
        this.index = this.index + 1;
        return v;
    };

    this.setNextValue = function (v) {
        this.val.push(v);
    }

    this.empty = function () {
        return new Set([]);
    }
};

console.log(Monad.of(new Set([1, 2, 3, 4, 5])).map(function (x) { return x + 1 }).getValue());
console.log(Monad.of(new Set([1, 2, 3, 4, 5])).ap(Monad.of(function (x) { return x * 3 })).getValue());
console.log(Monad.of(new Set([1, 2, 3, 4, 5])).chain(function (x) { return Monad.of(x * -2) }).getValue());

console.log(Monad.of(3).map(function (x) { return x + 1 }).getValue());
console.log(Monad.of(4).ap(Monad.of(function (x) { return x * 3 })).getValue());
console.log(Monad.of(5).chain(function (x) { return Monad.of(x * -2) }).getValue());

console.log(
    Monad.of(new Set([1, 2, 3, 4, 5]))
        .chain(x => Monad.of(x + 5)
            .chain(x => Monad.of(x * 2)
                .chain(x => Monad.of(x / 2))
            )
        ).getValue());