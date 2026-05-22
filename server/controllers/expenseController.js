const Expense = require("../models/Expense");


// ADD EXPENSE
const addExpense = async (req, res) => {

  try {

    const { title, amount, category } = req.body;

    const expense = await Expense.create({

      title,
      amount,
      category

    });

    res.status(201).json(expense);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// GET ALL EXPENSES
const getExpenses = async (req, res) => {

  try {

    const expenses = await Expense.find()
      .sort({ createdAt: -1 });

    res.status(200).json(expenses);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  addExpense,
  getExpenses
};