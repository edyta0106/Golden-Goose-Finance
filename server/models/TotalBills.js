const { Schema, model, Types } = require("mongoose");

const BillSchema = new Schema({
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
  dueDate: {
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

const Bills = model("Bills", BillSchema);

module.exports = Bills;
