import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../../libs/jwt.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      throw new Error("Email exist");
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: passwordHash });

    const userCreated = await newUser.save();

    const token = await createAccessToken({ id: userCreated._id });

    res.cookie("token", token);
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existEmail = await User.findOne({ email });
    if (!existEmail) {
      throw new Error("Email no exist");
    }

    const comparePassword = await bcrypt.compare(password, existEmail.password);

    if (!comparePassword) {
      throw new Error("Password faild");
    }

    const token = await createAccessToken({ id: existEmail._id });

    res.cookie("token", token);
    res.status(201).json({
      id: existEmail._id,
      username: existEmail.username,
      email: existEmail.email,
      createdAt: existEmail.createdAt,
      updatedAt: existEmail.updatedAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200)
};
