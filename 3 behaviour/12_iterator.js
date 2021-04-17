// Итератор

class MyIterator
{
    constructor(data)
    {
        this.index = 0
        this.data = data
    }

    [Symbol.iterator]() // По iterator работает например for of
    {
        return {
            next: () => // Нужен контекст класса MyIterator
            {
                if(this.index < this.data.length)
                {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                }
                else
                {
                    this.index = 0
                    return {
                        value: void 0, // void 0 == undefined
                        done: true
                    }
                }
            }
        }
    }
}

function* generator(collection)
{
    let index = 0

    while(index < collection.length) yield collection[index++]
}

const iterator = new MyIterator(['This', 'is', 'iterator'])
for(const val of iterator) console.log('Value:', val)

const gen = generator(['This', 'is', 'generator'])
for(const val of gen) console.log('Value:', val)
const gen2 = generator(['This', 'is', 'generator2'])
console.log(gen2.next().value)
console.log(gen2.next().value)
console.log(gen2.next().value)