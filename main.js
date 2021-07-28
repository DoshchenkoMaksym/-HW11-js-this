// Task 3 

let counter = {

    count: 0,
    up() {
        ++this.count;
    },
    down() {
        --this.count;
    },
    showStep() {
        comsole.log(this.count);
    }
};

// Task 4

function Calculator () {

    this.sum = function(i){
        return function(j) {
            return i + j;
        };
    },

    this.multiply = function(i) {
        return function(j){
            return i * j;
        };
    },

    this.subtract = function(i) {
        return function(j){
            return i - j;
        };
    },

    this.divide = function(i) {
        return function(j){
            return i / j;
        };
    }
};

let calc = new Calculator();

console.log(calc.sum(4)(2));

console.log(calc.multiply(4)(2));

console.log(calc.subtract(4)(2));

console.log(calc.divide(4)(2));