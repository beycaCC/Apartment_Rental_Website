const express = require('express');
const cors = require('cors');

const collection = require("./mongo")
const app = express();

// Middleware setup...
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Set token to achieve the token-based approach for authentication
const jwt = require('jsonwebtoken');
const JWT_SECRET = '728BF0115C4CD236D3DA34C17B22489F97133A5E3DC9A8C8631386B29C80F1AD'; // Replace this with a more secure secret in production


// Create route to handle GET requests to retrieve user data
app.get("/login", async(req, res) => {

    // res.send("Welcome to the users page!");
    try {
        const users = await collection.find();
        res.json(users);

    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve user data from database." });
    }

})


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await collection.findOne({ email: email });

        if (!user) {
            // User does not exist in the database
            return res.status(401).json({ message: "User does not exist." });
        }

        if (user.password !== password) {
            // Password is incorrect
            return res.status(401).json({ message: "Incorrect password." });
        }

        // Authentication successful, issue a token
        // Create a payload containing only necessary data
        const payload = { _id: user._id };

        try {
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

            console.log('Generated Token:', token);

            res.json({ message: "Login successful!", user: user, token: token });
        } catch(e) {
            console.log("Token Generation Failed.")
        }

        // try {
        //     const token = jwt.sign(user, JWT_SECRET, {expiresIn: '1h'}); // Token expires in 1 hour
        //
        //     console.log('Generated Token:', token);
        //
        //     // Authentication successful
        //     res.json({ message: "Login successful!", user: user, token: token });
        // } catch(e) {
        //     console.log("Token Generation Failed.")
        // }


    } catch (error) {
        res.status(500).json({ error: "An error occurred while logging in." });
    }
});




app.get("/signup", async(req, res) => {

    // res.send("Welcome to the users page!");
    // try {
    //     const users = await collection.find();
    //     res.json(users);
    //
    // } catch (error) {
    //     res.status(500).json({ error: "Failed to retrieve user data from database." });
    // }

})

app.post("/signup", async(req, res)=> {

    try{
        const{ userName,email, password } = req.body;

        const newUser = new collection({
            userName: userName,
            email: email,
            password: password,
        })
        // Save the new users to the database with email and password
        // await newUser.save();
        const check = await collection.findOne({email:email})
        if (check) {
            res.json("exist")
        } else {
            res.json("notexist")
            // save the new user to mongoDB
            await newUser.save();
            // res.json({ message: "User added successfully!" });
        }

    } catch(error) {
        res.status(500).json({ error: "Failed to add user to the database." })
    }

})

// Add this route to handle logout
app.post("/logout", async (req, res) => {
    // Clear the user's session/token here, for example:
    // 1. If you're using token-based authentication, you can invalidate the user's token.
    // 2. If you're using session-based authentication, you can destroy the session.

    // Respond with a success message
    res.json({ message: "Logout successful!" });
})


app.listen(8080, () => {
    console.log("Server started on port 8080");
});