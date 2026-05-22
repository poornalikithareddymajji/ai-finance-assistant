const express = require("express");
const cors = require("cors");
require("dotenv").config();
const expenseRoutes = require("./routes/expenseRoutes");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// AUTH ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
// TEST ROUTE
app.get("/", (req, res) => {

  res.send("Finance AI Backend Running");

});

// PORT
const PORT = process.env.PORT || 5000;

// START SERVER
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});