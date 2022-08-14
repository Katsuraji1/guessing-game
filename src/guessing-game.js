class GuessingGame {
    constructor() {}

    setRange(min, max) {
 this.min = min
 this.max= max
    }

    guess() {
        return this.current=Math.ceil((this.min+this.max)/2)
    }

    lower() {
        return this.max = this.current
    }

    greater() {
        return this.min = this.current
    }
}

module.exports = GuessingGame;
