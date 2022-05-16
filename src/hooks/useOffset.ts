import React, { useEffect } from 'react';

export function HandleOutsideClick(ref: React.RefObject<HTMLInputElement>, setChecked: any) {
  useEffect(() => {
    function handleClickEvent(event: any) {
      if (ref.current && !ref.current.contains(event.target))
        setChecked(false);
    }

    document.addEventListener('mousedown', handleClickEvent);

    return () => {
      document.removeEventListener('mousedown', handleClickEvent);
    };
  }, [ref]);
}
