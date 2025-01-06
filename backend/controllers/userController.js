// Route for user login
async function loginUser(req,res){
}

// Route for user registration
async function registerUser(req, res){
    res.json({msg: "Registration"});
}

// Router for Admin login
async function adminLogin(req, res){
}

export {loginUser, registerUser, adminLogin};