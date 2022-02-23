import Layout from "../components/Layout"
import { RecoilRoot } from 'recoil';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
        <Layout>
          <Component {...pageProps} /> 
        </Layout>
    </RecoilRoot>
  )
}

export default MyApp
