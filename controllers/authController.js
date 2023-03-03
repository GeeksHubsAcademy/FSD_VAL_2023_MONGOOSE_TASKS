
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

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

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({email: email});

        if (!user) {
            return res.send('Wrong Credentials')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.send('Wrong Credentials')
        }

        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                roleId: user.role_id
            },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

        return res.json(
            {
                success: true,
                message: "Login successfully",
                token: token
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}

module.exports = authController