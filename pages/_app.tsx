// noinspection JSUnusedGlobalSymbols

import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/layout/layout";
import Head from "next/head";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Layout>
            <Head>
                <title>NextJS Blog</title>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
