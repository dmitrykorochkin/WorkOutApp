import { prisma } from "@prisma/client";
import asyncHandler from "express-async-handler";
import { UserFields } from "../utils/user.utils.js";

export const getUserProfile = asyncHandler( async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id:req.user.id
    },
    select: UserFields
  });

  res.json(user);
});