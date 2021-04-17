class Car
{
    constructor(options)
    {
        this.doors = options.doors || 1
        this.color = options.color || 'white'
        this.state = options.state || 'state 1'
    }
}

class Truck
{
    constructor(options)
    {
        this.doors = options.doors || 2
        this.color = options.color || 'white'
        this.state = options.state || 'state 1'
    }
}

class VehicleFactory
{
    createVehicle(options)
    {
        if(options.vehicleType == 'car') return new Car(options)
        else if(options.vehicleType == 'truck') return new Truck(options)
    }
}

const factory = new VehicleFactory()

const car = factory.createVehicle
({
    vehicleType: 'car',
    doors: 2,
})

const truck = factory.createVehicle
({
    vehicleType: 'truck',
    doors: 4,
    color: 'black',
    state: 'state 2',
})

console.log(car)
console.log(truck)