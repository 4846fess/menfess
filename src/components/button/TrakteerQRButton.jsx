'use client'

import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const TrakteerQRButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeTootlip = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  useEffect(() => {
    closeTootlip();
  }, []);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 w-fit rounded-full bg-[#D37676] border-[#f1ef99] px-6 py-2 text-slate-50"
        onClick={() => window.open('https://trakteer.id/4846fess/tip/', '__blank')}
        data-tooltip-id="trakteer-tooltip"
        data-tooltip-content="Cek ini dehhh"
      >
        Trakteer di sini!
      </button>
      <Tooltip id="trakteer-tooltip" isOpen={isOpen} style={{ borderRadius: '2rem', background: '#ff5436' }} />
    </>
  );
};

export default TrakteerQRButton;