// api

import axios from 'axios';

// const url = 'http://localhost:5000/users';
const BACK_URL = 'http://localhost:5000';

// Users
export const fetchUsers = () => axios.get(BACK_URL + '/users');
export const createUser = (newUser) => axios.post(BACK_URL + '/users', newUser);

// Payments Calculations
export const calculatePayments = (peopleSpentData) => axios.post(BACK_URL + '/payments', peopleSpentData);
