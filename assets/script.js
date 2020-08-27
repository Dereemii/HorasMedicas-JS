
//LIMPIAR INPUT INCORRECTOS
limpiarEmail = () => {
    let limpiar = document.getElementById("email");
    limpiar.value = "";
};
limpiarRut = () => {
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
limpiarSpanRut = () => {
    let limpiar = document.getElementById("rut1");
    limpiar.innerHTML = "";
};
limpiarSpanNombres = () => {
    let limpiar = document.getElementById("nombres1");
    limpiar.innerHTML = "";
};
limpiarSpanApellidos = () => {
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
limpiarSpanFecha = () => {
    let limpiar = document.getElementById("fecha1");
    limpiar.innerHTML = "";
}

/// VALIDAR RUT
validarRut = () => {
    var rut = document.getElementById("rut").value
    const rut1 = document.getElementById("rut1")
    const expresionRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;
    if (rut.match(expresionRut)) {
        console.log(rut);
        limpiarSpanRut();
    } else {
        rut1.textContent = "xx.xxx.xxx-x puntos y guión";
        limpiarRut();
    }
};
//VALIDAR NOMBRES
validarNombres = () => {
    let nombres = document.getElementById("nombres").value
    const nombres1 = document.getElementById("nombres1")
    const expresionNombres = /[a-zA-ZäöüßÄÖÜ]/
    if (nombres.match(expresionNombres)) {
        console.log(nombres);
        limpiarSpanNombres();
    } else {
        nombres1.textContent = "Ingrese sólo letras";
        limpiarNombres();
    }
};
//VALIDAR APELLIDOS
validarApellidos = () => {
    let apellidos = document.getElementById("apellidos").value
    const apellidos1 = document.getElementById("apellidos1");
    const expresionApellidos = /(\w.+\s).+/
    if (apellidos.match(expresionApellidos)) {
        console.log(apellidos);
        limpiarSpanApellidos();
    } else {
        apellidos1.textContent = "Ingrese 2 apellidos"
        limpiarApellidos();
    }
};
//VALIDAR EDAD
validarEdad = () => {
    let edad = document.getElementById("edad").value
    const edad1 = document.getElementById("edad1");
    const expresionEdad = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
    if (edad.match(expresionEdad)) {
        console.log(edad);
        limpiarSpanEdad();
    } else {
        edad1.textContent = "Sólo ingrese números"
        limpiarEdad()
    }
};

//VALIDAR CORREO
validarCorreo = () => {
    let email = document.getElementById("email").value
    const email1 = document.getElementById("email1");
    const expresionCorreo = /[a-z 1-9]{1,100}\@[a-z]{1,10}\.[a-z]{2,3}$/gmi;
    if (email.match(expresionCorreo)) {
        console.log(email);
        limpiarSpanCorreo();
    } else {
        email1.textContent = "Ingrese mail válido"
        limpiarEmail();
    }
};
//VALIDAR FECHA
validarFecha = () => {
    let fecha = document.getElementById("fecha").value
    const fecha1 = document.getElementById("fecha1");
    const expresionFecha = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    if (fecha.match(expresionFecha)) {
        console.log(fecha);
        limpiarSpanFecha();
    } else {
        fecha1.textContent = "formato: dd/mm/aaaa"
    }
};

//VALIDAR CLICK EN BOTON SUBMIT 
validarSubmit = () => {
    let fecha = document.getElementById("fecha").value
    let email = document.getElementById("email").value
    let edad = document.getElementById("edad").value
    let apellidos = document.getElementById("apellidos").value
    let nombres = document.getElementById("nombres").value
    let rut = document.getElementById("rut").value

    //Validar input de especialidad
    let indiceEspecialidad = document.getElementById("especialidad").selectedIndex;
    let especialidad = document.getElementById("especialidad").options.item(indiceEspecialidad).text;
    let opcionesEspecialidad = document.getElementById("especialidad").value;
    
    //Validar input de hora
    let indiceHora = document.getElementById("hora").selectedIndex;
    let hora = document.getElementById("hora").options.item(indiceHora).text;
    let opcionesHora = document.getElementById("hora").value;


    if (fecha == "") {
        alert("Favor, complete el campo fecha")
    } else if (email == "") {
        alert("Favor, complete el campo email")
    } else if (edad == "") {
        alert("Favor, complete el campo edad")
    } else if (apellidos == "") {
        alert("Favor, complete el campo para apellidos")
    } else if (nombres == "") {
        alert("Favor, complete el campo para nombres")
    } else if (rut == "") {
        alert("Favor, complete el campo para rut")
    } else if (opcionesHora == "seleccioneHora") {
        alert("Favor, seleccione horario de atención")
    } else if (opcionesEspecialidad == "seleccioneEspecialidad") {
        alert("Favor, seleccione especialidad")
    } else {
        alert(`Estimado(a) ${nombres} ${apellidos} su hora para especialidad ${especialidad} ha sido reservada para el día ${fecha} a las ${hora} horas. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita. Gracias por preferirnos.`)
    }
};

//SUBMIT - RESERVAR
var botonSubmit = document.getElementById("boton")
botonSubmit.addEventListener("click", function (evento) {
    evento.preventDefault();
    validarSubmit();
});
