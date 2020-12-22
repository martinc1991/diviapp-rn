// INPUT
// arrayPersonasPago= [
// 	{name: String, spent: Number},
// 	etc...
// ]

// OUTPUT
// resultados = [
// 	{
// 		from: String,
// 		to: String,
// 		amount: Number,
//   },
//   ...
// ];

export const calculate_basicPayment = function (arrayPersonasPago) {
	var gastos = [];

	arrayPersonasPago.map((person) => {
		if (person.spent > 0) {
			gastos.push(person);
		}
	});

	var pagos = [];

	gastos.map((gasto) => {
		pagos.push(gasto.spent / arrayPersonasPago.length);
		// pagos.push(gasto.spent / arrayPersonasPago.length);
	});
	var pagoGeneral = pagos.reduce((a, b) => a + b, 0);

	var deudas = [];

	arrayPersonasPago.map((persona) => {
		deudas.push({ name: persona.name, deuda: Math.floor(pagoGeneral - persona.spent) });
	});

	// proceso de pagos
	var deudores = [];
	var gastadores = [];

	deudas.map((persona) => {
		if (persona.deuda > 0) {
			deudores.push(persona);
		} else {
			gastadores.push(persona);
		}
	});

	var resultados = [];

	for (let i = 0; i < gastadores.length; i++) {
		for (let j = 0; j < deudores.length; j++) {
			// si el deudor j tiene que pagar menos de lo que tiene que recibir el gastador i
			// (aca se resuelve el deudor j)
			if (gastadores[i].deuda + deudores[j].deuda < 0) {
				// Este if es para que no lleguen al resultado pagos de $ 0
				if (gastadores[i].deuda !== 0) {
					resultados.push({
						from: deudores[j].name,
						amount: deudores[j].deuda,
						to: gastadores[i].name,
					});
				}

				gastadores[i].deuda += deudores[j].deuda;
				deudores[j].deuda = 0;

				if (i >= gastadores.length) return resultados; // Para no pasarme de la cantidad de gastadores (sloppy)
			}
			// si el deudor j tiene que pagar exactamente lo que tiene que recibir el gastador i
			// (aca se resuelve el gastador i y el deudor j)
			else if (deudores[j].deuda + gastadores[i].deuda === 0) {
				// Este if es para que no lleguen al resultado pagos de $ 0
				if (gastadores[i].deuda !== 0) {
					resultados.push({
						from: deudores[j].name,
						amount: deudores[j].deuda,
						to: gastadores[i].name,
					});
				}

				gastadores[i].deuda += deudores[j].deuda;
				deudores[j].deuda = 0;
				gastadores[i].deuda = 0; // esto no seria necesario, pero bueno
				i++;

				if (i >= gastadores.length) return resultados; // Para no pasarme de la cantidad de gastadores (sloppy)
				continue;
			}
			// si el deudor j tiene que pagar mas de lo que tiene que recibir el gastador i
			// (aca se resuelve el gastador i)
			else {
				// Este if es para que no lleguen al resultado pagos de $ 0
				if (gastadores[i].deuda !== 0) {
					resultados.push({
						from: deudores[j].name,
						amount: gastadores[i].deuda * -1,
						to: gastadores[i].name,
					});
				}
				deudores[j].deuda += gastadores[i].deuda; // > 0
				gastadores[i].deuda = 0;

				if (i >= gastadores.length - 1) return resultados; // Para no pasarme de la cantidad de gastadores (sloppy)
				i++;
				j--; // ? (sloppy)
			}
		}
	}
	return resultados;
};
