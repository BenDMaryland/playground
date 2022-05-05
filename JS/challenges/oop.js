class MathAttack {
     
    constructor(value) {

        this.value = value

        this.add = function (newValue) {
            value += newValue
        }

        this.final = function () {
            return value
        }



        this.multiply = ( (newValue) => {value*= newValue})

    }


}


let MatherBoy = new MathAttack(2)
MatherBoy.add(3)

MatherBoy.multiply(3)
console.log(MatherBoy.final())
