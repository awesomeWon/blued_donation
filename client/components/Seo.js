import Head from "next/head"

const Seo = ({title}) => {
    return (
        <div>
            <Head>         
                <title> {title} | 헌혈증 나눔을 통한 더 따뜻한 세상</title>
            </Head>       
        </div>
    )
}

export default Seo
