import HomeListThumb from "../components/HomeListThumb"
import Seo from '../components/Seo'


const Index = () => {
  return (
    <div>
      <Seo title="홈" />
      <div className="main-img">이미지 배너</div>
  
      <HomeListThumb title="나눔해요" img="share.svg"/>
      
      <br /><br />

      <HomeListThumb title="필요해요" img="need.svg"/>


      <div id="footer">

        <div className="home-footer-copy">Copyright© blued.donation </div>
        <div className="home-footer-copy">All Rights Reserved.</div>

        <div style={{ height: "10px" }}></div>
        문의메일
        <div className="home-footer-copy">blued.donation@gmail.com</div>
      </div>

      <style jsx>{`
        .main-img{
          height : 60vw;
          max-height : 384px;
          width : 90vw;
          max-width : 576px;
          margin : 0 auto;
          margin-bottom : 1rem;
          background-color : #f5f5f5;
          border-radius : 1rem;
          box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 20%);
        }
        #footer{
          margin-top : 5rem;
          background-color : #f5f5f5;
          text-align : center;
          color : gray;
          font-size: 0.875rem;
          padding : 2rem;
          border-top-right-radius : 1rem;
          border-top-left-radius : 1rem;
        }


      `}</style>
    </div>
  )
}

export default Index
