const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
});

const M_User = mongoose.model("User", UserSchema);
module.exports = M_User;