const express = require('express');
const M_User = require('../models/M_user');
const userRouter = express.Router();

//add User
userRouter.post("/add", async function(request, result) {
    try {
        let NewUser = new M_User(request.body);
        let saving = await NewUser.save();
        result.send({ user: saving, msg: "User added" });
    } catch (error) {
        console.log(error);
    }
});

//Get all users
userRouter.get("/", async function(request, result) {
    try {
        let users = await M_User.find();
        result.send({ user: users, msg: "All users" });
    } catch (error) {
        console.log(error);
    }
});


//get one user
userRouter.get("/:id", async function(request, result) {
    try {
        let user = await M_User.findById(request.params.id);
        result.send({ user: user, msg: "user found" });
    } catch (error) {
        console.log(error);
    }
});

//delete user
userRouter.delete("/:id", async function(request, result) {
    try {
        await M_User.findByIdAndDelete(request.params.id);
        result.send({ msg: "user deleted" });
    } catch (error) {
        console.log(error);
    }
});

//Update user
userRouter.put("/:id", async function(request, result) {
    try {
        await M_User.findByIdAndUpdate({ _id: request.params.id }, { $set: {...request.body } });
    } catch (error) {
        console.log(error);
    }
})


module.exports = userRouter;