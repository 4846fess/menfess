import Layout from "@/components/layout/Layout";
import { HOW_TO_SEND_VIA_TELEGRAM, DEFAULT_METADATA } from "@/utils/Constants";
import Script from "next/script";

export const metadata = {
  title: 'Tutorial | 4846Fess',
  description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
  image: '/assets/images/logo.png',
  twitter: {
    card: '/assets/images/banner.png',
    site: '@4846fess',
    title: 'Tutorial | 4846Fess',
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
    title: 'Tutorial | 4846Fess',
    description: "48 & 46 Groups Fans Autobase based in Indonesia🇮🇩",
    images: '/assets/images/logo.png',
  },
};

const Tutorial = () => {
  return (
    <Layout>
      <main className="flex min-h-dvh items-center justify-center bg-[#f1ef99]">
        <div className="columns-1 w-full p-3 md:columns-2 gap-3 max-w-5xl lg:w-11/12 max-w-none">
          <div className="md:flex justify-end">
            <div className="bg-slate-50 p-5">
              <span className="font-bold tracking-widest text-[#D37676] text-3xl lg:text-5xl">TUTORIAL MENGIRIM MENFESS VIA TELEGRAM</span>
              <ul className="list-decimal text-sm text-slate-950 ps-3 mt-3 font-semibold">
                {HOW_TO_SEND_VIA_TELEGRAM.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <blockquote className="twitter-tweet">
              <p lang="in" dir="ltr">Allo akak! 👋<br /><br />Berikut adalah video tutorial untuk mengirim menfess terbaru via Telegram.<br /><br />Boleh ditonton ya!<br /><br />Terima kasih 🤖🙏 <a href="https://t.co/YNFrZGXdtF">pic.twitter.com/YNFrZGXdtF</a></p>
              &mdash; Suvpen Zu 🚀🟣 (@suvpen) <a href="https://twitter.com/suvpen/status/1676368886869139456?ref_src=twsrc%5Etfw">July 4, 2023</a>
            </blockquote>
            <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Tutorial;