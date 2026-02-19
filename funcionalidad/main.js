import { valorCuota, listarDatos } from "./operaciones.js"


const botonCalcular = document.getElementById("calcular")
const verHistorial = document.getElementById("recordar")
const laSalida = document.getElementById("resultadoPrestamo")




botonCalcular.addEventListener("click", calcularCuota)
verHistorial.addEventListener("click", recordarHistorial)
let historial = []


function calcularCuota() {
    
    let nombre = document.getElementById("elNombre").value
    let prestamo = parseFloat(document.getElementById("elPrestamo").value)
    let interes = parseFloat(document.getElementById("losInteres").value)
    let meses = parseInt(document.getElementById("losMeses").value)


    if (nombre=''|| isNaN(prestamo) || prestamo <=500000|| isNaN(meses) || isNaN(interes)){
        throw new Error("Debe rellenar todos los campos")
    return
    }

    let cuota= valorCuota(prestamo, interes, meses)


    let registro = {
            nombre,
            prestamo,
            meses,
            interes,
            cuota
        };
    historial.push(registro);



    console.log(nombre,prestamo,interes,meses)

    laSalida.textContent= nombre + " debe pagar $" 
        + cuota.toFixed(3) + " cada mes por el prestamo de $"
        + prestamo + " a " + meses + " meses con el interes del " + interes + "%";

}

function calcularCuota1() {
    try {
        let nombre = document.getElementById("elNombre").value
        let prestamo = parseFloat(document.getElementById("elPrestamo").value)
        let interes = parseFloat(document.getElementById("losInteres").value)
        let meses = parseInt(document.getElementById("losMeses").value)

        let cuota= valorCuota(prestamo, interes, meses)


        if (nombre=''|| isNaN(prestamo) || prestamo <=500000|| isNaN(meses) || isNaN(interes)){
            alert("Debe rellenar todos los campos")
        return
        }

        let registro = {
                nombre,
                prestamo,
                meses,
                interes,
                cuota
            };
        historial.push(registro);

            

        console.log(nombre,prestamo,interes,meses)

        laSalida.textContent= nombre + " debe pagar $" 
            + cuota.toFixed(3) + " cada mes por el prestamo de $"
            + prestamo + " a " + meses + " meses con el interes del " + interes + "%";
    } catch(error) {
        alert(error,message)
    }
    
    


}

function recordarHistorial() {
    console.log(historial)
    laSalida.textContent= listarDatos(historial)
    
}


