import jwt from "jsonwebtoken";

const generateToken = (id) => {
  try {
    const token = jwt.sign({ id }, process.env.JWT_TOKEN);
    return token;
  } catch (error) {
    console.log(error.message);
  }
};

export default generateToken;
