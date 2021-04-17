// Фасад

class Cpmplaints
{
    constructor()
    {
        this.complaints = []
    }

    reply(complaint) {}

    add(complaint)
    {
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Cpmplaints
{
    reply({id ,customer, details})
    {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Cpmplaints
{
    reply({id ,customer, details})
    {
        return `Service: ${id}: ${customer} (${details})`
    }
}

class ComplaintRegistry
{
    register(customer, type, details)
    {
        const id = Date.now()
        let complaint

        if(type === 'service') complaint = new ServiceComplaints()
        else complaint = new ProductComplaints()

        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Pavel', 'service', 'недоступен'))
console.log(registry.register('Nastya', 'service', 'вылазит ошибка'))