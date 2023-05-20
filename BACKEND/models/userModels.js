 const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const useSchema = mongoose.Schema(
    {
        name:{
            type:String,
        },
         email:{
            type:String,
            unique: true
        },
         password:{
            type:String,
        },
        isAdmin:{
            type: Boolean,
            default: false,
        },
         pic:{
            type:String,
             default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
     {
            timestamps: true,
     }
);

useSchema.pre('save',async function(next){
    if(!this.isModified('password')){
       next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

useSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const User = mongoose.model("Users",useSchema);
module.exports = User;


