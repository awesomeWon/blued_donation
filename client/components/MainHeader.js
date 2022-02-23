import { useState } from "react";
import { useRouter } from "next/router";
import Login from "./Login";
import Link from "next/link";
import { useRecoilState } from 'recoil';
import { userState } from './states';
import { BiUserCircle } from "react-icons/bi";

const MainHeader = () => {
    const [openLogModal, setOpenLoginModal] = useState(false);
    const [user, setUser] = useRecoilState(userState);
    const router = useRouter();
    router.route.split("/")[1]

    const URL_DATA = [
        {title : "홈", url : ""},
        {title : "나눔해요", url : "share"},
        {title : "필요해요", url : "need"},
        {title : "감사인사", url : "thx"},
    ]

    return (
        <div className="container">

            <div className="upper">
                <div className="site-title">blued</div>
 

                {!user.isLoggedIn
                    ? <div onClick={() => setOpenLoginModal(true)}> <BiUserCircle size={"32"} color={`${ router.route.split("/")[1] === "my" ? "#ff4b4b" : ""}` }/> </div> 
                    : <div className="info-area" onClick={() => router.push("/my")}> {user.name.slice(0,3)}님😁 <BiUserCircle size={"32"} color={`${ router.route.split("/")[1] === "my" ? "#ff4b4b" : ""}` }/> </div> 
                }
                    
            </div>

            <div className="under">
                {URL_DATA.map( ({title, url}) => (
                    <Link key={title} href={`/${url}`}><div className={`menu ${ router.route.split("/")[1] === url ? "selected" : ""}` } >{title}</div></Link>
                ))}
            </div>

            {openLogModal && <Login setOpenLoginModal={setOpenLoginModal}/> }

            <style jsx>{`
                .container{
                    padding-bottom: 0.5rem;
                    position: relateive;
                    margin-bottom: 1rem;
                    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                    border-bottom-right-radius : 1rem;
                    border-bottom-left-radius : 1rem;

                }
                .upper{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding : 1rem;
                    font-size: 1.25rem;
                }
                .site-title{
                    font-weight: bold;
                    color : #ff4b4b;
                }
                .under{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }

                .menu{
                    font-weight: bold;
                    padding : 0.2rem;
                    margin : 0.2rem;
                    cursor : pointer;
                    font-size: 1.25rem;
                }

                .selected{
                    color : #ff4b4b;
                    border-bottom: 3px solid #ff4b4b;
                }

                .info-area{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap : 0.5rem;
                    font-size: 0.875rem;
                }
            `}</style>
        </div>
    )
}

export default MainHeader
