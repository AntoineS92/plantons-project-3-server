const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: String,
  famBotanique: String,
  nomLatin: String,
  type: [String],
  image: {type: String, default: "https://www.coloriageetdessins.com/images/nature/l-eacute-gume/legumes-sur-table-18367-660x400.jpg"},
  tailleFoliaire: [String],
  tailleRacine: [String],
  preferences: { sol: [String], soleil: String },
  periodeSemis: [String],
  periodeRecolte: [String],
  maladies: [String],
  parasites: [String],

  associtationPos: [{ type: Schema.Types.ObjectId, ref: "Plant" }],
  associtationNeg: [{ type: Schema.Types.ObjectId, ref: "Plant" }],
  variete: [{ type: Schema.Types.ObjectId, ref: "Variete" }],
});

const PlantModel = mongoose.model("Plant", plantSchema);

module.exports = PlantModel;
