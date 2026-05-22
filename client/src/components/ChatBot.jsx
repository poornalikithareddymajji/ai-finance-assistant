import React, { useState } from "react";

const ChatBot = () => {

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I am your AI Finance Assistant. Ask me anything about savings, budgeting, investments, or expenses."
    }
  ]);

  const [input, setInput] = useState("");

  // AI RESPONSE FUNCTION
  const generateResponse = (question) => {

    const q = question.toLowerCase();

    if (q.includes("save money")) {
      return "To save more money, try the 50/30/20 budgeting rule. 50% for needs, 30% for wants, and 20% for savings.";
    }

    else if (q.includes("investment")) {
      return "Investments like mutual funds, index funds, SIPs, and ETFs are good long-term options depending on your risk level.";
    }

    else if (q.includes("budget")) {
      return "Creating a monthly budget helps control unnecessary expenses and improves savings discipline.";
    }

    else if (q.includes("expense")) {
      return "Your expenses should ideally remain below 70% of your income to maintain healthy financial growth.";
    }

    else if (q.includes("credit card")) {
      return "Always pay your credit card bills on time and keep utilization below 30% to maintain a good credit score.";
    }

    else if (q.includes("loan")) {
      return "Before taking a loan, compare interest rates, EMI amounts, and repayment flexibility.";
    }

    else if (q.includes("emergency fund")) {
      return "An emergency fund should ideally cover 6 months of your living expenses.";
    }

    else if (q.includes("stock")) {
      return "Stock investments can generate high returns over time but also carry higher risks.";
    }

    else if (q.includes("mutual fund")) {
      return "Mutual funds are professionally managed investment portfolios suitable for diversified investing.";
    }

    else if (q.includes("retirement")) {
      return "Start retirement investing early to benefit from compound interest and long-term growth.";
    }

    else {
      return "I can help with budgeting, investments, savings, credit cards, loans, retirement planning, and financial management.";
    }
  };

  // SEND MESSAGE
  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    const aiMessage = {
      sender: "ai",
      text: generateResponse(input)
    };

    setMessages([...messages, userMessage, aiMessage]);

    setInput("");
  };

  return (

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-[500px] flex flex-col">

      {/* Heading */}
      <h2 className="text-2xl text-white mb-6">
        AI Finance Assistant
      </h2>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`p-4 rounded-2xl max-w-[85%]
              ${msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-slate-900 text-gray-300"
              }`}
          >

            {msg.text}

          </div>

        ))}

      </div>

      {/* Input Area */}
      <div className="mt-4 flex gap-3">

        <input
          type="text"
          placeholder="Ask AI anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}

          className="flex-1 p-4 rounded-2xl bg-slate-900 text-white outline-none"
        />

        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 rounded-2xl text-white"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default ChatBot;