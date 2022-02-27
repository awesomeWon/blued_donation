import { atom, selector } from "recoil";
import axios from "axios";

const userState = atom({
    key: "userState",
    default: {
        isLoggedIn: false,
        name: null,
        state: null,
    },
});

const loginModalState = atom({
    key: "loginModalState",
    default: false,
});

const logout = selector({
    key: "run/logout",
    get: async ({ get }) => {
        const { isLoggedIn } = get(userState);
        // const { isLoggedIn } = get(githubInfoState);

        if (!isLoggedIn) {
            console.log("로그인이 되어 있지 않습니다.");
            return;
        }

        try {
            const response = await axios("/api/oAuth/kakao/logout");

            return response?.data?.success;
        } catch (err) {
            throw Error("로그아웃에 실패하였습니다.");
        }
    },
});

export { userState, loginModalState };
