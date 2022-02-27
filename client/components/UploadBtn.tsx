import { useRouter } from "next/router"

const UploadBtn = ({link}) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push(link)}>
            <div className="btn-container">
                <div className="upload-btn">
                </div>
            </div>

            <style jsx>{`
                .btn-container{
                    margin : 0 auto;
                    max-width: 640px;
                    width: 95vw;
                    position: absolute;
                    bottom: 0;
                }

                .upload-btn{
                    width: 3rem;
                    height: 3rem;
                    background-color: tomato;
                    border-radius: 50%;
                    position: absolute;
                    bottom: 1rem;
                    right: 0.5rem;
                }
            `}</style>
        </div>
    )
}

export default UploadBtn
