// noinspection JSUnusedGlobalSymbols

import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "../components/layout/layout";
import Head from "next/head";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

NProgress.configure({
    minimum: 0.35,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
