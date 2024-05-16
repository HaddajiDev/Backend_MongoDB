const mongoose = require('mongoose');


async function db_Connect() {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Data base Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = db_Connect;