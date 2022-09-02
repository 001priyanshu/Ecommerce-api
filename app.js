const express = require("express");
const app = express();
const port = 5000;
const db = require("./config//database.js");
const {createProduct, getAllProducts} = require('./controllers/productController'); 


app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hey");
});

app.post("/createProduct",createProduct);
app.get("/getProduct",getAllProducts);

app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting the server: " ,err );

    }
    console.log(`Server is runing at port ${port}`);
})