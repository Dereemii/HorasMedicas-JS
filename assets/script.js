
//LIMPIAR INPUT INCORRECTOS
limpiarEmail = () => {
    let limpiar = document.getElementById("email");
    limpiar.value = "";
};
limpiarRut = () =>{
    let limpiar = document.getElementById("rut");
    limpiar.value = "";
};
limpiarNombres = () => {
    let limpiar = document.getElementById("nombres");
    limpiar.value = "";
};
limpiarApellidos = () => {
    let limpiar = document.getElementById("apellidos");
    limpiar.value = "";
};
limpiarEdad = () => {
    let limpiar = document.getElementById("edad");
    limpiar.value = "";
};

// LIMPIAR SPAN

limpiarSpanRut = () =>{
    let limpiar = document.getElementById("rut1");
    limpiar.innerHTML = "";
};

limpiarSpanNombres = () =>{
    let limpiar = document.getElementById("nombres1");
    limpiar.innerHTML = "";
};

limpiarSpanApellidos = () =>{
    let limpiar = document.getElementById("apellidos1");
    limpiar.innerHTML = "";
};

limpiarSpanEdad = () => {
    let limpiar = document.getElementById("edad1");
    limpiar.innerHTML = "";
};
limpiarSpanCorreo = () => {
    let limpiar = document.getElementById("email1");
    limpiar.innerHTML = "";
}
     
/// VALIDAR RUT

validarRut = () => {
    var rut = document.getElementById("rut").value
    const rut1 = document.getElementById("rut1")
    const expresionRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    if(rut.match(expresionRut)){
        console.log(rut);
        limpiarSpanRut();
    } else{
        rut1.textContent = "xx.xxx.xxx-x puntos y guión";
        limpiarRut();
    }
};

//VALIDAR NOMBRES

validarNombres = () => {
    let nombres = document.getElementById("nombres").value
    const nombres1 = document.getElementById("nombres1")
    const expresionNombres  = /[a-zA-ZäöüßÄÖÜ]/
    if(nombres.match(expresionNombres)){
        console.log(nombres);
        limpiarSpanNombres();
    } else{
        nombres1.textContent = "Ingrese sólo letras";
        limpiarNombres();
    }
};

//Validar Apellidos
validarApellidos = () => {
    let apellidos = document.getElementById("apellidos").value
    const apellidos1 = document.getElementById("apellidos1");
    const expresionApellidos = /(\w.+\s).+/
    if(apellidos.match(expresionApellidos)){
        console.log(apellidos);
        limpiarSpanApellidos();
    } else{
        apellidos1.textContent = "Ingrese 2 apellidos"
        limpiarApellidos();
    }
};

//Validar Edad
validarEdad = () =>{
    let edad = document.getElementById("edad").value
    const edad1 = document.getElementById("edad1");
    const expresionEdad = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
    if(edad.match(expresionEdad)){
        console.log(edad);
        limpiarSpanEdad();
    }else{
        edad1.textContent = "Sólo ingrese números"
        limpiarEdad()
    }
};

//Validar Correo
validarCorreo = () =>{
    let email = document.getElementById("email").value
    const email1 = document.getElementById("email1");
    const expresionCorreo =  /[a-z 1-9]{1,100}\@[a-z]{1,10}\.[a-z]{2,3}$/gmi;
    if(email.match(expresionCorreo)){
        console.log(email);
        limpiarSpanCorreo();
    } else{
        email1.textContent = "Ingrese mail válido"
        limpiarEmail();
    }
};



//Validaciones extra

/* var correo = "leslie@gmail.com"
const expresionCorreo =  /^\w+\w+[@]\w+\.\D{2,3}$/;

console.log("expresionCorreo =>", expresionCorreo.test(correo))

var rut = "17.623.177-7"
const expresionRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
console.log("expresionRut =>", expresionRut.test(rut)) 

var nombre = "hello kitty"
const expresionNombres  = /(\w.+\s).+/
console.log("expresionNombres =>", expresionNombres.test(nombre))

var edad = "a"
const expresionEdad = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
console.log("expresionEdad =>", expresionEdad.test(edad))

var letras = "aa"
const expresionLetras = /[a-zA-ZäöüßÄÖÜ]/
console.log("letras =>", expresionLetras.test(letras))
*/