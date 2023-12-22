const express = require("express");
const router = express.Router();

const User = require('../models/user');


router.get("/getAllUsers", async (req, res) => {
    try {

        const user = await User.find();
        res.status(200).json(user);

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.send(user)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


router.post("/register", async (req, res) => {

    const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        CNP: req.body.CNP,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const user = await newUser.save();
        res.send('user registered !');
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/login", async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email, password: password })
       if(user){
        res.send(user);
       }
       else{
        return res.status(400).json({message:'Login failed!'})
       }
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;