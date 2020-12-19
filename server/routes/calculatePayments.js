import express from 'express';

import { calculatePayments } from '../controllers/calculatePayments.js';

const router = express.Router();

// router.METHOD(route, controller)
router.post('/', calculatePayments);

export default router;
