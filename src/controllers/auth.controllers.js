export const register = (req, res) => {
    try {
        const { email, username, password } = req.body
        console.log(email, username, password);
        res.status(200).json({hola: "como estas"})
    } catch (error) {
        res.status(500).json(error)
    }
};

