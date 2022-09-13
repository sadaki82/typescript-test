const userModel = require("../models/user");
import express, { Request, Response } from "express";
import mongoose from "mongoose";

exports.getUsers = async (req: Request, res: Response) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userModel.find({ _id: id });

  try {
    res.send(user);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.postUser = async (req: Request, res: Response) => {
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    // res.status(500).send(err);
    res.send(err).status(404);
  }
};

// exports.patchUser = async (req: Request, res: Response) => {
//   console.log(req.params);
//   console.log(req);
//   //constをtryの外に出したら動いた
//   const { idOrName } = req.params;
//   try {
//     const {
//       _id,
//       name,
//       category,
//       url,
//       evaluation,
//       distributor,
//       price,
//       img,
//       material,
//       nutrition,
//       description,
//     } = req.body;

//     await userModel.updateOne(
//       { _id: idOrName },
//       {
//         $set: {
//           _id: _id,
//           name: name,
//           category: category,
//           url: url,
//           evaluation: evaluation,
//           distributor: distributor,
//           price,
//           img: img,
//           material: material,
//           nutrition: nutrition,
//           description: description,
//         },
//       }
//     );
//     const afterFood = await userModel.find({ name: name });
//     res.send(afterFood);
//   } catch (err) {
//     res.send(err).status(404);
//   }
// };

exports.deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await userModel.remove({ _id: id });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};
