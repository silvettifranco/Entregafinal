/*=========== Impresión en HTML de acuerdo a los datos ingresados en el formulario ============*/

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", escribirNombre);

function escribirNombre() {
    let nombre = document.getElementById("nombre").value;
    var contenido = "El vehículo ingresado es: <strong>" + nombre + "</strong></p>";
    document.getElementById("resultado2").innerHTML = contenido;
}
boton.addEventListener("click", escribirModelo);   
function escribirModelo () {
    let modelo= document.getElementById("modelo").value;
    if(modelo<="2011"){
        var contenido2 = "<strong>Modelo:</strong> Su modelo es menor a la antigüedad mínima que pedimos para nuestros vehículos de socios. Si bien se otorgará un precio de referencia del alquiler, el mismo no tendrá prioridad en nuestros registros.";
    }else{
        var contenido2 = "El modelo de su vehículo es: <strong>" + modelo + "</strong></p>";
    }    
    document.getElementById("resultado3").innerHTML = contenido2;
}
boton.addEventListener("click", escribirTurno);
function escribirTurno () {
    let turno= document.getElementById("turnos").value;
    if(turno=="turno"){
        var contenido3=6500;
    }else if(turno=="hora"){
        var contenido3=700;
    }else if (turno=="quincena"){
        var contenido3=45500;
    }else if (turno=="mes"){
        var contenido3=95500;
    }
    let modelo= document.getElementById("modelo").value;
    if(modelo>="2020"){
        var contenido3 = parseInt(contenido3*1.15);
    }
    document.getElementById("resultado4").innerHTML = "El precio cotizado al que se pagaría el alquiler de su vehículo es de: $ARS "+"<strong>"+contenido3+"</strong>"+" en referencia al alquier por: "+"<strong>"+turno+"</strong>"+".";
}
boton.addEventListener("click", escribirPropietario);
function escribirPropietario () {
    let propietario= document.getElementById("propietario").value;
    var contenido4 = "Bienvenido <strong>" + propietario + "</strong></p>";
    document.getElementById("resultado").innerHTML = contenido4;
}


/* ===============Base de datos de autos para alquilar==============*/

class unidades {
    constructor (nombre, imagen, precio, propietario,contacto) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio=precio;
        this.propietario=propietario;
        this.contacto=contacto;
    }
}

const vehiculos = [{nombre:"peugeot 308", imagen:"308.jpeg", precio:"$4500", propietario:"Juan Manuel Salinas",contacto:"2613374046"},{nombre:"Toyota Corolla", imagen:"corolla.jpeg", precio:"$5500", propietario:"Rosa Colombo",contacto:"2614375046"},{nombre:"Volkswagen Polo", imagen:"polo.jpeg", precio:"$3900", propietario:"Marcos Acuña",contacto:"2615374456"},{nombre:"Volkswagen Vento", imagen:"vento.jpeg", precio:"$5500",propietario: "María Allianz",contacto:"2616653045"},{nombre:"Nissan Versa", imagen:"versa.jpeg", precio:"$6000", propietario:" Mario Peña",contacto:"2615624145"},{nombre:"Honda HR-V", imagen:"honda.jpeg", precio:"$5800", propietario:" Esteban Pou",contacto:"2617453157"}];
var contenido = "";
var i = 1;

for (let modelo of vehiculos) {
    contenido += "<div class='col-3 m-4 d-flex justify-content-center'>";
    contenido += "<div class='card border border-primary'>";
    contenido += "<div><h4 id='modelo_auto" + i + "' class='text-center text-primary fw-bold'>" + modelo.nombre + "</h4></div>";
    contenido += "<img id='modelo_imagen" + i + "' src='./assets/img/autos/" + modelo.imagen + "' class='card-img-top' alt='autos-seleccionados'>";
 /*    "<img src='./assets/img/autos/" + datos.imagen + "' widht='180'>"; */
    contenido += "<div class='card-body'>";
    contenido += "<div class='row'>";
    contenido += "<div class='col-12'><p class='p-1 text-center text-secondary'>El precio por día es de: " +modelo.precio+"</p></div>";
    contenido += "<div class='col-12 text-center'><button type='button' class='btn btn-light btn-outline-secondary'><a href='https://wa.me/"+modelo.contacto+"' class='text-primary'</a>Contactar</button></div>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
    i++;
}

