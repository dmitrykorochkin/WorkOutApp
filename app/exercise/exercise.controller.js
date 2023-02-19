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

// ************************************************************************************************
//Update 

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
} catch (error) {
  res.status(404);
  throw new Error('Exercise not found');
}  
});
// ************************************************************************************************

// ************************************************************************************************
//Delete 

export const deleteExercise = asyncHandler(async (req, res) => {

try{
    const exercise = await prisma.exercise.delete({
    where: {
      id: +req.params.id
    },
  });
  res.json({message: 'Exercise deleted'});
} catch (error) {
  res.status(404);
  throw new Error('Exercise not found');
}  
});
// ************************************************************************************************

export const getExercise = asyncHandler(async (req, res) => {
  const exercise = await prisma.exercise.findMany()

  res.json(exercise);
})