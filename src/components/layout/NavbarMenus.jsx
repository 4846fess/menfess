'use client';

import { MENUS } from "@/utils/Constants";
import { usePathname, useRouter } from "next/navigation";
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from "react";
import TwitterButton from "../button/TwitterButton";
import { BottomSheet } from "react-spring-bottom-sheet";

const NavbarMenus = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const handleClick = (e, url) => { 
    e.preventDefault();
    router.push(url);
  };

  return (
    <>
      <div className="hidden md:flex flex-end flex-nowrap gap-x-2">
        {MENUS.map((item, index) => (
          <button
            key={index}
            className={`${pathname === item?.url ? 'bg-[#D37676]' : 'bg-[#f1ef99]'} px-10 py-2 rounded-full transition ease-in-out text-slate-900 hover:bg-[#D37676]`}
            onClick={(e) => handleClick(e, item?.url)}
          >
            <span>{item?.name}</span>
          </button>
        ))}
        <TwitterButton />
      </div>

      <div className="flex md:hidden">
        <Hamburger toggled={toggle} toggle={handleToggle} />

        <BottomSheet
          open={toggle}
          onDismiss={handleToggle}
          snapPoints={({ minHeight }) => minHeight}
          className="bottom-sheet"
          >
            <div className="flex flex-col bg-[#f1ef99] py-5">
              {MENUS?.map((item, key) => (
                <button
                  key={key}
                  className={`${pathname === item?.url ? 'bg-[#D37676]' : 'bg-[#f1ef99]'} px-10 py-2 transition ease-in-out text-slate-900 hover:bg-[#D37676]`}
                  onClick={(e) => handleClick(e, item?.url)}
                >
                  <span>{item?.name}</span>
                </button>
              ))}

              <TwitterButton />
            </div>
        </BottomSheet>
      </div>
    </>
  );
};

export default NavbarMenus;
