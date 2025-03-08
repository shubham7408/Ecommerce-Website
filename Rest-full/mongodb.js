const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://shubhambhosale2360:oYSjsMl1IZfFzBAh@cluster0.wn3az.mongodb.net/"
);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in Database connection:" + err);
  }
});

const userScheama = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    isActive : Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    role: { type: String, default: "user" }
});

const User = mongoose.model("User", userScheama);

async function createUser() {
    try {
        const user =  await User.create({
            name: "Shubham",
            email:"ShubhamBhosale@gmail.com",
            password:"123456789",
            age:22,
            isActive:true
        });
        console.log({success: true, user});
    } catch (error) {
        console.log(error);
        console.log({success: false, message:error.message});
    }
    finally{
        mongoose.connection.close();
    }
}

async function getUsers() {
    try {
        const users = await User.find({});
        console.log({success:true, users});
    } catch (error) {
        console.log(error);
        console.log({sucess:false,message:error.message});   
    }
    finally{
        mongoose.connection.close();
    }
}

async function newUser () {
    try {
        const user = await User.create({
            name: "Siddhesh",
            email: "siddhesgundal@gmail.com",
            password: "Siddhesh@123",
            age: 23,
            isActive: true,
            role: "admin"
        });
        console.log({success:true, user});
    } catch (error) {
        console.log(error);
        console.log({sucess:false,message:error.message});
    }
    finally{
        mongoose.connection.close();
    }
}

async function findUserByID(id) {
    try {
        const user = await User.findById(id);
        console.log({success:true, user});
    } catch (error) {
        console.log(error);
        console.log({success:false,message:error.message});
    }
    finally{
        mongoose.connection.close();
    }
}

async function getDataemail(){
    try {
        const user = await User.find().select("name email -_id");
        console.log({success:true, user});
    } catch (error) {
        console.error(error);
        console.error({success:false,message:error.message});
    }
    finally{
        mongoose.connection.close();
    }
}

async function updateUser(id) {
    try {
        const user = await User.findByIdAndUpdate(id, {
            name: "Shubham Bhosale",
            email: "Shubhambhosale2360@gmail.com",
            password: "Shubham@123",
            age: 22,
            isActive: true,
            role: "admin"
        }, {new:true});
        console.log({success:true, user});
    } catch (error) {
        console.error(error);
        console.error({success:false,message:error.message});
    }
    finally{
        mongoose.connection.close();
    }
}

getUsers();

