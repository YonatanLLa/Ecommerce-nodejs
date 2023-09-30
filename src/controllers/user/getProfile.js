import User from "../../models/user.js"

export const profile = async (req, res) => {
    try {
        const userAll = await User.find()
        res.status(200).json(userAll)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro al traer todo los datos"})
    }    
}