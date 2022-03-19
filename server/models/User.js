"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var tokenSchema = mongoose.Schema({
    token: { type: String },
    expires: { type: Date }
});
var UserSchema = mongoose.Schema({
    provider: { type: String },
    name: { type: String },
    state: { type: String, "default": "normal" },
    oAuthToken: { type: String },
    token: [tokenSchema]
}, { timestamps: true });
var User = mongoose.model("uesr", UserSchema);
module.exports = User;
