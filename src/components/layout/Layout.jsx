import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const defaulTitle = '4846Fess';
const defaultDesc = '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩';
const defaultImage = '/assets/images/banner.png';

const Layout = (props) => {
  const { children, title, description, image } = props;

  const metaTitle = title !== null ? title : defaulTitle;
  const metaDescription = description !== null ? description : defaultDesc;
  const metaImage = image !== null ? image : defaultImage;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content="#ebc49f" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />

        <link rel="manifest" href="/manifest.json" />

        <title>{metaTitle}</title>

        <meta property="og:url" content="https://www.4846fess.site/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="4846fess.site" />
        <meta property="twitter:url" content="https://www.4846fess.site/" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:creator" content="@4846fess" />

        <meta name="application-name" content="4846Fess" />
        <meta name="description" content={metaDescription} />

        <title>{metaTitle}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;