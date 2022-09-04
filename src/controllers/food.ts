const foodModel = require("../models/food");
import express, { Request, Response } from "express";

exports.getFoods = async (req: Request, res: Response) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.getFood = async (req: Request, res: Response) => {
  const { idOrName } = req.params;
  const food = await foodModel.find({ _id: idOrName });

  try {
    res.send(food);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.postFood = async (req: Request, res: Response) => {
  const food = new foodModel(req.body);
  console.log(food);

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    // res.status(500).send(err);
    res.send(err).status(404);
  }
};

exports.patchFood = async (req: Request, res: Response) => {
  //constをtryの外に出したら動いた
  const { idOrName } = req.params;
  try {
    const {
      _id,
      name,
      category,
      url,
      evaluation,
      distributor,
      price,
      img,
      material,
      nutrition,
      description,
    } = req.body;

    await foodModel.updateOne(
      { _id: idOrName },
      {
        $set: {
          _id: _id,
          name: name,
          category: category,
          url: url,
          evaluation: evaluation,
          distributor: distributor,
          price,
          img: img,
          material: material,
          nutrition: nutrition,
          description: description,
        },
      }
    );
    const afterFood = await foodModel.find({ name: name });
    res.send(afterFood);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.deleteFood = async (req: Request, res: Response) => {
  const { idOrName } = req.params;
  try {
    await foodModel.remove({ _id: idOrName });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};
