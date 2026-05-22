import React, {
  useState,
  useEffect
} from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatBot from "../components/ChatBot";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {

  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("");

  const [expenses, setExpenses] = useState([]);

  // FETCH EXPENSES
  const fetchExpenses = async () => {

    try {

      const response = await axios.get(
        "https://ai-finance-assistant-h0bd.onrender.com/api/expenses"
      );

      // SAVE TO STATE
      setExpenses(response.data);

      // SAVE TO LOCAL STORAGE
      localStorage.setItem(
        "expenses",
        JSON.stringify(response.data)
      );

    } catch (error) {

      console.log(error);

    }
  };

  // LOAD DATA
  useEffect(() => {

    fetchExpenses();

  }, []);

  // ADD EXPENSE
  const addExpense = async () => {

    if (!title || !amount || !category) {

      return alert("Please fill all fields");

    }

    try {

      await axios.post(
        "https://ai-finance-assistant-h0bd.onrender.com/api/expenses",
        {
          title,
          amount,
          category
        }
      );

      // CLEAR INPUTS
      setTitle("");
      setAmount("");
      setCategory("");

      // REFRESH DATA
      fetchExpenses();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        id="dashboard"
        className="flex-1 p-8 overflow-y-auto"
      >

        {/* NAVBAR */}
        <Navbar />

        {/* HEADER */}
        <div className="flex justify-between items-center mt-8 mb-10">

          <div>

            <h1 className="text-4xl font-bold">
              Finance Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your finances smartly 🚀
            </p>

          </div>

          {/* LOGOUT */}
          <button
            onClick={() => {

              localStorage.clear();

              window.location.href = "/";

            }}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold"
          >
            Logout
          </button>

        </div>

        {/* ADD EXPENSE */}
        <div
          id="expenses"
          className="bg-slate-900 p-6 rounded-3xl mb-10 shadow-xl"
        >

          <h2 className="text-2xl font-bold mb-6">
            Add Expense
          </h2>

          <div
            id="transactions"
            className="grid lg:grid-cols-4 gap-4"
          >

            {/* TITLE */}
            <input
              type="text"
              placeholder="Expense Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            {/* AMOUNT */}
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              className="p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            {/* CATEGORY */}
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="p-4 rounded-2xl bg-slate-800 border border-slate-700 outline-none focus:border-blue-500"
            />

            {/* BUTTON */}
            <button
              onClick={addExpense}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:scale-105 duration-300"
            >
              Add Expense
            </button>

          </div>

        </div>

        {/* EXPENSES + REPORTS */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* EXPENSE LIST */}
          <div className="bg-slate-900 p-6 rounded-3xl shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
              Recent Expenses
            </h2>

            <div className="space-y-4 max-h-[500px] overflow-y-auto">

              {expenses.length === 0 ? (

                <p className="text-gray-400">
                  No expenses added yet.
                </p>

              ) : (

                expenses.map((expense) => (

                  <div
                    key={expense._id}
                    className="bg-slate-800 p-4 rounded-2xl flex justify-between items-center"
                  >

                    <div>

                      <h3 className="font-bold text-lg">
                        {expense.title}
                      </h3>

                      <p className="text-gray-400">
                        {expense.category}
                      </p>

                    </div>

                    <h3 className="text-red-400 font-bold text-xl">
                      Rs. {expense.amount}
                    </h3>

                  </div>

                ))

              )}

            </div>

          </div>

          {/* REPORTS */}
          <div id="reports">

            <ExpenseChart expenses={expenses} />

          </div>

        </div>

        {/* CHATBOT */}
        <div
          id="chatbot"
          className="mt-10"
        >

          <ChatBot />

        </div>

      </div>

    </div>
  );
};

export default Dashboard;