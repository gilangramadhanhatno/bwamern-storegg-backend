const mongoose = require("mongoose");

let bankSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Nama Pemilik harus diisi"],
    },
    nameBank: {
      type: String,
      require: [true, "Nama bank harus diisi"],
    },
    noRekening: {
      type: Number,
      require: [true, "No rekening harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", bankSchema);
