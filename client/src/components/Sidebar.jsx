import React from "react";

import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  FileText,
  Bot
} from "lucide-react";

const Sidebar = () => {

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth"
      });

    }
  };

  return (

    <div className="w-[260px] bg-slate-900 min-h-screen p-6 border-r border-slate-800">

      {/* LOGO */}
      <h1 className="text-3xl font-bold text-white mb-12">

        Finance AI

      </h1>

      {/* MENU */}
      <div className="space-y-4">

        <button
          onClick={() =>
            scrollToSection("dashboard")
          }
          className="flex items-center gap-4 text-white hover:bg-slate-800 p-4 rounded-2xl w-full"
        >

          <LayoutDashboard />

          Dashboard

        </button>

        <button
          onClick={() =>
            scrollToSection("transactions")
          }
          className="flex items-center gap-4 text-white hover:bg-slate-800 p-4 rounded-2xl w-full"
        >

          <ArrowLeftRight />

          Transactions

        </button>

        <button
          onClick={() =>
            scrollToSection("expenses")
          }
          className="flex items-center gap-4 text-white hover:bg-slate-800 p-4 rounded-2xl w-full"
        >

          <Wallet />

          Expenses

        </button>

        <button
          onClick={() =>
            scrollToSection("reports")
          }
          className="flex items-center gap-4 text-white hover:bg-slate-800 p-4 rounded-2xl w-full"
        >

          <FileText />

          Reports

        </button>

        <button
          onClick={() =>
            scrollToSection("chatbot")
          }
          className="flex items-center gap-4 text-white hover:bg-slate-800 p-4 rounded-2xl w-full"
        >

          <Bot />

          AI Assistant

        </button>

      </div>

    </div>
  );
};

export default Sidebar;