const { Schema, model } = require("mongoose");
const income = require("./TotalIncome");
const bills = require("./TotalBills");
const savings = require("./TotalSavings");
const spending = require("./TotalSpending");

const FinancialDataSchema = new Schema({
  financialID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  bills: [bills],
  savings: [savings],
  spending: [spending],
  income: [income],
});

const FinancialData = model("financialData", FinancialDataSchema);

module.exports = FinancialData;
