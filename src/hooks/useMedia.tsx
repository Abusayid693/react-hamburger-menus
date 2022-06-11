import { useEffect, useState } from 'react';

export const useMedia = (query: string, val: number) => {
  const [media, setMedia] = useState(false)
  const queryStr = `(${query}: ${val}px)`;

  useEffect(() => {
    const mediaWatcher = window.matchMedia(queryStr);
    mediaWatcher.matches ? setMedia(true) : setMedia(false);

    function updateMediaWatcher(e: any) {
      e.matches ? setMedia(true) : setMedia(false);
    }
    mediaWatcher.addEventListener('change', updateMediaWatcher);

    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateMediaWatcher);
    };
  },[]);

  return media
};
