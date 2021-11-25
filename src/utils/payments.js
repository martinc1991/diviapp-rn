// INPUT
// arrayPersonasPago= [
// 	{ name: String, spent: Number },
// ]

// OUTPUT
// resultados = [
// 	{ from: String, to: String, amount: Number }
// ];

export const calculate_basicPayment = function (arrayPersonasPago) {
  const gastos = [];

  arrayPersonasPago.forEach((person) => {
    if (person.spent > 0) {
      gastos.push(person);
    }
  });

  const pagos = [];

  gastos.forEach((gasto) => {
    pagos.push(gasto.spent / arrayPersonasPago.length);
  });

  const pagoGeneral = pagos.reduce((a, b) => {
    return a + b;
  }, 0);

  const deudas = [];

  arrayPersonasPago.forEach((persona) => {
    deudas.push({ name: persona.name, deuda: Math.floor(pagoGeneral - persona.spent) });
  });

  // proceso de pagos
  const deudores = [];
  const gastadores = [];

  deudas.forEach((persona) => {
    if (persona.deuda > 0) {
      deudores.push(persona);
    } else {
      gastadores.push(persona);
    }
  });

  const resultados = [];

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

        if (i >= gastadores.length) {
          return resultados;
        } // Para no pasarme de la cantidad de gastadores (sloppy)
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

        if (i >= gastadores.length) {
          return resultados;
        } // Para no pasarme de la cantidad de gastadores (sloppy)
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

        if (i >= gastadores.length - 1) {
          return resultados;
        } // Para no pasarme de la cantidad de gastadores (sloppy)
        i++;
        j--; // ? (sloppy)
      }
    }
  }

  return resultados;
};
