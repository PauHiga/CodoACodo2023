let cantidad = document.getElementById("cantidad")
let categoria = document.getElementById("categoria")
let totalAPagar =  document.getElementById("totalAPagar")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let correo =  document.getElementById("correo")

const btnBorrar = document.getElementById("borrar")
const btnResumen = document.getElementById("resumen")
  
//cantidad.addEventListener("input", displayTotal);
//categoria.addEventListener("input", displayTotal);

function displayTotal(){
  let cantidadV = cantidad.value;
  let categoriaV = categoria.value;
  let descuento = 0;

  if(categoriaV == "Estudiante"){
    descuento = 80;
  } else if(categoriaV == "Trainee") {
    descuento = 50;
  } else if(categoriaV == "Junior") {
    descuento = 15;
  } 

  let value = cantidadV * 200 * (1 - descuento / 100);  
  totalAPagar.textContent = "Total a pagar $ " + Math.round(value);
}

btnBorrar.onclick = function() {
  nombre.value = "";
  apellido.value = "";
  correo.value = "";
  cantidad.value = "";
  categoria.value = "";
  totalAPagar.textContent = "Total a pagar $ ";
}


btnResumen.onclick = function() {
  checkWordInput(nombre);
  checkWordInput(apellido);
  checkEmail(correo);
  checkEmpty(cantidad);
  checkEmpty(categoria);

  displayTotal();
//  const resumen = "Nombre: " + nombre.value + " \nApellido: " + apellido.value + " \nCorreo: " + correo.value + " \nCantidad de entradas: " + cantidad.value + "\nCategoría: " + categoria.value + "\n" + totalAPagar.textContent;
//  alert(resumen);
}

const checkWordInput = (input) => {
  if(!/[a-zA-Z]+[a-zA-Z ]*/.test(input.value)){
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    input.focus();
    return true;
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return false;
  }
}

const checkEmail = (input) => {
  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value)){
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    input.focus();
    return true;
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return false;
  }
}

const checkEmpty = (input) => {
  if(input.value == "" || input.value <= 0){
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    input.focus();
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
}