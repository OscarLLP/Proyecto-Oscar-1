

let user = 'oscar';
let password = '12345';

function recibirDatos(tecladoUser, tecladoPassword){
  if (tecladoUser === user && tecladoPassword ===password){
    return true;
  }else {
  return false;
  }
}


function login (){
  let usuario = document.getElementById("input-usuario").value;
  let clave = document.getElementById("input-password").value;
  if (recibirDatos (usuario, clave))
  {
    window.location.href="file:///home/paisano/Documentos/proyecto_oscar/html/index.html";
  }else{
  alert("vuelve a login");
  }
}
