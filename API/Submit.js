const express = require("express");
const router = express.Router();
const Form = require("../Models/Form");
router.post("/", async (req, res) => {

    const {fullName, age, email, address, petAnimalType, petName, petVaccinationNumber} = req.body;

    try {
        //Gumagawa to ng bagong document sa database
        const entry = new Form({fullName, age, email, address, petAnimalType, petName, petVaccinationNumber});
        const savedEntry = await entry.save();
        console.log("Saved Data:", savedEntry);

        res.status(201).json({message:"Form Submitted Successfully", data: savedEntry});

    } catch (error) {
        console.log("Error saving form data: ", error);

        if(error.code === 11000)
        {
            res.status(400).json({message: "Email Already Exists!"});
        }
        else{
            res.status(500).json({message: "Error saving form data: "});
        }
    }
    
});

module.exports = router;