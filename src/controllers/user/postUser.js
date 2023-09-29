import User from "../../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

    jwt.sign(
      {
        id: userCreated._id,
      },
      "secret123",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Error al generar el token" });
        }
        res.cookie('token', token)
        res.status(201).json({ message: "Usuario registrado exitosamente" });
      }
    );

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
