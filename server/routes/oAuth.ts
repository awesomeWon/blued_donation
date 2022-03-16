import { pool } from "../util/pool";

export {};
require("dotenv").config();
// const fetch = (...args: any[]) => import("node-fetch").then(({ default: fetch }) => fetch(null, args));
var express = require("express");
const User = require("../models/User");
var router = express.Router();
const axios = require("axios");

router.post("/kakao", async (req: any, res: any) => {
    let user: any;
    try {
        user = await axios({
            method: "get",
            url: "https://kapi.kakao.com/v2/user/me",
            headers: {
                Authorization: `Bearer ${req.body.access_token}`,
            },
        });
    } catch (e: any) {
        res.json(e.data);
    }

    if (req.session.oAuth?.isLoggedIn) {
        return res.json({ success: false, message: "이미 로그인 되어있습니다." });
    }

    console.log(user.data);

    let userInfo = await User.findOne({ oAuthToken: user.data.id });

    // 카카오 서버에서 온 토큰을 데이터 베이스 oAuthToken에서 조회
    if (!userInfo) {
        pool.query(`INSERT into user(oAuthToken, name, provider, state) 
        values('${user.data.id}','${user.data.properties.nickname}','kakao','normal')
        `);
        // 조회된 유저가 없다면 새로 생성
        const newUser = new User({
            oAuthToken: user.data.id,
            name: user.data.properties.nickname,
            provider: "kakao",
            state: "normal",
        });
        userInfo = await newUser.save();
    }

    // 값이 없으면, 회원가입 절차 진행
    // oAuthToken에 값 저장

    // 로그인 절차 진행
    // 클라이언트에 "자체 토큰, 유저 이름, 유저 상태" 전달

    req.session.oAuth = {
        token: userInfo.oAuthToken,
        name: userInfo.name,
        isLoggedIn: true,
    };

    res.json({
        sucess: true,
        user: {
            name: userInfo.name,
            state: userInfo.state,
        },
    });
});

router.post("/kakao/logout", async (req: any, res: any) => {
    var session = req.session;
    try {
        if (session.oAuth) {
            //세션정보가 존재하는 경우
            await req.session.destroy(function (err: any) {
                if (err) {
                    console.log(err);
                    return res.json({ success: false, message: "로그아웃 실패" });
                } else {
                    return res.json({ success: true, message: "로그아웃 성공" });
                }
            });
        } else {
            return res.json({ success: false, message: "로그인 되어있지 않음" });
        }
    } catch (e) {
        console.log(e);
        return res.json({ success: true, message: "알수없는 원인로그아웃 실패" });
    }
    // return res.json({success: false, message: "로그아웃 실패"});
});

router.get("/user", async (req: any, res: any) => {
    let session = req.session;
    console.log(session);

    if (session.oAuth) {
        const { name, state } = await User.findOne({ oAuthToken: session.oAuth.token });

        if (!name) return res.json({ isLoggedIn: false, message: "유저 정보 없음" });

        return res.json({ isLoggedIn: true, user: { name, state } });
    } else {
        return res.json({ isLoggedIn: false, message: "유저 정보 없음" });
    }
});

module.exports = router;
