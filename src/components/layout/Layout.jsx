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

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.4846fess.site/" />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:image:alt" content="4846Fess | 48 & 46 Groups Fans Autobase based in Indonesia🇮🇩" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1500" />
        <meta name="twitter:image:height" content="500" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content="@4846fess" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />
        <meta property="og:image:alt" content="4846Fess | 48 & 46 Groups Fans Autobase based in Indonesia🇮🇩" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="4846Fess" />
        <meta property="og:url" content="https://www.4846fess.site/" />

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