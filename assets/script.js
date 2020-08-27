
//Limpiar Input incorrecto
limpiarEmail = () => {
    let limpiar = document.getElementById("email");
    limpiar.value = " ";
};
limpiarRut = () =>{
    let limpiar = document.getElementById("rut");
    limpiar.value = " ";
};
limpiarNombres = () => {
    let limpiar = document.getElementById("nombres");
    limpiar.value = " ";
};
limpiarApellidos = () => {
    let limpiar = document.getElementById("apellidos");
    limpiar.value = " ";
};
limpiarEdad = () => {
    let limpiar = document.getElementById("edad");
    limpiar.value = " ";
};

//Validar Rut
validarRut = () => {
    var rut = document.getElementById("rut").value
    const expresionRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    if(rut.match(expresionRut)){
        console.log(rut);
    } else{
        alert("Ingrese un rut válido")
        limpiarRut();
    }
};


//Validar Nombre
validarNombres = () => {
    let nombres = document.getElementById("nombres").value
    const expresionNombres 
}

//Validar Apellidos
validarApellidos = () => {
    let apellidos = document.getElementById("apellidos").value
    const expresionApellidos
}

//Validar Edad
validarEdad = () =>{
    let edad = document.getElementById("edad").value
    const expresionEdad
}

//Validar Correo
validarCorreo = () =>{
    let email = document.getElementById("email").value
    const expresionCorreo =  /[a-z 1-9]{1,100}\@[a-z]{1,10}\.[a-z]{2,3}$/gmi;
    if(email.match(expresionCorreo)){
        console.log(email)
    } else{
        alert("Favor ingresar correo válido")
        console.log(email)
        limpiarInput();
    }
}



//Validaciones extra

/* var correo = "leslie@gmail.com"
const expresionCorreo =  /^\w+\w+[@]\w+\.\D{2,3}$/;

console.log("expresionCorreo =>", expresionCorreo.test(correo))

var rut = "17.623.177-7"
const expresionRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
console.log("expresionRut =>", expresionRut.test(rut)) */