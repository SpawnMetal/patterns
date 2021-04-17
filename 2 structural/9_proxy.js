// Прокси

function networkFetch(url)
{
    return `${url} - Ответ с сервера`
}

const cache = new Set() //Будет уникальными данными, которые при повторе не будут здесь храниться

// new Proxy(target, handler)
// ProxyОбъект позволяет создать прокси для другого объекта, который может перехватывать и переопределить основные операции для этого объекта.
// Функция target === networkFetch выполнится, если минует все ловушки
const proxiedFectch = new Proxy(networkFetch,
{
    apply(target, thisArg, args) // Будет вызван при вызове функции networkFetch
    {
        const url = args[0]

        if(cache.has(url)) return `${url} - Ответ из кэша`
        else cache.add(url)

        // Reflect - это встроенный объект, который предоставляет методы для перехватывания JavaScript операций.
        return Reflect.apply(target, thisArg, args)
    }
})

console.log(proxiedFectch('angular.io'))
console.log(proxiedFectch('react.org'))
console.log(proxiedFectch('angular.io'))