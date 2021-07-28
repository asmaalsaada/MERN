const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    set_up: {
        type: String,
        minlength: [10, "Setup must be at least 10 characters long"],
    },
	punch_line: {
        type: String,
        minlength: [3, "punch line must be at least 3 characters long"],
    },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke; 