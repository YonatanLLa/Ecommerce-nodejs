import User from "../models/user.js"

export const register =async (req, res) => {
    try {
        const { email, username, password } = req.body;
    
        // Crea una instancia del modelo User con los datos recibidos
        const newUser = new User({ email, username, password })
    
        // Guarda el usuario en la base de datos
        await newUser.save();
    
        res.status(200).json({ message: 'Usuario registrado correctamente' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
      }
};

