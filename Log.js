const mongoose = require('mongoose');
const LogSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    date: Date,
    image: String
});
module.exports = mongoose.model('Log', LogSchema);
