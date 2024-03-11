'use client';

import { AiOutlineTwitter } from "react-icons/ai";

const TwitterButton = () => {
  const handleClick = () => {
    window.open('https://twitter.com/4846fess', '_blank');
  };

  return (
    <button
      className="flex justify-between items-center px-4 py-2 rounded-full shadow transition ease-in-out bg-[#f1ef99] text-slate-900 hover:bg-[#D37676]"
      onClick={handleClick}
    >
      <AiOutlineTwitter />
      <span className="ps-2 hidden md:block">Twitter</span>
    </button>
  );
};

export default TwitterButton;