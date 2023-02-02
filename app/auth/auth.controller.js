import asyncHandler from 'express-async-handler';
import { prisma } from "../prisma.js";


export const authUser = asyncHandler ( async (req, res) => {
  const user =  await prisma.user.findMany({
    where: {
      password1: '1123'
    }
  });
  res.json(user);
});