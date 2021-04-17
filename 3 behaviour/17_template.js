// Темплейт / Шаблон

class Employee
{
    constructor(name, salary)
    {
        this.name = name
        this.salary = salary
    }

    responsebilites() {}

    work()
    {
        return `${this.name} выполняет ${this.responsebilites()}`
    }

    getPaid()
    {
        return `${this.name} имеет ЗП ${this.salary}`
    }
}

class Developer extends Employee
{
    constructor(name, salary)
    {
        super(name, salary)
    }

    responsebilites()
    {
        return 'процесс создания программ'
    }
}

class Tester extends Employee
{
    constructor(name, salary)
    {
        super(name, salary)
    }

    responsebilites()
    {
        return 'процесс тестирования'
    }
}

const dev = new Developer('Павел', 1000000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Виктория', 900000)
console.log(tester.getPaid())
console.log(tester.work())