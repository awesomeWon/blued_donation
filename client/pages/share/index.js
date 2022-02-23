import Seo from '../../components/Seo'
import ShareBtn from '../../components/UploadBtn'

const Share = () => {
    return (
        <div className="container">
            <Seo title="나눔해요" />
            나눔이에요

            <ShareBtn link="/share/upload"/>

            <style jsx>{`

            `}</style>
        </div>
    )
}

export default Share
