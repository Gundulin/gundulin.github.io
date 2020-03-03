let app = new Vue({
    el: '#app',

    data: {
        sides: '',
        numDice: '',
        result: []
    },
    methods: {
        rollDice() {
            if (this.numDice == '' || this.numDice == 1) {
                result = Math.floor((Math.random() * this.sides) + 1);
                this.result.push(result);
            }
            else {
                // result = []
                for (i = 0; i < this.numDice; i++) {
                    this.result.push(Math.floor((Math.random() * this.sides) + 1));
                }
                // this.results = result;
            }
        }
    }
})