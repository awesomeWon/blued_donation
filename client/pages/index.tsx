import React, { useState } from "react";
import Head from "next/head";
import HomeListThumb from "../components/HomeListThumb";
import Seo from "../components/Seo";

const Index = () => {
    return (
        <div>
            <Seo title="홈" />
            <div className="main-img">이미지 배너</div>

            <HomeListThumb title="나눔해요" img="share.svg" />

            <br />
            <br />

            <HomeListThumb title="필요해요" img="need.svg" />

            <div id="footer">
                <div className="home-footer-copy">Copyright© blued.donation </div>
                <div className="home-footer-copy">All Rights Reserved.</div>
                <div style={{ height: "10px" }}></div>
                문의메일
                <div className="home-footer-copy">blued.donation@gmail.com</div>
            </div>
        </div>
    );
};

export default Index;
