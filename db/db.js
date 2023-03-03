const mongoose = require('mongoose');

const db = () => {
     return mongoose.connect(
        process.env.MONGO_URI
    ).then(()=>{
        console.log("Conexion stablished");
    }).catch((error) => {
        console.log(error.message)
    })}

module.exports = db;