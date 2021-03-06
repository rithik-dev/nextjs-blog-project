// noinspection JSUnusedGlobalSymbols

import Document, {Head, Html, Main, NextScript} from "next/document";

// noinspection HtmlRequiredTitleElement
class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang={'en'}>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                <div id={'notifications'}/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;
