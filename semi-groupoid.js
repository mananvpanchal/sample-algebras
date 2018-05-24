const SemiGroupoid = function (n) {

    this.val = n;

    this.compose = function(m) {
        if(m && m.hasOwnProperty('val')) {
            return new this.constructor({ 
                a: this.val.a ? this.val.a : m.val.a, 
                b: m.val.b ? m.val.b : this.val.b 
            });
        } else {
            return new this.constructor({ 
                a: this.val.a ? this.val.a : m.a, 
                b: m.b ? m.b : this.val.b 
            });
        }
    }
};

module.exports = SemiGroupoid;