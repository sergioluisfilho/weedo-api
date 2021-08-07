const { uuid } = require('uuidv4');

class Purchase {
    constructor(items, quantity, amount, address){
        this.items = items;
        this.quantity = quantity;
        this.amount = amount;
        this.address = address;
    }

    generateID(){
        this.id = uuid();
    }
}

module.exports = Purchase;

