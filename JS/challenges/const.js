



class Mather {


    constructor(total) {
   

        this.total = total
        this.add = function (value) {
            total = total + value
         
        }

        this.multiply = function (value) {
            total = total * value

        }

        this.done = function () {
            return total
        }
    }
}





let myMath = new Mather(10);
myMath.add(5);
myMath.multiply(2);
let res = myMath.done()
console.log(res);

let meMath = new Mather(100);
meMath.add(13);
meMath.multiply(3);
let rest = meMath.done()
console.log(rest);

