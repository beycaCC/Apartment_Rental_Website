const mongoose = require("mongoose");

const url =
    "mongodb+srv://hyiyang:Christine1202_@cluster0.eh01ytg.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try{
        await mongoose.connect(url);
        console.log("Connected to MongoDB");

        //test
        // Query the "userAuthorization" collection to fetch all documents
        const data = await mongoose.model("userAuthorization").find();
        console.log("Contents of the 'userAuthorization' collection:");
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

connect();

const userAuthorizationSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = mongoose.models.userAuthorization || mongoose.model("userAuthorization", userAuthorizationSchema);
module.exports=collection;
