const { Schema, model, Types } = require("mongoose");
const Bills = require("./TotalBills");
const Savings = require("./TotalSavings");
const Spending = require("./TotalSpending");

const TotalIncomeSchema = new Schema({
  incomeID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  salary: {
    type: Number,
    required: true,
  },
  bills: [Bills],
  savings: [Savings],
  spending: [Spending],
});

const TotalIncome = model("totalIncome", TotalIncomeSchema);

module.exports = TotalIncome;
