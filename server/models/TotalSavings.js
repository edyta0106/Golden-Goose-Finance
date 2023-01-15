const { Schema, model, Types } = require("mongoose");

const TotalSavingsSchema = new Schema({
  savingsID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  totalSavings: {
    type: Number,
  },
});

const TotalSavings = model("totalSavings", TotalSavingsSchema);

module.exports = TotalSavings;
