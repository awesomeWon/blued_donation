import Seo from "../../components/Seo";
import ShareBtn from "../../components/UploadBtn";
import Image from "next/image";

const Thx = () => {
    return (
        <div>
            <Seo title="감사인사" />
            {/* <ShareBtn link="/thx/upload"/> */}

            <div className="img">
                <Image src="/working.png" width="200px" height="200px" />
            </div>

            <br />

            <div className="title">현재 준비 중입니다 😅</div>
            <div className="sub-title">곧 뵐께요!</div>

            <style jsx>{`
                .img {
                    text-align: center;
                }
                .title {
                    text-align: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .sub-title {
                    text-align: center;
                    margin-top: 1rem;
                }
            `}</style>
        </div>
    );
};

export default Thx;
