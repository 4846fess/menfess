import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import ThemeSwitch from "@/components/custom-provider/ThemeSwitch";

const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Home | 4846Fess',
  description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
  image: '/assets/images/logo.png',
  twitter: {
    card: '/assets/images/banner.png',
    site: '@4846fess',
    title: 'Home | 4846Fess',
    description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
    image: '/assets/images/logo.png',
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
    images: '/assets/images/logo.png',
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
