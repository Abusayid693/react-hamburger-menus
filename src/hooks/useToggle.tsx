import { useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setClose = () => setIsOpen(false);
  const setOpen = () => setIsOpen(true);
  const setToggle = ()=> setIsOpen((prev)=> !prev);

  return {isOpen, setClose, setOpen, setToggle};
};