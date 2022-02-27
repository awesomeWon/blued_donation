import Image from 'next/image'

const HomeListThumb = ({title, img}) => {
    return (
        <div>
            <div className="list-thumb-box">
                <div className="list-title">{title}</div>

                <div className="apply">
                    <Image src={`/${img}`} alt="me" width="600" height="300"/>
                </div>



            </div>


            <style jsx>{`
                .list-thumb-box{
                    border-radius : 1rem;
                    padding : 1rem;
                    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 20%);
                }
                .list-title{
                    font-weight: bold;
                    font-size: 1.25rem;
                    padding-bottom : 0.5rem;
                    border-bottom : 1px solid #ccc;
                }
            `}</style>
        </div>
    )
}

export default HomeListThumb
