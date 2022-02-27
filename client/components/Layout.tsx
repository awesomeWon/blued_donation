import MainHeader from "./MainHeader";
import { useRecoilState } from "recoil";
import { userState } from "./states";
import { useEffect } from "react";
import axios from "axios";

function MyApp({ children }) {
    const [user, setUser] = useRecoilState(userState);

    useEffect(() => {
        (async () => {
            const getUser = await axios.get("/api/oAuth/user");

            if (getUser.data.isLoggedIn) {
                setUser({
                    name: getUser.data.user.name,
                    state: getUser.data.user.state,
                    isLoggedIn: true,
                });
            } else {
                setUser({
                    name: "",
                    state: "",
                    isLoggedIn: false,
                });
            }
        })();
    }, []);

    return (
        <div>
            <MainHeader />
            <br />
            <div id="component">{children}</div>

            <style jsx>{`
                #component {
                    padding: 0 0.5rem;
                }
            `}</style>
        </div>
    );
}

export default MyApp;
