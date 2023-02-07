import { prisma } from "@prisma/client";
import asyncHandler from "express-async-handler";
import { UserFields } from "../utils/user.utils.js";

export const createNewExercise = asyncHandler(async (req, res) => {
  const {name,times,iconPath} = req.body;

  const exercise = await prisma.exercise.create({
    data: {
      name, times, iconPath
    }
  });
  res.json(exercise);
});

export const getExercise = asyncHandler(async (req, res) => {
  const exercise = await prisma.exercise.findMany()

  res.json(exercise);
})