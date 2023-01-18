const { Schema, model } = require("mongoose");

const FinancialDataSchema = new Schema({
  financialID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  bills: [{
    type: Schema.Types.ObjectId,
    ref: "TotalBills",
  }],
  savings: [{
    type: Schema.Types.ObjectId,
    ref: "TotalSavings",
  }],
  spending: [{
    type: Schema.Types.ObjectId,
    ref: "TotalSpending",
  }],
  income: [{
    type: Schema.Types.ObjectId,
    ref: "TotalIncome",
  }],
});

const FinancialData = model("FinancialData", FinancialDataSchema);

module.exports = FinancialData;
