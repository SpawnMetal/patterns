const myRevelatingModule = (function()
{
    let privateName = 'Name1'
    let publicVar = 'Hello world!'

    const privateGetName = () => console.log('Name: ' + privateName)

    const publicSetName = val => privateName = val
    const publicGetName = () => privateGetName()

    return {
        getName: publicGetName,
        setName: publicSetName,
        text: publicVar,
    }
})()

console.log(myRevelatingModule.text)
myRevelatingModule.getName()
myRevelatingModule.setName('Name2')
myRevelatingModule.getName()