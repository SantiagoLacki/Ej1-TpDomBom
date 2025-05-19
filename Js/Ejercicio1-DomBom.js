
// 1- Crea una web con bootstrap y js, que 
// contenga un botón comenzar el juego, en 
// ese momento se crea un número aleatorio 
// que el usuario deberá adivinar, la interfaz 
// del usuario debe tener además un input 
// para ingresar un número y un botón enviar, 
// al presionar el botón enviar mostrar en un 
// alert si el usuario adivino o no el número 
// mágico, si no lo adivino indicarle con un 
// alert si el numero que ingreso es mayor o 
// menor al número mágico.
// Cuando el usuario adivine el numero mostrar 
// un mensaje indicando al usuario que adivino 
// el numero.

let numeroAleatorio;

const generarNumero = (e) => {
  e.preventDefault()
  numeroAleatorio = Math.floor(Math.random() * 101)
  btnComenzarJuego.setAttribute('disabled',`disabled`)
}

const adivinar = (e) => {
  e.preventDefault()
  let numeroIngresado = document.getElementById('num').value

  numeroIngresado = parseInt(numeroIngresado);
  
  if (numeroIngresado === numeroAleatorio) {
    alert(`GANASTE!! EL NUMERO MAGICO ERA: ${numeroAleatorio}`)
    btnAdivinarNumero.reset();
    btnComenzarJuego.removeAttribute(`disabled`)
  }
  else if (numeroIngresado < numeroAleatorio) {
    alert(`El numero magico es mayor que ${numeroIngresado}`)
    btnAdivinarNumero.reset();
  }
  else {
    alert(`El numero magico es menor que  ${numeroIngresado}`)
    btnAdivinarNumero.reset();
  }
}

const btnComenzarJuego = document.getElementById('btnComenzar')
const btnAdivinarNumero = document.getElementById('formAdivinar')


btnComenzarJuego.addEventListener('click', generarNumero)
btnAdivinarNumero.addEventListener('submit', adivinar)
