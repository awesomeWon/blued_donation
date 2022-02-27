import Seo from "../../components/Seo";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../components/states";
import { useRouter } from "next/router";

const My = () => {
    const [user, setUser] = useRecoilState(userState);
    const router = useRouter();

    const onKakaoLogout = async () => {
        const logout = await axios.post("/api/oAuth/kakao/logout");

        if (logout.data.success) {
            setUser({
                ...user,
                name: null,
                state: null,
                isLoggedIn: false,
            });

            router.push("/");
        }
    };

    return (
        <div>
            <Seo title="나의 기록" />
            My
            <div onClick={() => onKakaoLogout()}>로그아웃</div>
        </div>
    );
};

export default My;
