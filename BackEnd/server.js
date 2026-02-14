require('dotenv').config();
const cors = require("cors");
const express = require("express");
const connectDB = require('./config/db');
const app = express();


//to user json as a response
app.use(express.json());
app.use(cors());

//routing files
const register = require('./routes/register');
const login = require("./routes/login");
const product = require("./routes/admin");
const cart = require("./routes/cart");

//DB connetion
connectDB();


//Port
const PORT = process.env.PORT || 8080;


app.get("/",(req,res) => {
    res.send("Hello");
});


// Auth -- Start


//register account
app.use("/api/register",register);


//login account
app.use("/api/login",login);


// Auth -- End







// Product(Admin) -- Start

app.use("/api/product",product);

// Product(Admin) -- end




// cart ---start

app.use("/api/cart",cart);
// cart ---end



app.listen(PORT,"0.0.0.0",() => {
    console.log(`Server is listening at ${PORT}`);
})