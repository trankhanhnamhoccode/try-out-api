import mongoose, { Schema, Types } from "mongoose";

const newUser = new Schema({
    username:{
        type: String,
    },
    password: Schema.Types.Mixed
})

const User = mongoose.model('users',newUser);
export default User;