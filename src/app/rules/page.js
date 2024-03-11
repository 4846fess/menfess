'use client';

import Layout from "@/components/layout/Layout";
import { MENFESS_RULES } from "@/utils/Constants";

const Rules = () => {
  const getContainerWidth = () => {
    const el = document.getElementById('container');
    return { w: el?.clientWidth ?? 0, h: el?.clientHeight ?? 0 };
  };

  return (
    <Layout>
      <main className="flex min-h-dvh items-center justify-center bg-[#D37676]">
        <div className="relative">
          <div className="bg-[#dbba3a] absolute" style={{ width: getContainerWidth().w, height: getContainerWidth().h, right: -24, bottom: -24 }} />
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
      </main>
    </Layout>
  );
};

export default Rules;