const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Priuyanshu:Priyanshu@cluster0.ufwtd.mongodb.net/EcoomerceaApi');


const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connexting to mongoDB"))

db.once('open',function(){
    console.log("Connected to Database:: MongoDB");
});

module.exports = db;