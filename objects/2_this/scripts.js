'use strict'

let calculator = {
    read: function() {
          this.a = +prompt('a?', 0);
          this.b = +prompt('b?', 0);
          },
    sum: function() {
         return (this.a + this.b);
         },
    mul: function(a,b) {
         return (this.a * this.b);
    },
};

// calculator.read();
// alert(calculator.mul())

//////////////////////////
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() {
      alert( this.step );
      return this;
    }
  };

//   ladder.up().down().up().up().showStep()