import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user

export const registerUser = async (req,res) => {
    try {
        const {username,email,password} = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully" });
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

