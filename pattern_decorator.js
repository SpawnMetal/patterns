class Car
{
    constructor()
    {
        this.cost = () => 20000
    }
}

function carWithAC(car)
{
    car.hasAC = true
    const prevCost = car.cost()
    car.cost = () => prevCost + 500
}

function carWithAutoTransmission()
{
    car.hasWithAutoTransmission = true
    const prevCost = car.cost()
    car.cost = () => prevCost + 2000
}

function carWithPowerLocks()
{
    car.hasWithPowerLocks = true
    const prevCost = car.cost()
    car.cost = () => prevCost + 5000
}

const car = new Car()
console.log(car.cost())
carWithAC(car)
carWithAutoTransmission(car)
carWithPowerLocks(car)
console.log(car.cost())