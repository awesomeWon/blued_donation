import Seo from "../../components/Seo";
import Image from "next/image";

const upload = () => {
    return (
        <div>
            <Seo title="헌혈증 요청" />

            <div className="thx-upload">
                <Image src="/cheer-up.png" width="128" height="128" />

                <br />

                <h1 className="title">헌혈 열심히 찾아볼께요!</h1>
            </div>

            <div className="form">
                <div className="form-title center">정보입력</div>

                <div className="">제목</div>
                <input className="" />

                <div className="">필요타입 (현혈증, 지정헌혈)</div>
                <input className="" />

                <div className="">위치</div>
                <input className="" />

                <div className="">이름</div>
                <input className="" />

                <div className="">전화번호</div>
                <input className="" />

                <div className="">이메일</div>
                <input className="" />

                <div className="">기타 연락수단</div>
                <input className="" />

                <div className="">필요 이유</div>
                <textarea className="" />

                <div style={{ height: "10rem" }}></div>
                <div className="submit-btn">도움요청하기</div>
            </div>

            <style jsx>{`
                .thx-upload {
                    text-align: center;
                }
                .form {
                    background-color: smokewhite;
                    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                    width: 95vw;
                    max-width: 640px;
                    border-top-right-radius: 3rem;
                    border-top-left-radius: 3rem;
                    padding: 1rem;
                }
                .center {
                    margin: 0 auto;
                    text-align: center;
                }
                .form-title {
                    font-size: 1.125rem;
                    font-weight: bold;
                }
                .submit-btn {
                    background-color: #ff4b4b;
                    font-size: 1.25rem;
                    padding: 0.5rem 1rem;
                    border-radius: 1rem;
                    font-weight: bold;
                    color: white;
                    margin: 0 auto;
                    max-width: 300px;
                    text-align: center;
                    margin-top: 3rem;
                    position: fixed;
                    bottom: 2rem;
                    right: 0;
                    left: 0;
                }
            `}</style>
        </div>
    );
};

export default upload;
