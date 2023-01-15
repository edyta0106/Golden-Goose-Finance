const { Schema, model } = require("mongoose");

const FinancialDataSchema = new Schema({
  financialID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  bills: [Bills],
  savings: [Savings],
  spending: [Spending],
  incone: [Income],
});

const FinancialData = model("financialdata", FinancialDataSchema);

module.exports = FinancialData;
