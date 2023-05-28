function validar(){
    var rut = document.getElementById("rut").value
    var largoRut = rut.length
    if(largoRut < 9 || largoRut > 10){
        alert("El rut es inválido")
    }

    var appaterno = document.getElementById("appaterno").value
    var largoAppaterno = appaterno.length
    if(largoAppaterno < 3 || largoAppaterno > 20){
        alert("El apellido paterno es inválido")
    }

    var edad = document.getElementById("edad").value
    var valorEdad = parseInt(edad)
    if(valorEdad < 18 || valorEdad > 36){
        alert("La edad fuera del rango")
    }
}