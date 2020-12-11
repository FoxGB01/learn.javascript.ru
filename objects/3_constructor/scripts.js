let obj = {}; //create object

function A() {
    return obj;
};
                //return this object
function B() {
    return obj;
};

// alert(new A() == new B()); 

/////////////////////
function Calculator() {
    this.read = function() {        
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
        };
    this.sum = function() {
        return (this.a + this.b);
        };
    this.mul = function(a,b) {
        return (this.a * this.b);
    };
};

let calculator = new Calculator();
// calculator.read();