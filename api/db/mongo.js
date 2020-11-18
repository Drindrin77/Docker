const mongoose = require("mongoose");

// Connecting to MongoDB
mongoose.connect("mongodb://mongodb:27017/");
// If there is a connection error send an error message
mongoose.connection.on("error", error => {
    console.log("ERROR:  Mongo Database connection error:", error);
});
// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
    console.log("Connected to Mongo Database!");
});

module.exports = mongoose;