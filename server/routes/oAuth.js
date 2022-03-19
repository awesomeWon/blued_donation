"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var pool_1 = require("../util/pool");
require("dotenv").config();
// const fetch = (...args: any[]) => import("node-fetch").then(({ default: fetch }) => fetch(null, args));
var express = require("express");
var User = require("../models/User");
var router = express.Router();
var axios = require("axios");
router.post("/kakao", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, e_1, userInfo, newUser;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios({
                        method: "get",
                        url: "https://kapi.kakao.com/v2/user/me",
                        headers: {
                            Authorization: "Bearer ".concat(req.body.access_token)
                        }
                    })];
            case 1:
                user = _b.sent();
                return [3 /*break*/, 3];
            case 2:
                e_1 = _b.sent();
                res.json(e_1.data);
                return [3 /*break*/, 3];
            case 3:
                if ((_a = req.session.oAuth) === null || _a === void 0 ? void 0 : _a.isLoggedIn) {
                    return [2 /*return*/, res.json({ success: false, message: "이미 로그인 되어있습니다." })];
                }
                console.log(user.data);
                return [4 /*yield*/, User.findOne({ oAuthToken: user.data.id })];
            case 4:
                userInfo = _b.sent();
                if (!!userInfo) return [3 /*break*/, 6];
                pool_1.pool.query("INSERT into user(oAuthToken, name, provider, state) \n        values('".concat(user.data.id, "','").concat(user.data.properties.nickname, "','kakao','normal')\n        "));
                newUser = new User({
                    oAuthToken: user.data.id,
                    name: user.data.properties.nickname,
                    provider: "kakao",
                    state: "normal"
                });
                return [4 /*yield*/, newUser.save()];
            case 5:
                userInfo = _b.sent();
                _b.label = 6;
            case 6:
                // 값이 없으면, 회원가입 절차 진행
                // oAuthToken에 값 저장
                // 로그인 절차 진행
                // 클라이언트에 "자체 토큰, 유저 이름, 유저 상태" 전달
                req.session.oAuth = {
                    token: userInfo.oAuthToken,
                    name: userInfo.name,
                    isLoggedIn: true
                };
                res.json({
                    sucess: true,
                    user: {
                        name: userInfo.name,
                        state: userInfo.state
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
router.post("/kakao/logout", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var session, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                session = req.session;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 5, , 6]);
                if (!session.oAuth) return [3 /*break*/, 3];
                //세션정보가 존재하는 경우
                return [4 /*yield*/, req.session.destroy(function (err) {
                        if (err) {
                            console.log(err);
                            return res.json({ success: false, message: "로그아웃 실패" });
                        }
                        else {
                            return res.json({ success: true, message: "로그아웃 성공" });
                        }
                    })];
            case 2:
                //세션정보가 존재하는 경우
                _a.sent();
                return [3 /*break*/, 4];
            case 3: return [2 /*return*/, res.json({ success: false, message: "로그인 되어있지 않음" })];
            case 4: return [3 /*break*/, 6];
            case 5:
                e_2 = _a.sent();
                console.log(e_2);
                return [2 /*return*/, res.json({ success: true, message: "알수없는 원인로그아웃 실패" })];
            case 6: return [2 /*return*/];
        }
    });
}); });
router.get("/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var session, _a, name_1, state;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                session = req.session;
                console.log(session);
                if (!session.oAuth) return [3 /*break*/, 2];
                return [4 /*yield*/, User.findOne({ oAuthToken: session.oAuth.token })];
            case 1:
                _a = _b.sent(), name_1 = _a.name, state = _a.state;
                if (!name_1)
                    return [2 /*return*/, res.json({ isLoggedIn: false, message: "유저 정보 없음" })];
                return [2 /*return*/, res.json({ isLoggedIn: true, user: { name: name_1, state: state } })];
            case 2: return [2 /*return*/, res.json({ isLoggedIn: false, message: "유저 정보 없음" })];
        }
    });
}); });
module.exports = router;
