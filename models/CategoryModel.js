const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name Category Required"],
    },
    images: [{
        img: {
            type: String
        }
    }],
    status: {
        type: String,
        enum: ["Active", "Block"],
        default: "Active"
    },
});

module.exports = mongoose.model("Category", categorySchema);
