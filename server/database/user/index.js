import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: { type: string , required: true},
    email: { type: string , required: true},
    password: { type: string },
    address: [{ detail: { type: string }, for: {type: String}}],
    phoneNumber: [{ type:Number }],
}
{
  timestamps: true,
}
);

export const UserModel = mongoose.model("Users", UserSchema);