const { Schema, model, Types } = require("mongoose");

const TotalBillSchema = new Schema({
  billID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  billName: {
    type: String,
    required: true,
  },
  billAmount: {
    type: Number,
    required: true,
  },
  billDueDate: {
    type: String,
    required: true,
  },
  // billType: {
  //   type: String,
  //   required: true,
  // },
  // billCategory: {
  //   type: String,
  //   required: true,
  // },
});

const TotalBills = model("TotalBills", TotalBillSchema);

module.exports = TotalBills;
