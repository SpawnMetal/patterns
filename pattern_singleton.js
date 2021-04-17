let instance;

function User(name, age)
{
    if(instance) return instance;

    instance = this
    this.name = name
    this.age = age

    return instance
}

const user1 = new User('Name1', 30)
const user2 = new User('Name2', 40)

console.log('user1: name=' + user1.name + ' age=' + user1.age)
console.log('user2: name=' + user2.name + ' age=' + user2.age)