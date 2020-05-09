/* 4 variables */
const saludo = 'Hola!';
const despedida = 'Adios!';
let gato = 'perro';
let perro = 'gato';

console.log(saludo);
console.log(despedida);
console.log(gato);
console.log(perro);

/* Ciclo */
for (let i=0; i < 5; i++) {
	console.log(i);
}

/* 3 funciones */
function saluda(nombre) {
	return 'Hola ' + nombre + '!';
}

const saluda_arrow = (nombre) => {
	return 'Hola ' + nombre + '!';
}

const saluda_default = (nombre = 'Invitado') => {
	/* Uso de template string */
	return `Hola ${nombre}!`;
}

console.log(saluda('Hector'));
console.log(saluda_arrow('Hector'));
console.log(saluda_default());
