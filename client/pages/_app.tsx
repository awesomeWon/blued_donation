import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </RecoilRoot>
    );
}

export default MyApp;
