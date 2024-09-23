"use client";

import { useEffect } from "react";
import Script from "next/script";

const Adsense = ({ pId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`;
    script.async = true;
    script.crossOrigin = "anonymous"; // Match this with your setup
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Adsense;
