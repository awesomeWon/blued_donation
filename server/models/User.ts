export {};
const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
    token: { type: String },
    expires: { type: Date },
});

const UserSchema = mongoose.Schema(
    {
        provider: { type: String },
        name: { type: String },
        state: { type: String, default: "normal" },
        oAuthToken: { type: String },
        token: [tokenSchema],
    },
    { timestamps: true }
);

const User = mongoose.model("uesr", UserSchema);
module.exports = User;
