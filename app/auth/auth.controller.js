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

export const registerUser = asyncHandler ( async (req, res) => {

  const {email, password} = req.body;

  const isHaveUser = await prisma.user.find({
    where: {
      email
    }
  });

  if(isHaveUser) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await prisma.user.create({
    data: {
      email, password: await hash(password), name: faker.name.fullname()
    }
  });

  const token = generateToken()

  res.json(req.body);
});