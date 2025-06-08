const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Register route
router.post("/register", async (req, res) => {
    // Create a new user object
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, // Fixed the typo: should be req.body, not res.body
    });

    try {
        // Save the user in the database
        await newUser.save();
        res.send("User registered successfully");
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
});

// Login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email and password
        const user = await User.findOne({ email, password }); // Fixed typo: findOne, not findone
        if (user) {
            res.send(user);
        } else {
            res.status(400).json({ message: "Login failed" });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
});
// GET all users
router.get("/getAllUsers", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
});


module.exports = router;
