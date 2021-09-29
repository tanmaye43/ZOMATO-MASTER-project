import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name: { type: String , required: true},
    descript: { type: String , required: true},
    isveg: { type: Boolean, required: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true},
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    price: { type:Number, defalut: 150, required: true},
    addOns: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
        },
    ],

    restaurant: {
        type: mongooes.Types.ObjectId,
        ref: "Restauants",
        required: true,
    },
});

export const FoodModel = mongoose.model("Foods", FoodSchema);