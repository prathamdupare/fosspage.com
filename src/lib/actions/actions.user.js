import User from "../models/user.model";

const { connectToDb } = require("../mongodb");

const createUser = async ({ id, name, email, image, bio }) => {
  await connectToDb();

  try {
    await User.create({
      id: id,
      name: name,
      email: email,
      image: image,
      bio: bio,
      onboarded: false,
    });
  } catch (error) {
    console.log(error, "error creating user");
  }
};

export default createUser;

export const isRegistered = async (id) => {
  await connectToDb();

  const user = await User.findOne({ id });
  console.log(user, "Found user in database");

  if (user) {
    return true;
  }
};
