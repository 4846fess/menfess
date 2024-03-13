'use client';

import dayjs from 'dayjs';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-stone-900 text-center py-3 flex flex-col">
      <span className="text-slate-50 text-sm dark:text-slate-950 mb-2">If you have any complaints, feel free to contact <a href="https://twitter.com/4846fess2" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-cyan-500 transition ease-in-ou">@4846fess2</a> via mention/DM</span>
      <span className="text-slate-50 text-sm dark:text-slate-950 flex justify-center">
        &copy; {dayjs().format('YYYY')} • Baked with &nbsp;
        <AiFillHeart style={{ color: '#f397ae', fontSize: 18 }} />
        &nbsp; by <a href="https://twitter.com/4846fess" className="ml-1">Admin @4846fess</a>
      </span>
    </div>
  );
};

export default Footer;