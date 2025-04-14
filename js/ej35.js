let numeroDeCliente = 143245; 
let numeroDeClienteIngresado = '143245';

// Comparación por valor

let esCorrecto = ( numeroDeCliente == numeroDeClienteIngresado);

// Comparación por valor y tipo

let esValido = ( numeroDeCliente === numeroDeClienteIngresado);

// Mostrar resultados en consola

console.log("El número ingresado por el cliente es correcto:", esCorrecto);
console.log("El número ingresado por el cliente es válido:", esValido);