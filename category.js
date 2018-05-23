const Category = function (n) {

    this.val = n;

    this.compose = function(m) {
        if(m instanceof Category) {
            return new Category({ 
                a: this.val.a ? this.val.a : m.val.a, 
                b: m.val.b ? m.val.b : this.val.b 
            });
        } else {
            return new Category({ 
                a: this.val.a ? this.val.a : m.a, 
                b: m.b ? m.b : this.val.b 
            });
        }
    }
}

Category.id = function() {
    return new Category({ a: null, b: null });
}

module.exports = Category;
