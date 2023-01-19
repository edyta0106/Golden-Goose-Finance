const { Schema, model, Types } = require("mongoose");

const TotalSavingsSchema = new Schema({
  savingsID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  goalAmount: {
    type: Number,
  },
  goalName: {
    type: String,
  },
  goalLength: {
    type: String,
  },
  goalDescription: {
    type: String,
  },
});

const TotalSavings = model("TotalSavings", TotalSavingsSchema);

module.exports = TotalSavings;
