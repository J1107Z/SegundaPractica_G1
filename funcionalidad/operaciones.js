function valorCuota(prestamo, i, n){
    i= i/100
    let aux =Math.pow((1+i), n)
    let oper= prestamo * ((aux * i)/ (aux -1))
    return oper
}



function listarDatos(info){
    let res = "Los datos recuperados son: \n"
    info.forEach(persona => {
        res+= `${persona.nombre} pidió ${persona.prestamo} a ${persona.meses} meses con interés ${persona.interes}% y cuota ${persona.cuota} \n`
    })
    return res
}






export{valorCuota, listarDatos}