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

exports.getFlashcardByCreate = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const flashcard = await flashcardModel.find({ created_by: uid });

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

exports.deleteFlashcard = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await flashcardModel.remove({ _id: id });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};
