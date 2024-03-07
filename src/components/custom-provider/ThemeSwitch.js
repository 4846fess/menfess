'use client';

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = ({ children }) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;
  
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeSwitch;