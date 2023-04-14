/*
1- AGREGAR OTRA CUENTA REGISTRADA
2- 

*/

const USUARIO1_NOMBRE_REGISTRADO = "pepe" ;
const USUARIO2_NOMBRE_REGISTRADO = "jose" ;
const USUARIO1_CONTRASENIA_REGISTRADA = "asd123"
const USUARIO2_CONTRASENIA_REGISTRADA = "qwe456"

let usuarioNombreIngresado = prompt("Ingrese nombre de usuario");
let usuarioContraseniaIngresada = prompt("Ingrese su contraseña");


if ( (usuarioNombreIngresado == USUARIO1_NOMBRE_REGISTRADO) && (usuarioContraseniaIngresada == USUARIO1_CONTRASENIA_REGISTRADA) ) {
    document.write ("Bienvenido Sr. " + USUARIO1_NOMBRE_REGISTRADO ); 
}

else if ((usuarioNombreIngresado == USUARIO2_NOMBRE_REGISTRADO) && (usuarioContraseniaIngresada == USUARIO2_CONTRASENIA_REGISTRADA)) {
    document.write ("Bienvenido Sr. " + USUARIO2_NOMBRE_REGISTRADO );
} 

else  {
    document.write ("Usuario y/o contraseña no reconocido")
    
} 

