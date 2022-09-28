const tagsController = require("../controllers/tag");
import express, { Request, Response } from "express";

const tagModel = require("../models/tag");
const mongoose = require("mongoose");

exports.getTags = async (req: Request, res: Response) => {
  const tags = await tagModel.find({});

  try {
    res.send(tags);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.getTag = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tag = await tagModel.find({ _id: id });

  try {
    res.send(tag);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.postTags = async (req: Request, res: Response) => {
  const tag = new tagModel(req.body);

  try {
    await tag.save();
    res.send(tag);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.patchTag = async (req: Request, res: Response) => {
  //constをtryの外に出したら動いた
  const id = req.params.id.trim();
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const update = req.body;
  try {
    const updatedTag = await tagModel.findOneAndUpdate(query, update, {
      returnOriginal: false,
    });
    res.send(updatedTag);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.deleteTag = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await tagModel.deleteOne({ _id: id });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};
