const flashcardModel = require("../models/flashcard");
import express, { Request, Response } from "express";

exports.getFlashcards = async (req: Request, res: Response) => {
  const flashcards = await flashcardModel.find({});

  try {
    res.send(flashcards);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.getFlashcard = async (req: Request, res: Response) => {
  const { id } = req.params;
  const flashcard = await flashcardModel.find({ _id: id });

  try {
    res.send(flashcard);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.postFlashcard = async (req: Request, res: Response) => {
  const flashcard = new flashcardModel(req.body);

  try {
    await flashcard.save();
    res.send(flashcard);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.patcFlashcard = async (req: Request, res: Response) => {
  //constをtryの外に出したら動いた
  const { id } = req.params;
  try {
    const {
      _id,
      target_word,
      context,
      reading,
      english_definition,
      image,
      parts_of_speech,
    } = req.body;

    await flashcardModel.updateOne(
      { _id: id },
      {
        $set: {
          _id: _id,
          target_word,
          context,
          reading,
          english_definition,
          image,
          parts_of_speech,
        },
      }
    );
    const flashcard = await flashcardModel.find({ _id: id });
    res.send(flashcard);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.deleteFlashcard = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await flashcardModel.remove({ _id: id });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};
