console.log('Hola Mundo')

process.on('exit', code => {
    if (code===-1) console.log('Una de las funciones no está declarada')
    if (code===-2) console.log('El body no fue enviado')
})

process.on('uncaughtException', () => {
    process.exit(-1)
})

funcionA()
console.log('Otro Hola Mundo!!')