import Layout from "@/components/layout/Layout";
import { ALLOWED_GROUPS, MENFESS_RULES } from "@/utils/Constants";

export const metadata = {
  title: 'Rules | 4846Fess',
  description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
  image: '/assets/images/logo.png',
  twitter: {
    card: '/assets/images/banner.png',
    site: '@4846fess',
    title: 'Rules | 4846Fess',
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
    title: 'Rules | 4846Fess',
    description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
    images: '/assets/images/logo.png',
  },
};

const Rules = () => {
  return (
    <Layout
      title='Rules | 4846Fess'
      description='48 & 46 Groups Fans Autobase based in Indonesia🇮🇩'
      images='/assets/images/logo.png'
    >
      <main className="flex flex-col min-h-dvh items-center justify-center bg-[#D37676] py-10">
        <div className="relative">
          <div id="container" className="bg-[#f1ef99] p-10">
            <div className="text-center mb-5">
              <span className="text-[#D37676] font-bold text-5xl tracking-widest">RULES</span>
            </div>

            <div className="mb-4 font-semibold">
              <span>DO</span>
              <ul className="list-decimal pl-8">
                {MENFESS_RULES.do.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="text-red-900 font-semibold">
              <span>DON'T</span>
              <ul className="list-decimal pl-8">
                {MENFESS_RULES.dont.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 px-6 md:w-11/12">
          <div className="text-center mb-5">
            <span className="text-[#f1ef99] font-bold tracking-widest text-2xl md:text-5xl">LIST IDOL GROUP YANG DIPERBOLEHKAN</span>
          </div>

          <div className="gap-10 flex flex-col bg-slate-50 p-10 md:flex-row justify-center w-fit">
            {ALLOWED_GROUPS.map((item, index) => (
              <img src={item} key={index} className="w-full md:w-1/6" alt="" loading="lazy" />
            ))}
          </div>

          <div className="text-center mt-5">
            <span className="text-[#f1ef99] font-bold tracking-widest text-lg md:text-2xl">*TIDAK TERMASUK SNH48 GROUP</span>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Rules;