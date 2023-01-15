const { Schema, model, Types } = require("mongoose");
const bills = require("./TotalBills");
const savings = require("./TotalSavings");
const spending = require("./TotalSpending");

const TotalIncomeSchema = new Schema({
  incomeID: {
    type: Schema.Types.ObjectId,
    defualt: () => new Types.ObjectId(),
  },
  salary: {
    type: Number,
    required: true,
  },
  bills: [bills],
  savings: [savings],
  spending: [spending],
});

const TotalIncome = model("totalIncome", TotalIncomeSchema);

moduke.exports = TotalIncome;
