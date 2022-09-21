const usertocardsModel = require("../models/users_to_cards");
import express, { Request, Response } from "express";
const mongoose = require("mongoose");

exports.getUsersToCards = async (req: Request, res: Response) => {
  const users_to_cards = await usertocardsModel.find({});

  try {
    res.send(users_to_cards);
  } catch (err) {
    res.send(err).status(404);
  }
};

// exports.getUserToCard = async (req, res) => {
//   const { id } = req.params;
//   const user_to_card = await userModel.find({ _id: id });

//   try {
//     res.send(user_to_card);
//   } catch (err) {
//     res.send(err).status(404);
//   }
// };

exports.postUsersToCards = async (req: Request, res: Response) => {
  const user_to_card = new usertocardsModel(req.body);

  try {
    await user_to_card.save();
    res.send(user_to_card);
  } catch (err) {
    res.send(err).status(404);
  }
};

// exports.patchUserToCard = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const {
//       _id,
//       user_id,
//       flashcard_id,
//       interval,
//       efactor,
//       repetition,
//       due_date,
//     } = req.body;

//     console.log(user_id);

//     await usertocardsModel.updateOne(
//       { _id: id },
//       {
//         $set: {
//           _id: id,
//           user_id,
//           flashcard_id,
//           interval,
//           efactor,
//           repetition,
//           due_date,
//         },
//       }
//     );
//   } catch (err) {
//     res.send(err).status(404);
//   }
// };

exports.patchUserToCardById = async (req: Request, res: Response) => {
  //constをtryの外に出したら動いた
  const id = req.params.id.trim();
  const query = { _id: mongoose.Types.ObjectId(id) };
  const update = req.body;
  try {
    const updatedCard = await usertocardsModel.findOneAndUpdate(query, update, {
      returnOriginal: false,
    });
    res.send(updatedCard);
  } catch (err) {
    res.send(err).status(404);
  }
};

// exports.patchUserToCard = async (req, res) => {
//   const bodyArray = req.body;
//   console.log(bodyArray);
//   const result = [];
//   try {
//     for (let obj of bodyArray) {
//       console.log("single object", obj);
//       const id = obj._id.trim();
//       const query = { _id: mongoose.Types.ObjectId(id) };
//       const update = obj;
//       const updatedCard = await usertocardsModel.findOneAndUpdate(
//         query,
//         update,
//         { returnOriginal: false }
//       );
//       console.log("updated card", updatedCard);
//       result.push(updatedCard);
//     }
//     res.send(result);
//   } catch (err) {
//     res.send(err).status(404);
//   }
// };

exports.patchUserToCardByUid = async (req: Request, res: Response) => {
  const uid = req.params.uid.trim();
  const query = { uid: uid };
  const update = req.body;
  try {
    const updatedCard = await usertocardsModel.findOneAndUpdate(query, update, {
      returnOriginal: false,
    });
    res.send(updatedCard);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.deleteUsersToCards = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  try {
    await usertocardsModel.deleteOne({ _id: id });
    res.send("delete success");
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.getCardSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user_to_card = await usertocardsModel.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(id) },
      // $match: { _id: id },
    },
    {
      $lookup: {
        from: "flashcards",
        localField: "flashcard_id",
        foreignField: "_id",
        as: "Flashcard",
      },
    },
  ]);

  try {
    res.send(user_to_card);
  } catch (err) {
    res.send(err).status(404);
  }
};

exports.getCardScheduleByUid = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const user_to_card = await usertocardsModel.aggregate([
    {
      $match: { uid: uid },
    },
    {
      $lookup: {
        from: "flashcards",
        localField: "flashcard_id",
        foreignField: "_id",
        as: "Flashcard",
      },
    },
  ]);

  try {
    res.send(user_to_card);
  } catch (err) {
    res.send(err).status(404);
  }
};
