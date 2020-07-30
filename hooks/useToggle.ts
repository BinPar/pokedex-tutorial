import React, { useState } from 'react';

interface ToggleInterface {
  (ev: React.MouseEvent): void;
}

const useToggle = (initialValue = false): [boolean, ToggleInterface] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);
  
  const toggle: ToggleInterface = (ev) => {
    ev.preventDefault();    
    setIsOpen((value) => !value);
  };
  return [isOpen, toggle];
};

export default useToggle;
