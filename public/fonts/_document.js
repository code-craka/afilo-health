// _document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/PlusJakartaSans-Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <style>
                        {`
              @font-face {
                font-family: 'Plus Jakarta Sans';
                src: url('/fonts/PlusJakartaSans-Regular.woff2') format('woff2');
                font-weight: 400;
                font-style: normal;
              }
              body {
                font-family: 'Plus Jakarta Sans', sans-serif;
              }
            `}
                    </style>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;