const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    isMarried: Boolean,
    city: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
