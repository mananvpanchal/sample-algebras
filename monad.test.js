const Monad = require('./monad');

const Values = function (val) {
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
        return new Values([]);
    }
};

console.log(new Monad(new Values([1, 2, 3, 4, 5])).map(function(x) { return x + 1}).getValue());
console.log(new Monad(new Values([1, 2, 3, 4, 5])).ap(new Monad(function (x) { return x * 3 })).getValue());
console.log(new Monad(new Values([1, 2, 3, 4, 5])).chain(function (x) { return new Monad(x * -2) }).getValue());

console.log(new Monad(3).map(function(x) { return x + 1}).getValue());
console.log(new Monad(4).ap(new Monad(function (x) { return x * 3 })).getValue());
console.log(new Monad(5).chain(function (x) { return new Monad(x * -2) }).getValue());

console.log(new Monad(new Values([1, 2, 3, 4, 5]))
    .chain(x => new Monad(x + 5)
        .chain(x => new Monad(x * 2)
            .chain(x => new Monad(x / 2)))).getValue());