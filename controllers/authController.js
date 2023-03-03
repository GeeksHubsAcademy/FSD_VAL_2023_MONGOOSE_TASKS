
const User = require("../models/User");
const bcrypt = require("bcrypt")


const authController = {}

authController.register = async (req, res) => {
    try {
        const { name, password, email } = req.body;

        const encryptPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create({
            name: name,
            password: encryptPassword,
            email: email,
            role_id: "64019a818ba93a9e97fbd0a4"
        })

        return res.json(
            {
                success: true,
                message: "User registered",
                data: newUser
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error: error.message
            })
    }
}

module.exports = authController