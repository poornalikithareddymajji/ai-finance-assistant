import React from "react";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

const Navbar = () => {

  // GENERATE PDF REPORT
  const generateReport = () => {

    // GET EXPENSES FROM LOCAL STORAGE
    const expenses = JSON.parse(
      localStorage.getItem("expenses")
    ) || [];

    // CREATE PDF
    const doc = new jsPDF();

    // TITLE
    doc.setFontSize(24);

    doc.text(
      "Finance AI Expense Report",
      20,
      20
    );

    // DATE
    doc.setFontSize(12);

    doc.text(
      `Generated On: ${new Date().toLocaleString()}`,
      20,
      30
    );

    // TABLE
    autoTable(doc, {

      startY: 45,

      head: [[
        "Title",
        "Amount",
        "Category"
      ]],

      body: expenses.map((expense) => [

        expense.title,

        "Rs. " + expense.amount,

        expense.category

      ])

    });

    // TOTAL CALCULATION
    const total = expenses.reduce(

      (sum, expense) =>

        sum + Number(expense.amount),

      0
    );

    // TOTAL TEXT
    doc.setFontSize(16);

    doc.text(

      "Total Expenses: Rs. " + total,

      20,

      doc.lastAutoTable.finalY + 20

    );

    // DOWNLOAD PDF
    doc.save("Finance_AI_Report.pdf");
  };

  return (

    <div className="flex justify-between items-center mb-10">

      {/* LEFT SIDE */}
      <div>

        <h1 className="text-4xl font-bold text-white">

          Finance Dashboard

        </h1>

        <p className="text-gray-400 mt-2">

          Welcome back 👋

        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">

        {/* REPORT BUTTON */}
        <button
          onClick={generateReport}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 duration-300 px-6 py-3 rounded-2xl text-white font-semibold shadow-lg"
        >

          Generate Report

        </button>

        {/* PROFILE IMAGE */}
        <img
          src="https://i.pravatar.cc/50"
          alt="profile"
          className="rounded-full border-2 border-blue-500"
        />

      </div>

    </div>
  );
};

export default Navbar;