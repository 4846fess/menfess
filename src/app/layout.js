import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import ThemeSwitch from "@/components/custom-provider/ThemeSwitch";
import ogImage from './opengraph-image.png';
import twImage from './twitter-image.png';

const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Home | 4846Fess',
  description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
  image: '/assets/images/logo.png',
  twitter: {
    card: 'summary',
    site: '@4846fess',
    title: 'Home | 4846Fess',
    description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
    image: twImage,
    creator: '@4846fess'
  },
  icons: {
    icon: [
      {
        url: '/assets/favicon/favicon.ico',
        href: '/assets/favicon/favicon.ico',
      },
    ],
  },
  openGraph: {
    title: 'Home | 4846Fess',
    description: "48 & 46 Groups Fans Autobase based in Indonesia🇮🇩",
    image:[
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ThemeSwitch> */}
        <body className={inter.className}>{children}</body>
      {/* </ThemeSwitch> */}
    </html>
  );
}
