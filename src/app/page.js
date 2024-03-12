import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout
      title="Home"
      description="48 & 46 Groups Fans Autobase based in Indonesia🇮🇩"
      image="/assets/images/banner.png"
    >
      <main className="flex min-h-dvh items-center justify-center bg-[#f1ef99]">
        <div className="border border-8 border-[#D37676] px-10 py-8 flex items-center justify-center flex-col">
          <img
            src="/assets/images/logo-transparent.png"
            alt="@4846menfess logo"
            className="rounded-lg w-32"
            loading="lazy"
          />

          <h1 className="font-semibold text-slate-950 text-md md:text-3xl">Welcome!</h1>
          <span className="text-slate-950 text-xs md:text-base">48 & 46 Groups Fans Autobase based in Indonesia🇮🇩</span>
        </div>
      </main>
    </Layout>
  );
};

export default Home;