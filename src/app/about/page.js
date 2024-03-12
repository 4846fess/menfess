import Layout from "@/components/layout/Layout";

export const metadata = {
  title: 'About | 4846Fess',
  description: '48 & 46 Groups Fans Autobase based in Indonesia🇮🇩',
  image: '/assets/images/logo.png',
  twitter: {
    card: '/assets/images/banner.png',
    site: '@4846fess',
    title: 'About | 4846Fess',
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
    title: 'About | 4846Fess',
    description: "48 & 46 Groups Fans Autobase based in Indonesia🇮🇩",
    image: '/assets/images/logo.png',
  },
};

const About = () => {
  return (
    <Layout>
      <main className="flex min-h-dvh items-center justify-center bg-[#b0c5a4]">
        <div className="flex flex-col md:flex-row w-full md:w-11/12">
          <img
            src="/assets/images/logo.png"
            alt="@4846menfess logo"
            loading="lazy"
            className="w-full md:w-1/3"
          />

          <div className="bg-[#D37676] p-5 flex flex-col justify-center">
            <span className="text-[#f1ef99] text-4xl font-semibold mb-2">4846FESS</span>
            <p className="text-slate-50 text-justify">4846FESS (4846 Menfess) adalah Wadah untuk Fans 4846Groups Indonesia mengirim menfess, Menfess singkatan dari MENtion ConFESSS / Sebuah pesan yang dikirim tanpa memberitahu identitas pengirim (anonymous), Identitas pengirim termasuk rahasia. Auto Menfess dikirim secara otomatis yang dipasang oleh Bot Auto Menfess. Mengirim menfess melalui Applikasi Telegram, Bisa mengirim menfess yang sudah difollback oleh base.  Admin hanya memantau apabila ada yang melanggar rules atau memberikan informasi lainnya.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;