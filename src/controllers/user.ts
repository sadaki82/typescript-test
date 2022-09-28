const userModel = require("../models/user");
import express, { Request, Response } from "express";

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

exports.getUserByUid = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const user = await userModel.find({ uuid: uid });

  try {
    res.send(user);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.postUser = async (req: Request, res: Response) => {
  const user = new userModel(req.body);
  console.log(user);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await userModel.remove({ _id: id });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.patchUserByUid = async (req: Request, res: Response) => {
  const uid = req.params.uid.trim();
  const query = { uuid: uid };
  const update = req.body;
  try {
    const updatedUser = await userModel.findOneAndUpdate(query, update, {
      returnOriginal: false,
    });
    res.send(updatedUser);
  } catch (err) {
    res.send(err).status(404);
  }
};
