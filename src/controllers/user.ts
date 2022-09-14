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
  const user = await new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    // res.status(500).send(err);
    res.send(err).status(404);
  }
};

exports.patchUser = async (req: Request, res: Response) => {
  //constをtryの外に出したら動いた
  const { id } = req.params;
  try {
    const {
      _id,
      user_name,
      user_email,
      user_password,
      user_avatar,
      target_language,
      cards,
    } = req.body;

    await userModel.updateOne(
      { _id: id },
      {
        $set: {
          _id,
          user_name,
          user_email,
          user_password,
          user_avatar,
          target_language,
          cards,
        },
      }
    );
    const user = await userModel.find({ _id: id });
    res.send(user);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await userModel.deleteOne({ _id: id });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};
