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
});

const TotalSpending = model("TotalSpending", TotalSpendingSchema);

module.exports = TotalSpending;
