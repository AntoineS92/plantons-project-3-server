const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  profileImg: String,
  password: { type: String, required: true },
  lastName: String,
  firstName: String,

  favoris: [{type: Schema.Types.ObjectId, ref: "Plant"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
