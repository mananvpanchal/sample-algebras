const Monad = function (n) {

    this.val = n;

    this.getValue = function () {
        return this.val;
    }

    this._isSet = function (val) {
        return typeof val === 'object'
            && val.hasOwnProperty('hasNextValue')
            && val.hasOwnProperty('getNextValue')
            && val.hasOwnProperty('setNextValue')
            && val.hasOwnProperty('empty')
    }

    this.map = function (f) {
        if (this._isSet(this.val)) {
            const newVal = this.val.empty();
            while (this.val.hasNextValue()) {
                newVal.setNextValue(f(this.val.getNextValue()));
            }
            return new Monad(newVal);
        } else {
            return new Monad(f(this.val));
        }
    };

    this.ap = function (m) {
        if (this._isSet(this.val)) {
            const newVal = this.val.empty();
            while (this.val.hasNextValue()) {
                newVal.setNextValue(m.val(this.val.getNextValue()));
            }
            return new Monad(newVal);
        } else {
            return new Monad(m.val(this.val));
        }
    };

    this.chain = function (f) {
        if (this._isSet(this.val)) {
            const newVal = this.val.empty();
            while (this.val.hasNextValue()) {
                newVal.setNextValue(f(this.val.getNextValue()).getValue());
            }
            return new Monad(newVal);
        } else {
            return f(this.val);
        }
    };
};

Monad.of = function (n) {
    return new Monad(n);
}

module.exports = Monad;