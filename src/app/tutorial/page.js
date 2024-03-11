import Layout from "@/components/layout/Layout";
import { HOW_TO_SEND_VIA_TELEGRAM } from "@/utils/Constants";

const Tutorial = () => {
  return (
    <Layout>
      <main className="flex min-h-dvh items-center justify-center bg-[#f1ef99]">
        <div className="columns-1 w-full p-3 md:columns-2 w-11/12">
          <div className="bg-slate-50 p-5">
            <span className="font-bold tracking-widest text-[#D37676] md:text-5xl">TUTORIAL MENGIRIM MENFESS VIA TELEGRAM</span>
            <ul className="list-decimal text-sm text-slate-950 ps-3 mt-3 font-semibold">
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
      </main>
    </Layout>
  );
};

export default Tutorial;