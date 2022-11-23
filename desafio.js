process.on('exit', code => {
    if (code === 0) console.log('El proceso terminó sin errores!')
    else console.log(`El proceso terminó con error de código ${code}`)
})

let datos = process.argv.slice(2)

if (process.argv.slice(2).length === 0) {
    console.log({
        error: {
            descripcion: "Entrada vacía"
        }
    })
    process.exit(-4)
} else {

    datos.map(arg => {
        if (isNaN(arg)) {
            console.log({
                error: {
                    descripcion: "Error de tipo",
                    numeros: datos,
                    tipos: datos.map(arg => {
                        if (isNaN(arg)) return typeof arg
                        return 'number'
                    })
                }
            })
            process.exit(-5)
        }
    })
}

console.log({
    datos: {
        numeros: datos,
        promedio: datos.reduce((acc, curr) => parseInt(acc)+parseInt(curr))/datos.length,
        max: Math.max(...datos),
        min: Math.min(...datos),
        ejecutable: process.execPath,
        pid: process.pid
    }
})

