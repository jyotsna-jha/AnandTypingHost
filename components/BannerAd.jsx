'use client'
import React, { useEffect, useRef } from 'react';

function BannerAd() {

    
  const banner = useRef(null);

  const atOptions = {
    key: '534e5dffb44e5d17d050e362a208b633',  
    format: 'iframe',
    height: 60,
    width: 468,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');

      conf.type = 'text/javascript';
      conf.innerHTML = `var atOptions = ${JSON.stringify(atOptions)};`;
      banner.current.appendChild(conf);

      script.type = 'text/javascript';
      script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`;
      banner.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={banner}
    ></div>
  );
}

export default BannerAd;
