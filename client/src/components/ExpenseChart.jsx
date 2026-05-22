import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const ExpenseChart = ({ expenses }) => {

  // GROUP CATEGORY TOTALS
  const categoryTotals = {};

  expenses.forEach((expense) => {

    if (
      categoryTotals[expense.category]
    ) {

      categoryTotals[expense.category] += Number(
        expense.amount
      );

    } else {

      categoryTotals[expense.category] = Number(
        expense.amount
      );

    }
  });

  // CONVERT TO CHART ARRAY
  const chartData = Object.keys(
    categoryTotals
  ).map((category) => ({

    name: category,

    value: categoryTotals[category]

  }));

  // COLORS
  const COLORS = [
    "#3B82F6",
    "#8B5CF6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#EC4899"
  ];

  return (

    <div className="bg-slate-900 p-6 rounded-3xl shadow-xl">

      <h2 className="text-2xl font-bold mb-6">

        Expense Analytics

      </h2>

      {chartData.length === 0 ? (

        <p className="text-gray-400">
          No expense data available.
        </p>

      ) : (

        <div className="h-[400px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                label
              >

                {chartData.map(
                  (entry, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      )}

    </div>
  );
};

export default ExpenseChart;