const { Schema, model, Types } = require("mongoose");

const TotalIncomeSchema = new Schema({
  incomeID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  salary: {
    type: Number,
    required: true,
  },
  // bills: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "TotalBills",
  //   required: true,
  // }],
  // savings: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "TotalSavings",
  //   required: true,
  // }],
  // spending: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "TotalSpending",
  //   required: true,
  // }],
});

const TotalIncome = model("TotalIncome", TotalIncomeSchema);

module.exports = TotalIncome;
