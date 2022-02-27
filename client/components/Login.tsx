import KakaoLogin from "react-kakao-login";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "./states";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setOpenLoginModal }) => {
    const [user, setUser] = useRecoilState(userState);

    const onKakaoSuccess = (res: any) => {
        axios
            .post("/api/oAuth/kakao", { access_token: res.response.access_token })
            .then((res) => {
                console.log(res.data);
                setUser({
                    name: res.data.user.name,
                    state: res.data.user.state,
                    isLoggedIn: true,
                });
            })
            .catch(console.log);

        setOpenLoginModal(false);
    };

    const onKakaoFail = (res: any) => {
        alert("err");
        setOpenLoginModal(false);
    };

    const onKakaoLogout = () => {
        alert("err");
        setOpenLoginModal(false);
    };

    const onNaver = () => {
        toast("현재 준비 중입니다.");
    };

    return (
        <div className="container">
            <ToastContainer autoClose={1500} />

            <div className="modal">
                <div className="close" onClick={() => setOpenLoginModal(false)}>
                    X
                </div>

                <div className="title">{`${user.isLoggedIn ? "로그아웃" : "로그인"}`}</div>

                <div className="oAuths">
                    <div className="kakao-login">
                        <KakaoLogin
                            token={"e7a9b67b241a2bd71f40bfaa7dbb7a06"}
                            onSuccess={(res) => onKakaoSuccess(res)}
                            onFail={(res) => onKakaoFail(res)}
                            onLogout={(res) => onKakaoLogout()}
                            // getProfile={true}
                            className="kakao-login-btn"
                        />
                    </div>

                    <div className="oAuth-provider naver social__button" onClick={() => onNaver()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="17" viewBox="0 0 32 32">
                            <g id="soc020">
                                <g id="Regular-10" data-name="Regular">
                                    <g id="layer1">
                                        <path
                                            style={{ fill: "white" }}
                                            id="path2830"
                                            d="M3.2,4.632,3.128,27.3l8.912.036.036-9.167L11.489,15.3,19.924,27.3l8.948.073L28.835,4.705l-8.948-.036.183,9.351.587,3.337L12.076,4.669,3.2,4.632Z"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container {
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    background-color: rgba(255, 255, 255, 0.8);
                    position: fixed;
                    display: flex;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 9999;
                }
                .modal {
                    height: 200px;
                    width: 320px !important;
                    margin: auto;
                    background-color: #fff;
                    padding: 1rem;
                    border-radius: 1rem;
                    box-shadow: 1px 1px 2px 1px rgb(0 0 0 / 20%);
                }
                .close {
                    display: flex;
                    flex-direction: row-reverse;
                    margin-left: auto;
                    font-size: 1.25rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                .title {
                    font-size: 1rem;
                    font-weight: bold;
                    text-align: center;
                    margin: 0 auto;
                }
                .oAuths {
                    display: flex;
                    justify-content: center;
                    margin-top: 2rem;
                    gap: 1rem;
                    line-height: 1rem;
                }

                .oAuths .naver {
                    background-color: #19ce60;
                }
                .social__button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 50px;
                    border: 0;
                    border-radius: 4px;
                    // box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default Login;
