import { AiOutlineTwitter } from "react-icons/ai";

const TwitterButton = () => {
  return (
    <button className="flex justify-between items-center bg-black px-4 py-2 rounded-full shadow transition ease-in-out hover:shadow-slate-50">
      <AiOutlineTwitter />
      <span className="ps-2 hidden md:block">Twitter</span>
    </button>
  );
};

export default TwitterButton;