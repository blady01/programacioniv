document.addEventListener("DOMContentLoaded", e=>{
    document.querySelector("#frmAlumnos").addEventListener("submit", event=>{
        event.preventDefault();

        let codigo = document.querySelector("#txtCodigoAlumno").value,
            nombre = document.querySelector("#txtNombreAlumno").value,
            direccion = document.querySelector("#txtDireccionAlumno").value,
            telefono = document.querySelector("#txtTelefonoAlumno").value;

        console.log(codigo, nombre, direccion, telefono);
        
        if( 'localStorage' in window ){
            window.localStorage.setItem("codigo"+codigo, codigo);
            window.localStorage.setItem("nombre"+codigo, nombre);
            window.localStorage.setItem("direccion"+codigo, direccion);
            window.localStorage.setItem("telefono"+codigo, telefono);
        } else {
            alert("Por favor ACTUALIZATE!!!.");
        }
    });
    document.querySelector("#btnRecuperarAlumno").addEventListener("click", event=>{

        if (document.querySelector("#txtCodigoAlumno").value = !""){
            document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("codigo"+document.querySelector("#txtCodigoAlumno").value);
            document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("nombre"+document.querySelector("#txtCodigoAlumno").value);
            document.querySelector("#txtDireccionAlumno").value = window.localStorage.getItem("direccion"+document.querySelector("#txtCodigoAlumno").value);
            document.querySelector("#txtTelefonoAlumno").value = window.localStorage.getItem("telefono"+document.querySelector("#txtCodigoAlumno").value);
        }
        else if (document.querySelector("#txtCodigoAlumno").value = ""){
            alert("Introduzca un codigo de usuario");
        }

  
    });
});

/*document.addEventListener("DOMContentLoaded",function(e){
    alert("CALLBACK LISTO");
});*/

/*document.addEventListener("DOMContentLoaded", init);
function init(e){
    alert("LISTO");
}*/