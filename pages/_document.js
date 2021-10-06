import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Caramel&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src='https://smtpjs.com/v3/smtp.js'></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument