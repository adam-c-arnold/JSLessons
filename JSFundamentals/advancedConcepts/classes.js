class Car {
    #vin;
    constructor(make, model, year, miles, color, vin) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.color = color;
        this.#vin = vin;

    }

    get vin() {
        return this.#vin;
    }
    set vin(value) {
        this.#vin = value;
    }
    
}

let myCar = new Car(`Toyota`, `Camry`, `2011`, 105620, `blue`, 98751578);

console.log(myCar.vin);