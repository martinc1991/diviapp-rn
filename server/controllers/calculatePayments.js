import { calculate_basicPayment } from './functions/payments.js';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale.js';
dayjs.extend(updateLocale);

// Object that updates weekday names
dayjs.updateLocale('en', {
	weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
});

// Esta funcion recibe un array de la forma
// INPUT
// arrayPersonasPago= [
// 	{name: String, spent: Number},
// 	etc...
// ]

// OUTPUT
// const resultSchema = {
// 	participants,
// 	payments,
// };

export const calculatePayments = async (req, res) => {
	console.log('controllers');
	console.log('req.body', req.body);
	try {
		const payments = calculate_basicPayment(req.body);
		const response = {
			date: dayjs().format('dddd DD-MM-YYYY HH:mm:ss'), // fecha: 'Monday 21-12-2020 16:11'
			payments,
		};
		// Send response
		res.status(200).json(response);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
