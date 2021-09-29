import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    images: [
        {
            location: { type: String, required: true}, 
        }, 
    ],
    
});

export const Imagemodel = mongoose.model("Images",ImageSchema);