import { prisma } from "@prisma/client";
import jwt from 'jsonwebtoken';
import asyncHandler from "express-async-handler";
import { UserFields } from "../utils/user.utils";

export const protect = asyncHandler(async (req, res, next) => {
  let token

  if(req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split('')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userFound = await prisma.user.findUnique({
      where: {
        id: decoded.userId
      },
      select: UserFields
    });
    if(userFound) {
      req.user = userFound;
      next();
    } else {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
  if(!token) {
    res.status(401);
    throw new Error('Not authorized, token');
  }
});