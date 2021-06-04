const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: String,
  famBotanique: String,
  nomLatin: String,
  type: [String],
  image: {type: String, default: "https://img-premium.flaticon.com/png/512/2329/2329865.png?token=exp=1622801839~hmac=b8aaec6556a72878328e05539ea4666a"},
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