var contenedor_modelos = document.getElementById("vehiculos");
contenedor_modelos.innerHTML = contenido;


/*================ Registro de datos del formulario=============== */

function enviarDatos() {
    var nombre_vehiculo = document.getElementById("nombre").value;
    var tel_vehiculo = document.getElementById("tel").value;
    var modelo_vehiculo = document.getElementById("modelo").value;
    var turno_vehiculo= document.getElementById("turnos").value;
    var nombre_vehiculo = document.getElementById("propietario").value;

    localStorage.setItem("datos_formulario", JSON.stringify([nombre_vehiculo, tel_vehiculo ,modelo_vehiculo, turno_vehiculo, nombre_vehiculo]));
    var resultadoA = "<p class='text-white bg-dark text-center m-5 p-3'>Su cotización se ha registrado correctamente!</p>";
    document.getElementById("resultado_exitoso").innerHTML = resultadoA;
}

var enviar_datos = document.getElementById("btnPrincipal");
enviar_datos.addEventListener("click", enviarDatos);

function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    document.getElementById("nombre").value = datos[0];
    document.getElementById("tel").value = datos[1];
    document.getElementById("modelo").value = datos[2];
    document.getElementById("turnos").value = datos[3];
    document.getElementById("propietario").value = datos[4];
}

cargarDatos();

/* ===========Muestra de animaciones ocultando/ mostrando el "Acuerdo de utilización" ==========*/

$( "#btnPrincipal" ).click(function() {
    alert( "Muchas gracias cotizar tu vehículo, tu cotización tiene una vigencia de 96hs." );
});

function removeElementWithAnimation(id) {
    let elemento = $("#" + id).fadeOut("slow");
}

$("#reserva1").click(function() {
    removeElementWithAnimation("aviso");
});


function mostrarMensaje(id) {
    let elemento = $("#" + id).fadeIn("slow");
}

$("#reserva2").click(function() {
    mostrarMensaje("aviso");
});

/* ==========Muestra de animaciones en el botón, mostrando una oferta e imprimiendo en el HTML=========== */

$(`#btnN1`).on('click', function () {
    /* var resultado22 = "<p class='text-white  text-center m-1 p-3'>Gracias por interesarte en nuestras ofertas, HOY tenés un 20% off, tipeando el código 20OFFDAY</p>"; */
    var resultado22 = "<img src='./assets/img/oferta-autos.png'></img>";
    document.getElementById("resultadoOferta").innerHTML = resultado22;
});


/* ============Consulta de productos con AJAX============= */

$(".masAlquilados").prepend('<button type="button" class="btn btn-primary m-5 p-3" id="boton1">Consultar unidades más alquiladas</button>');

$("#boton1").click(() => { 
    $.ajax({
        method: "GET",
        url:  "./assets/js/datos.json",
        success: function(respuesta) {
            let contenido = "<div id='aviso3' class='d-flex justify-content-center'>";
            
            for (let datos of respuesta) {
                contenido += "<div class='card m-3 border border-primary'>"
                contenido += "<div class='text-center text-primary bg-light'><h4>"+datos.nombre+"</h4></div>"
                contenido += "<img src='./assets/img/autos/" + datos.imagen + "' widht='180'>";
                contenido += "<div class='text-center text-primary bg-light'><h4>"+datos.precio+" por día"+"</h4></div>"
                contenido += "<div class='text-center text-secondary bg-light'><h6>"+"Propietario: "+datos.propietario+"</h6></div>"
                contenido += "</div>"
            }

            contenido += "</div>";
            $("#aviso3").append(contenido);
        },
        error: function(respuesta) {
            $("#aviso3").prepend(`<div><strong>Error!</strong> No se pudo enviar los datos!</div>`);
        }
    });
});

/* ============Registro de datos sobre el formulario============== */

$( "#BtnEnviar" ).click(function() {
    let nombre = document.getElementById("InputName").value;
    var contenido = "Muchas gracias " + nombre + " por completar el formulario, el mismo ha sido registrado correctamente. Nos pondremos en contacto contigo lo antes posible.";
    document.getElementById("respuestaForm").innerHTML = contenido;
});