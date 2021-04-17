const myModule = (() =>
{
    const privateVariable = 'Hello world!'

    const privateMethod = () => console.log(privateVariable)

    return {
        publicMethod: () => privateMethod()
    }
})()

myModule.publicMethod()