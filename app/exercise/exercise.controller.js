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

export const updateExercise = asyncHandler(async (req, res) => {
  const {name,times,iconPath} = req.body;

try{
    const exercise = await prisma.exercise.update({
    where: {
      id: +req.params.id
    },
    data: {
      name, times, iconPath
    }
  });
  res.json(exercise);
} catch (error) {console.log(error);}

  
});

export const getExercise = asyncHandler(async (req, res) => {
  const exercise = await prisma.exercise.findMany()

  res.json(exercise);
})