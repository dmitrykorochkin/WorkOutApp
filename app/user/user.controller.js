import { prisma } from "@prisma/client";
import { UserFields } from "../utils/user.utils.js";

export const getUserProfile = asyncHandler( async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id:1
    },
    select: UserFields
  });

  res.json(user);
});