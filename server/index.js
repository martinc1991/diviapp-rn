import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Routes (as middlewares)
import userRoutes from './routes/users.js';
import calculatePayments from './routes/calculatePayments.js';

const app = express();

// Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// users routes
app.use('/users', userRoutes);

// calculate payments routes
app.use('/payments', calculatePayments);

// Database Connection
const CONNECTION_URL = 'mongodb+srv://diviapp:diviapp123@cluster0.rkwr6.mongodb.net/diviapp?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
