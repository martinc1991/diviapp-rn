import dayjs from 'dayjs';

// Auxiliar function to make the results into a string
export const paymentsObjectToString = function (paymentObject) {
  if (!paymentObject) {
    return '';
  }
  const date = paymentObject.date || dayjs().format('DD/MM/YY');
  const stringResult =
    'Para equilibrar gastos, hacer los siguientes pagos:' +
    '\n' + // En este caso va un solo salto porque el .map devuelve elementos con saltos adelante
    `${paymentObject.map((payment, i) => {
      return '\n' + `${payment.from} → $ ${payment.amount} → ${payment.to}`;
    })}` +
    '\n\n' +
    `Fecha: ${date}` +
    '\n\n' +
    'Facilitado por DiviApp';
  return stringResult;
};
