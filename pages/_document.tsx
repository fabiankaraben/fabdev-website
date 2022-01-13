import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/ga'

const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* enable analytics script only for production */}
          {isProduction && (
            <>
              {/* Global site tag (gtag.js) - Google Analytics */}
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
              <script dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}');
              `,
              }}
              />
            </>
          )}
        </body>
      </Html>
    )
  }
}
