import Layout from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout
      title="Home"
      description="48 & 46 Groups Fans Autobase based in Indonesia🇮🇩"
      image="/assets/images/banner.png"
    >
      <main className="flex min-h-dvh items-center justify-center bg-[#f1ef99]">
        <div className="border border-8 border-[#D37676] px-16 py-8 flex items-center justify-center flex-col xs:px-6 md:px-32">
          <img
            src="/assets/images/logo-transparent.png"
            alt="@4846menfess logo"
            className="rounded-lg w-96"
            loading="lazy"
          />

          <h1 className="font-semibold text-slate-950 text-4xl md:text-3xl">Welcome!</h1>
          <span className="text-slate-950 text-base flex flex-col text-center items-center md:flex-row">
            4846GROUPS Fans Autobase based in Indonesia
            <img src="/assets/icons/id.svg" alt="" width={16} loading="lazy" className="ml-1" />
          </span>
        </div>
      </main>
    </Layout>
  );
};

export default Home;