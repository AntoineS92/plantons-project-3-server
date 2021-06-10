const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  profileImg: {
    type: String,
    default:
      "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
  },
  password: { type: String, required: true },
  lastName: String,
  firstName: String,
  role: {type: String, default: "user"},

  favoris: [{type: Schema.Types.ObjectId, ref: "Plant"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
