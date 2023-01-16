const { Schema, model } = require("mongoose");

const FinancialDataSchema = new Schema({
  financialID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  bills: {
    type: Schema.Types.ObjectId,
    ref: "TotalBills",
    required: true,
  },
  savings: {
    type: Schema.Types.ObjectId,
    ref: "TotalSavings",
    required: true,
  },
  spending: {
    type: Schema.Types.ObjectId,
    ref: "TotalSpending",
    required: true,
  },
  income: {
    type: Schema.Types.ObjectId,
    ref: "TotalIncome",
    required: true,
  },
});

const FinancialData = model("financialData", FinancialDataSchema);

module.exports = FinancialData;
