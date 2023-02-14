let bcrypt = require("bcryptjs");
let password = "admin@1234";
async function convertPasswordInHash(password){
        // signUp
    let salt = await bcrypt.genSalt();      // by default round 10 
    console.log(salt)
    let hashPassword  = await bcrypt.hash(password,salt);   // it will convert password in hash
    console.log(hashPassword);
    //return hashPassword;

    // signIn
    let myHashConvertPassword = await bcrypt.compare("admin@123",hashPassword);
    console.log(myHashConvertPassword);
}
convertPasswordInHash(password);