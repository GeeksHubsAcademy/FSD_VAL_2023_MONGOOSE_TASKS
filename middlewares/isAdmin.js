const isAdmin = (req,res,next) => {
    try {
        if(req.roleId !== "6401b296c85b8fd4aa7228bb") {
            return res.send('Not privileges');
        }
        
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = isAdmin;