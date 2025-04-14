// let ingresos= 1000;
// let ganancias = 600;
// let impuestos = 500; 

// console.log("Objetivo de ingresos:", ingresos >= 800);
// console.log("Objetivo de impuestos:", impuestos < 400);
// console.log("Bono de ganancias:", ganancias == 600);


/**
 * Evaluación de desempeño financiero mensual 
 * Autor: JS
 * Fecha: 2023-02-20
 */

const ingresos = 1000;
const ganancias = 600;
const impuestos = 500;

// DEFINICIÓN DE OBJETIVOS

const objetivoIngresos = 800;
const limiteImpuesto = 400; 
const gananciaBono = 600; 

// Evaluaciones

const cumpleObjetivoIngresos = ingresos >= objetivoIngresos;
const cumpleObjetivoImpuestos = impuestos < limiteImpuesto;
const tieneBonoGanancias = ganancias === gananciaBono;

// RESULTADO EN CONSOLA

console.log(" Objetivo de Ingresos: ", cumpleObjetivoIngresos );
console.log(" Objetivo de Impuestos: ", cumpleObjetivoImpuestos);
console.log(" Bono de Ganancias: ", tieneBonoGanancias);  