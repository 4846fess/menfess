import Layout from "@/components/layout/Layout";
import { HOW_TO_SEND_VIA_TELEGRAM, MENFESS_RULES } from "@/utils/Constants";

const Home = () => {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="w-full flex flex-center items-center flex-col relative">
          <img
            src="/assets/icons/banner.svg"
            alt="@4846menfess logo"
            className="rounded-lg w-11/12 md:w-9/12 mb-5"
          />
        
          <div className="flex flex-col text-center absolute bottom-10">
            <h1 className="text-3xl font-semibold text-slate-950">Welcome!</h1>
            <span className="text-slate-950">48 & 46 Groups Fans Autobase based in Indonesia🇮🇩</span>
          </div>
        </div>

        <div className="w-11/12 md:w-9/12 p-10">
          <span className="font-semibold">Rules</span>
          <ul className="list-decimal text-slate-50 text-sm dark:text-slate-950 ps-3">
            {MENFESS_RULES.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-slate-50 shadow p-5 w-11/12 mb-5 md:w-9/12">
          <div>
            <span className="font-semibold text-slate-950">📢 TUTORIAL MENGIRIM MENFESS VIA TELEGRAM</span>
            <ul className="list-decimal text-sm text-slate-950 ps-3">
              {HOW_TO_SEND_VIA_TELEGRAM.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: `
                <blockquote class="twitter-tweet">
                  <p lang="in" dir="ltr">Allo akak! 👋<br><br>Berikut adalah video tutorial untuk mengirim menfess terbaru via Telegram.<br><br>Boleh ditonton ya!<br><br>Terima kasih 🤖🙏 <a href="https://t.co/YNFrZGXdtF">pic.twitter.com/YNFrZGXdtF</a></p>
                  &mdash; Suvpen Zu 🚀🟣 (@suvpen) <a href="https://twitter.com/suvpen/status/1676368886869139456?ref_src=twsrc%5Etfw">July 4, 2023</a>
                </blockquote>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              `,
            }}
          />
        </div>

        <div>
          <span className="text-slate-50 text-sm dark:text-slate-950">If you have any complaints, feel free to contact <a href="https://twitter.com/4846fess2" target="_blank" rel="noopener noreferrer" className="font-semibold">@4846fess2</a> via mention/DM</span>
        </div>
      </main>
    </Layout>
  );
};

export default Home;