const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const varieteSchema = new Schema({
  name: String,
  origine: String,
  ancienne: Boolean,
  image: {
    type: String,
    default:
      "https://img-premium.flaticon.com/png/512/2329/2329865.png?token=exp=1622801839~hmac=b8aaec6556a72878328e05539ea4666a",
  },

  ajoute: Boolean,
});

const VarieteModel = mongoose.model("Variete", varieteSchema);

module.exports = VarieteModel;
