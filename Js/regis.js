/* 
Selecciono los elementos requeridos del html y los convierto en constantes
*/
const botonIngreso = document.querySelector("#buttonLogin"),
    usario = document.querySelector("#usuaLogin"),
    contra = document.querySelector("#conLogin");

/*
Creo una función la cual me va ser de intermediaria entre mis dos documentos de javascript 
*/
function inicial(interme) {
    let EncontrarUsuario = usu.find((usua) => {
        return usua.usuario === usario.value && usua.password === contra.value
    })
    if (EncontrarUsuario) {
        window.location.href = "./page/home.html"
    } else {
        document.querySelector(`#textLogin`).innerText = "Usuario no encontrado"
    }
    return EncontrarUsuario;
}

/* 
Creo una función para recuperar la información del Local Storage
*/
function recuperarInformacion() {
   const informacion = JSON.parse(localStorage.getItem("usu"));
    return informacion;
}
/* 
Esta función me limpia los campos de mi formulario
*/
function limpiarLosCaposDelUsuarioRegis() {
    usario.value = "";
    contra.value = "";
}
/* 
Guarda la función recuperarInformación dentro de una constante
*/
const InformacionDeUsuario = recuperarInformacion();

/*
Llamo a la constante botonIngreso y le indico que reacción va atener ante los sucesos anteriores 
*/
botonIngreso.addEventListener("click" , (e) => {
    e.preventDefault();
    inicial(InformacionDeUsuario);
    limpiarLosCaposDelUsuarioRegis();
})


