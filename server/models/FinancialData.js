const { Schema, model } = require("mongoose");
const Income = require("./TotalIncome");
const Bills = require("./TotalBills");
const Savings = require("./TotalSavings");
const Spending = require("./TotalSpending");

const FinancialDataSchema = new Schema({
  financialID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  bills: [Bills],
  savings: [Savings],
  spending: [Spending],
  income: [Income],
});

const FinancialData = model("financialData", FinancialDataSchema);

module.exports = FinancialData;
