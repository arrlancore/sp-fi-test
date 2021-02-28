import Document, { Head, Main, NextScript, Html } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <Html>
                <Head>
                  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                  <meta http-equiv="x-ua-compatible" content="ie=edge" />
                  <meta name="Author" content="Dwiki A." />
                  <link rel="Publisher" href="https://www.facebook.com/HotelFamilyInn/" />
                  <link rel="Canonical" href="https://familyinnhotel.com" />



                  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css" />
                  <link rel="stylesheet" type="text/css"
                          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700" />

                  <link href="/css/bootstrap.min.css" rel="stylesheet" />

                  <link href="/css/mdb.min.css" rel="stylesheet" />

                  <link href="/css/style.css" rel="stylesheet" />
                  <link rel="stylesheet" href="/css/blueimp-gallery.min.css" />


                  <link rel="apple-touch-icon" sizes="180x180" href="https://familyinnhotel.com/img/apple-touch-icon.png" />
                  <link rel="icon" type="image/png" href="https://familyinnhotel.com/img/favicon-32x32.png" sizes="32x32" />
                  <link rel="icon" type="image/png" href="https://familyinnhotel.com/img/favicon-16x16.png" sizes="16x16" />
                  <link rel="manifest" href="/img/manifest.json" />
                  <link rel="mask-icon" href="https://familyinnhotel.com/img/safari-pinned-tab.svg" color="#33cc33" />
                  <link rel="shortcut icon" href="https://familyinnhotel.com/img/favicon.ico" />
                  <meta name="msapplication-config" content="http://familyinnhotel.com/img/browserconfig.xml" />
                  <meta name="theme-color" content="#ffffff" />
                </Head>
                <body id="main-body">
                    <Main />
                    <NextScript />

                    <script data-cfasync="false" src="/js/email-decode.min.js"></script>
                    
                    <script type="text/javascript" src="/js/jquery-3.1.1.min.js"></script>

                    <script type="text/javascript" src="/js/tether.min.js"></script>

                    <script type="text/javascript" src="/js/bootstrap.min.js"></script>

                    <script type="text/javascript" src="/js/mdb.min.js"></script>

                	<script type="text/javascript" src="/js/blueimp-gallery.min.js"></script>

    
                </body>
            </Html>
        );
    }
}

export default MyDocument
