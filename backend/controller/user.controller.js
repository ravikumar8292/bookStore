import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// function for signup page 

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 8);
    const createUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createUser.save();
    res.status(200).json({ message: "New User Created Successfully" });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// functio  for login page

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res
        .status(400)
        .json({ message: "Invailid Username and Password" });
    } else {
      res.status(200).json({
        message: "Login Successful",
        user: {
          _id: user.id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error" , error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};
