import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from '../../libs/jwt.js'

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const existEmail = await User.findOne({email})
    if (existEmail) {
      throw new Error("Email exist")
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: passwordHash });

    const userCreated = await newUser.save();

    const token = await createAccessToken({id: userCreated._id})

    res.cookie('token', token)
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existEmail = await User.findOne({email, username})
    if (!existEmail) {
      throw new Error("Email no exist")
    }
    console.log(existEmail);
    // const passwordHash = await bcrypt.hash(password, 10);
    // const newUser = new User({ email, username, password: passwordHash });

    // const userCreated = await newUser.save();

    // const token = await createAccessToken({id: userCreated._id})

    // res.cookie('token', token)
    // res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};