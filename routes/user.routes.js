const express = require("express");
const {UserModel}=require("../model/user.model")
const userRouter = express.Router();

//create
userRouter.post("/add", async (req, res) => {
  const payload = req.body;
  const user = new UserModel(payload);
  await user.save();
  res.send("Data has been added to the database");
});

// read
// userRouter.get("/", async (req, res) => {
//   const users = await UserModel.find();
//   res.send(users);
// });

//read the data based on query
userRouter.get("/", async (req, res) => {
  const query = req.query;
  console.log(query);
  const users = await UserModel.find(query);
  res.send(users);
});

//update the data
userRouter.patch("/update/:userID", async (req, res) => {
  const { userID } = req.params;
  const payload = req.body;
  await UserModel.findByIdAndUpdate({ _id: userID }, payload);
  res.send(`Document with ID:${userID} has been updated`);
});

//Delete the data
userRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  await UserModel.findByIdAndDelete({ _id: userID });
  res.send(`Document with ID:${userID} has been deleted`);
});

module.exports = {
  userRouter,
};
