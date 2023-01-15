const { Schema, model, Types } = require("mongoose");

const TotalSpendingSchema = new Schema({
  spendingID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  expenseName: {
    type: String,
    required: true,
  },
  expenseCost: {
    type: Number,
    required: true,
  },
  expenseCategory: {
    type: String,
    required: true,
  },
});

const TotalSpending = model("totalSpending", TotalSpendingSchema);

module.exports = TotalSpending;
