/* eslint-disable max-len */
'use strict';

const experss = require('express');
const expensesRouter = experss.Router();
const expensesControllers = require('../controllers/expenses.controller');

expensesRouter.get('/', experss.json(), expensesControllers.getAllExpenses);
expensesRouter.post('/', experss.json(), expensesControllers.addExpense);
expensesRouter.get('/:expenseId', experss.json(), expensesControllers.getCurrentExpense);
expensesRouter.patch('/:expenseId', experss.json(), expensesControllers.updateExpense);
expensesRouter.delete('/:expenseId', experss.json(), expensesControllers.removeExpense);

module.exports = {
  expensesRouter,
};
