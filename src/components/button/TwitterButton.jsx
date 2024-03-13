'use client';

import { BsTwitterX } from "react-icons/bs";

const TwitterButton = () => {
  const handleClick = () => {
    window.open('https://twitter.com/4846fess', '_blank');
  };

  return (
    <button
      className="flex justify-center items-center font-semibold px-10 py-2 transition ease-in-out bg-[#f1ef99] text-slate-900 hover:bg-[#D37676] md:rounded-full"
      onClick={handleClick}
    >
      <BsTwitterX />
    </button>
  );
};

export default TwitterButton;