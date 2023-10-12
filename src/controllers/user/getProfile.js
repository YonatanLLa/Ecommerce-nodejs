import User from "../../models/user.js";

export const profile = async (req, res) => {
    try {
        const userFound = await User.findById(req.user.id)
        if (!userFound) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro al traer todo los datos"})
    }    
}