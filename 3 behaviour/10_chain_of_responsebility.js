// Цепочка обязанностей

class MySum
{
    constructor(initialValue = 42)
    {
        this.sum = initialValue
    }

    add(value)
    {
        this.sum += value
        return this //Необходим как раз для данного паттерна
    }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(10).add(1).add(9).sum) //Позволякт строить подобные цепочки

const sum2 = new MySum(0)
console.log(sum2.add(1).add(2).add(3).sum)