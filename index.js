const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.get('/', (req,res) => {
    res.send("Tumatakbo ang Server")
});

//For MongoDB Connection
mongoose.connect("mongodb+srv://DominicEspeleta:%40wh-RSCBf5X5Q34@dsafinalproject.ge7ky.mongodb.net/",{
    UseNewURLParser:true,
    UseUnifiedTopology:true,
})
.then(()=>{console.log("MongoDB is connected")})
.catch((error) =>{console.error("MongoDB Connection Error:", error.message);
    process.exit(1);//this works if the connection fails
});

//For Middleware
app.use(cors());
app.use(express.json());

//To Import API
const submitForm = require('./API/Submit');

//To Use API
app.use("/Submit", submitForm);

//For Checking if Server is Running
const PORT = 5001;

app.listen(PORT, () => {
    console.log(`The Server is running on http://localhost:${PORT}`);
});