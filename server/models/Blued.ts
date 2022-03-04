export {};
const mongoose = require("mongoose");

const BluedSchema = mongoose.Schema(
    {
        name: { type: String },
        phone: { type: String },
        email: { type: String },
        kakao: { type: String },
        contents: { type: String },
        type: { type: String },
        title: { type: String },
        state: { type: String },

        pic: [{ type: String }],
        author: { type: mongoose.Types.ObjectId },
    },
    { timestamps: true }
);

const Blued = mongoose.model("blued", BluedSchema);
module.exports = Blued;
