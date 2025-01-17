const mongoose = require("mongoose");

const formSchema = new mongoose.Schema ({
    fullName: {type: String, required:true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    petAnimalType: {type: String, required: true},
    petName: {type: String, required: true},
    petVaccinationNumber: {type: String, required: true, unique: true},
});

module.exports = mongoose.model("Form", formSchema);